declare const require: any;
declare const __dirname: string;
declare var module: any;
const fs = require("fs");
const path = require("path");

type KodiMethod = {
  description?: string;
  params?: Array<any>;
  returns?: any;
  type?: string;
};

export class KodiNamespaceGenerator {
  kodiJsonPath: string;
  outDir: string;
  specTypes?: Record<string, any>;
  writtenTypes: Set<string> = new Set();
  typeDeps: Record<string, Set<string>> = {};
  anonCounter: number = 1;

  constructor(kodiJsonPath: string, outDir: string) {
    this.kodiJsonPath = kodiJsonPath;
    this.outDir = outDir;
  }

  loadSpec(): any {
    const raw = fs.readFileSync(this.kodiJsonPath, "utf8");
    return JSON.parse(raw);
  }

  ensureOutDir() {
    if (!fs.existsSync(this.outDir))
      fs.mkdirSync(this.outDir, { recursive: true });
  }

  ensureTypesOutDir(typesOut: string) {
    if (!fs.existsSync(typesOut)) fs.mkdirSync(typesOut, { recursive: true });
  }

  // Convert method name like "Input.Back" -> namespace "Input" and method "Back"
  splitMethod(fullName: string) {
    const parts = fullName.split(".");
    const ns = parts.shift() || "";
    const name = parts.join(".");
    return { ns, name };
  }

  // Create a simple typed method signature using available param info.
  buildMethod(
    ns: string,
    name: string,
    method: KodiMethod,
    helpers?: Set<string>
  ) {
    // derive params signature
    const params = method.params || [];
    const paramsInterfaceName = params.length ? `${ns}${name}Params` : null;
    const responseInterfaceName = (() => {
      if (method.returns) {
        if (method.returns.$ref) return this.refToTypeName(method.returns.$ref);
        if (method.returns.properties) return `${ns}${name}Response`;
        if (method.returns.type) return this.jsonTypeToTs(method.returns.type);
      }
      return "any";
    })();

    const doc = method.description
      ? `  /**\n   * ${method.description.replace(/\n/g, "\n   * ")}\n   */\n`
      : "";

    // collect param docs while building the inline params shape
    const paramDocs: Array<{ name: string; type: string; optional: boolean }> = [];

    const paramsSig = paramsInterfaceName ? `${paramsInterfaceName}` : "";
    const methodParams = paramsInterfaceName
      ? `params: ${paramsInterfaceName}`
      : "";
    const sendParams = paramsInterfaceName ? "params" : "{}";

    // build an inline params object type where 'properties' can be replaced with the generic P to aid inference
    const paramsInline = (() => {
      const typesOut = path.join(this.outDir, "..", "types");
      const parts: string[] = [];
      (method.params || []).forEach((p: any) => {
        const pname = p.name || "param";
        let ptype: string;
        if (p.$ref) ptype = this.refToTypeName(p.$ref);
        else
          ptype = this.schemaToTs(
            p,
            typesOut,
            `${paramsInterfaceName}${this.capitalize(pname)}`,
            paramsInterfaceName || `${ns}${name}Params`
          );
        // leave a placeholder type name; later when generating the generic overload we'll replace 'properties' with 'P'
        const optional = p.required ? "" : "?";
        parts.push(`${pname}${optional}: ${ptype}`);
        paramDocs.push({ name: pname, type: ptype, optional: !p.required });
      });
      return `{ ${parts.join("; ")} }`;
    })();

    // Build a JSDoc block with description, @param and @returns
    const jsdoc = (() => {
      const lines: string[] = [];
      lines.push("  /**");
      if (method.description) {
        method.description.split("\n").forEach((ln: string) =>
          lines.push(`   * ${ln}`)
        );
      } else {
        lines.push("   *");
      }
      paramDocs.forEach((pd) => {
        lines.push(
          `   * @param ${pd.name} ${pd.type}${pd.optional ? " (optional)" : ""}`
        );
      });
      // compute a reasonable return type for docs
      let returnTypeDoc = "any";
      if (method.returns) {
        if (method.returns.$ref) returnTypeDoc = this.refToTypeName(method.returns.$ref);
        else if (method.returns.properties) returnTypeDoc = `${ns}${name}Response`;
        else if (method.returns.type) returnTypeDoc = this.jsonTypeToTs(method.returns.type);
      }
      lines.push(`   * @returns ${returnTypeDoc}`);
      lines.push("   */\n");
      return lines.join("\n");
    })();

    // special-case: methods that accept List.Fields.* as a 'properties' param and return List.Item.*
    const hasListFieldsParam = (method.params || []).some((p: any) => {
      if (
        p &&
        p.$ref &&
        typeof p.$ref === "string" &&
        p.$ref.startsWith("List.Fields")
      )
        return true;
      if (
        p &&
        typeof p.name === "string" &&
        /^(properties|props|fields)$/.test(p.name)
      )
        return true;
      return false;
    });
    let itemRef: string | undefined = undefined;
    let itemsAreArray = false;
    // cases:
    // - returns.$ref -> a direct List.Item.* reference (single item)
    // - returns.properties.item.$ref -> single item nested under 'item'
    // - returns.properties.items.$ref -> array of items under 'items'
    // - returns.type === 'array' && returns.items.$ref -> top-level array return
    if (method.returns) {
      if (method.returns.$ref) {
        itemRef = this.refToTypeName(method.returns.$ref);
        itemsAreArray = false;
      } else if (
        method.returns.properties &&
        method.returns.properties.item &&
        method.returns.properties.item.$ref
      ) {
        itemRef = this.refToTypeName(method.returns.properties.item.$ref);
        itemsAreArray = false;
      } else if (method.returns.properties && method.returns.properties.items) {
        const itemsProp = method.returns.properties.items;
        if (itemsProp.$ref) {
          itemRef = this.refToTypeName(itemsProp.$ref);
          itemsAreArray = true;
        } else if (itemsProp.items && itemsProp.items.$ref) {
          itemRef = this.refToTypeName(itemsProp.items.$ref);
          itemsAreArray = true;
        }
      } else if (
        method.returns.type === "array" &&
        method.returns.items &&
        method.returns.items.$ref
      ) {
        itemRef = this.refToTypeName(method.returns.items.$ref);
        itemsAreArray = true;
      }
    }
    if (hasListFieldsParam && itemRef) {
      const paramsType = paramsInterfaceName || "any";
      const lines: string[] = [];
      // prefer returning the unwrapped item(s) as the method result (no wrapper with 'items' or 'item')
      const respName = itemsAreArray ? `${itemRef}[]` : itemRef;
      // build generic return type when properties narrow returned item — emit the narrow overload first so it is preferred
      if (itemsAreArray) {
        // build other response props (e.g., limits) from method.returns.properties
        const parts: string[] = [];
        const props = method.returns.properties || {};
        Object.keys(props).forEach((k) => {
          if (k === "items") {
            parts.push(
              `items: Array<Pick<${itemRef}, Extract<P[number], __${itemRef}Keys>>>`
            );
          } else {
            const p = props[k];
            if (p && p.$ref) {
              parts.push(`${k}: ${this.refToTypeName(p.$ref)}`);
            } else {
              // fallback to schemaToTs for inline schema
              const t = this.schemaToTs(
                p,
                path.join(this.outDir, "..", "types"),
                `${ns}${name}Response${this.capitalize(k)}`
              );
              parts.push(`${k}: ${t}`);
            }
          }
        });
        // replace the 'properties' property's type with the generic `P` so tuples infer correctly
        const paramsInlineWithP = paramsInline.replace(
          /(properties|props|fields)\??:\s*[^;\}]+/,
          `$1: P`
        );
        if (helpers && itemRef) helpers.add(itemRef);
        // Narrowing overload returns the array of picked items (unwrapped)
        lines.push(
          `  async ${name}<P extends readonly __${itemRef}Keys[]>(params: ${paramsInlineWithP}): Promise<Array<Pick<${itemRef}, Extract<P[number], __${itemRef}Keys>>>>;`
        );
        // default overload returning the unwrapped items/item
        lines.push(
          `${jsdoc}  async ${name}(params: ${paramsType}): Promise<${respName}>;`
        );
      } else {
        // single-item response — emit narrow overload first
        const paramsInlineWithP = paramsInline.replace(
          /(properties|props|fields)\??:\s*[^;\}]+/,
          `$1: P`
        );
        if (helpers && itemRef) helpers.add(itemRef);
        // Narrowing overload returns the single picked item (unwrapped)
        lines.push(
          `  async ${name}<P extends readonly __${itemRef}Keys[]>(params: ${paramsInlineWithP}): Promise<Pick<${itemRef}, Extract<P[number], __${itemRef}Keys>>>;`
        );
        // default overload returning the standard response (if a response interface exists)
        lines.push(
          `${jsdoc}  async ${name}(params: ${paramsType}): Promise<${respName}>;`
        );
      }

      // implementation: call sendMessage with the unwrapped response generic when possible
      const implReturnType = respName;
      lines.push(`  async ${name}(params: any) {`);
      lines.push(
        `    return this.sendMessage<${implReturnType}>("${ns}.${name}", params);`
      );
      lines.push("  }");
      return lines.join("\n") + "\n";
    }
    // handled above when hasListFieldsParam && itemRef

    return `${jsdoc}  async ${name}(${methodParams}): Promise<${responseInterfaceName}> {\n    return this.sendMessage<${responseInterfaceName}>("${ns}.${name}", ${sendParams});\n  }\n`;
  }

  // Generate per-method params and response interfaces
  generateMethodTypes(
    ns: string,
    name: string,
    method: KodiMethod,
    typesOut: string
  ) {
    const params = method.params || [];
    if (params.length) {
      const ifaceName = `${ns}${name}Params`;
      const lines: string[] = [];
      lines.push(`export interface ${ifaceName} {`);
      params.forEach((p: any) => {
        const pname = p.name || "param";
        let ptype = this.schemaToTs(
          p,
          typesOut,
          `${ifaceName}${this.capitalize(pname)}`,
          ifaceName
        );
        // if schemaToTs returned a named type, ensure the params interface depends on it
        if (
          typeof ptype === "string" &&
          /^[A-Za-z0-9_]+$/.test(ptype) &&
          ptype !== ifaceName &&
          !this.isPrimitiveTsType(ptype)
        ) {
          this.typeDeps[ifaceName] = this.typeDeps[ifaceName] || new Set();
          this.typeDeps[ifaceName].add(ptype);
        }
        const optional = p.required ? "" : "?";
        lines.push(`  ${pname}${optional}: ${ptype};`);
      });
      lines.push("}");
      this.writeTypeIfNotExists(ifaceName, lines.join("\n"), typesOut);
    }

    if (method.returns) {
      if (method.returns.$ref) {
        // referenced return type handled by generateTypes
      } else if (method.returns.properties) {
        const respName = `${ns}${name}Response`;
        const iface = {
          type: "object",
          properties: method.returns.properties,
          additionalProperties: method.returns.additionalProperties,
        };
        const resType = this.schemaToTs(iface, typesOut, respName, respName);
        if (!this.writtenTypes.has(respName)) {
          // schemaToTs wrote the interface
        }
      }
    }
  }

  refToTypeName(ref: string) {
    // turn 'Addon.Fields' -> 'AddonFields'
    return ref.replace(/\./g, "");
  }

  // Generate types for definitions in the spec.types object
  generateTypes(spec: any, typesOut: string) {
    this.ensureTypesOutDir(typesOut);
    const defs = spec.types || {};
    this.specTypes = defs;
    Object.keys(defs).forEach((key) => {
      const def = defs[key];
      if (!def || typeof def !== "object") return;
      const id = def.id || key;
      const typeName = this.refToTypeName(id);
      // Use schemaToTs to create the type, requesting named interface where appropriate
      const ts = this.schemaToTs(def, typesOut, typeName, typeName);
      // If schemaToTs returned a raw union (not a named interface), write an alias
      if (!this.writtenTypes.has(typeName)) {
        if (/\bexport interface\b/.test(ts)) {
          // already written by schemaToTs
        } else {
          // write a type alias
          this.writeTypeIfNotExists(
            typeName,
            `export type ${typeName} = ${ts};`,
            typesOut
          );
        }
      }
    });
  }

  getDefByRef(ref: string): any {
    if (!this.specTypes) return undefined;
    if (this.specTypes[ref]) return this.specTypes[ref];
    // search by id field
    const keys = Object.keys(this.specTypes);
    for (const k of keys) {
      const d = this.specTypes[k];
      if (d && d.id === ref) return d;
    }
    return undefined;
  }

  generate() {
    const spec = this.loadSpec();
    const typesOut = path.join(this.outDir, "..", "types");
    this.generateTypes(spec, typesOut);
    const methods: Record<string, any> = spec.methods || {};
    const namespaces: Record<
      string,
      Array<{ name: string; method: KodiMethod; full: string }>
    > = {};

    Object.keys(methods).forEach((full) => {
      const { ns, name } = this.splitMethod(full);
      if (!namespaces[ns]) namespaces[ns] = [];
      namespaces[ns].push({ name, method: methods[full], full });
    });

    this.ensureOutDir();

    Object.keys(namespaces).forEach((ns) => {
      const className = `Kodi${ns}Namespace`;
      const lines: string[] = [];
      lines.push("import { ISendMessage } from '../../';");
      // add imports for types referenced in this namespace
      const refs = new Set<string>();
      // helpers are helper item types we need to emit as type aliases before the class
      const helpers = new Set<string>();
      lines.push("");
      // we'll emit helper aliases (e.g., type __ListItemAllKeys = keyof ListItemAll;) after imports
      // class header will be emitted later

      const methodsLines: string[] = [];
      namespaces[ns].forEach((m) => {
        // collect $ref usages from params and returns
        const pm = m.method.params || [];
        pm.forEach((p: any) => {
          if (p.$ref) refs.add(this.refToTypeName(p.$ref));
        });
        if (m.method.returns) {
          if (m.method.returns.$ref)
            refs.add(this.refToTypeName(m.method.returns.$ref));
          if (m.method.returns.properties) {
            Object.keys(m.method.returns.properties).forEach((k) => {
              const v = m.method.returns.properties[k];
              if (!v) return;
              if (v.$ref) refs.add(this.refToTypeName(v.$ref));
              // items: { items: { $ref: 'List.Item.All' } }
              if (v.items && v.items.$ref)
                refs.add(this.refToTypeName(v.items.$ref));
              // item: { $ref: 'List.Item.All' }
              if (v.item && v.item.$ref)
                refs.add(this.refToTypeName(v.item.$ref));
            });
          }
          // top-level array returns: { type: 'array', items: { $ref: 'List.Item.All' } }
          if (
            m.method.returns.type === "array" &&
            m.method.returns.items &&
            m.method.returns.items.$ref
          ) {
            refs.add(this.refToTypeName(m.method.returns.items.$ref));
          }
        }

        // generate per-method types into typesOut
        const typesOut = path.join(this.outDir, "..", "types");
        this.generateMethodTypes(ns, m.name, m.method, typesOut);
        // include generated method param/response types
        if ((m.method.params || []).length) refs.add(`${ns}${m.name}Params`);
        if (m.method.returns && m.method.returns.properties)
          refs.add(`${ns}${m.name}Response`);

        const methodSnippet = this.buildMethod(ns, m.name, m.method, helpers);
        methodsLines.push(methodSnippet);
      });

      // write imports for collected refs
      if (refs.size) {
        const imports = Array.from(refs).map(
          (r) => `import { ${r} } from '../types/${r}';`
        );
        // insert imports after the ISendMessage import
        lines.splice(1, 0, ...imports, "");
      }

      // emit helper type aliases for any refs that are actually referenced in the method overloads
      const methodsText = methodsLines.join("\n");
      const helperLines: string[] = [];
      const combinedRefs = Array.from(
        new Set([...Array.from(refs), ...Array.from(helpers)])
      );
      combinedRefs.forEach((r) => {
        const keyName = `__${r}Keys`;
        if (methodsText.includes(keyName)) {
          helperLines.push(`type ${keyName} = keyof ${r};`);
        }
      });
      if (helperLines.length) {
        // find position after imports to insert helper aliases
        let insertAt = 1;
        while (insertAt < lines.length && !lines[insertAt].trim()) insertAt++;
        lines.splice(insertAt, 0, "", ...helperLines, "");
      }

      // now emit class header
      lines.push(`export class ${className} {`);
      lines.push("  private sendMessage: ISendMessage;");
      lines.push("");
      lines.push("  constructor(sendMessage: ISendMessage) {");
      lines.push("    this.sendMessage = sendMessage;");
      lines.push("  }");
      lines.push("");

      // append methods
      methodsLines.forEach((ln) => lines.push(ln));

      lines.push("}");

      const outPath = path.join(this.outDir, `${ns.toLowerCase()}.ts`);
      fs.writeFileSync(outPath, lines.join("\n"), "utf8");
    });

    // post-process generated namespace files to fix relative imports and primitive names
    this.postProcessGenerated();
  }

  postProcessGenerated() {
    const dir = this.outDir;
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter((f: string) => f.endsWith(".ts"));
    files.forEach((f: string) => {
      const p = path.join(dir, f);
      let content = fs.readFileSync(p, "utf8");
      // normalize ISendMessage import to point to project root
      content = content.replace(
        "import { ISendMessage } from '..';",
        "import { ISendMessage } from '../../';"
      );
      fs.writeFileSync(p, content, "utf8");
    });
  }

  jsonTypeToTs(t: any): string {
    if (Array.isArray(t)) {
      // prefer a primitive if present
      const prim = t.find((x: any) => typeof x === "string");
      return this.jsonTypeToTs(prim || t[0]);
    }
    if (typeof t === "string") {
      switch (t) {
        case "integer":
          return "number";
        case "number":
          return "number";
        case "string":
          return "string";
        case "boolean":
          return "boolean";
        case "array":
          return "unknown[]";
        case "object":
          return "Record<string, unknown>";
        default:
          return "any";
      }
    }
    if (typeof t === "object") return "any";
    return "any";
  }

  writeTypeIfNotExists(typeName: string, content: string, typesOut: string) {
    if (this.writtenTypes.has(typeName)) return;
    this.writtenTypes.add(typeName);
    // start with recorded deps
    const recorded = Array.from(this.typeDeps[typeName] || []).filter(
      (d) => d && d !== typeName && !this.isPrimitiveTsType(d)
    );
    const inferred = new Set<string>();
    // scan content for Type-like identifiers (capitalized words) and check if a corresponding file exists
    const tokenRegex = /\b([A-Z][A-Za-z0-9_]*)\b/g;
    let m: RegExpExecArray | null;
    while ((m = tokenRegex.exec(content))) {
      const tok = m[1];
      if (tok === typeName) continue;
      if (this.isPrimitiveTsType(tok)) continue;
      // ensure not a local keyword like 'Promise' or common globals
      if (["Promise", "Array", "Record", "ReadonlyArray"].includes(tok))
        continue;
      const candidate = path.join(typesOut, `${tok}.ts`);
      try {
        if (fs.existsSync(candidate)) inferred.add(tok);
      } catch (e) {
        // ignore FS errors
      }
    }

    const depsSet = new Set<string>(recorded.concat(Array.from(inferred)));
    const deps = Array.from(depsSet).filter(
      (d) => d && d !== typeName && !this.isPrimitiveTsType(d)
    );
    const outFile = path.join(typesOut, `${typeName}.ts`);
    const lines: string[] = [];
    // write imports for deps from same folder
    deps.forEach((d) => {
      lines.push(`import { ${d} } from './${d}';`);
    });
    if (deps.length) lines.push("");
    lines.push(content);
    fs.writeFileSync(outFile, lines.join("\n"), "utf8");
  }

  isPrimitiveTsType(t: string): boolean {
    if (!t) return false;
    const primitives = new Set([
      "string",
      "number",
      "boolean",
      "any",
      "unknown",
      "unknown[]",
      "Record<string, unknown>",
    ]);
    if (primitives.has(t)) return true;
    // arrays of primitive like number[] or string[]
    const m = t.match(/^(.+)\[\]$/);
    if (m) return this.isPrimitiveTsType(m[1]);
    return false;
  }

  // Convert a JSON Schema fragment into a TS type or write a named interface and return its name
  schemaToTs(
    schema: any,
    typesOut: string,
    suggestedName?: string,
    currentType?: string
  ): string {
    if (!schema) return "any";
    if (schema.$ref) {
      const refName = this.refToTypeName(schema.$ref);
      if (currentType) {
        this.typeDeps[currentType] = this.typeDeps[currentType] || new Set();
        this.typeDeps[currentType].add(refName);
      }
      return refName;
    }

    if (schema.enums && Array.isArray(schema.enums)) {
      return schema.enums.map((e: any) => JSON.stringify(e)).join(" | ");
    }

    // handle case where schema.type is an array of schemas (not just strings)
    if (Array.isArray(schema.type)) {
      const items = schema.type.map((t: any, idx: number) => {
        if (typeof t === "string") return this.jsonTypeToTs(t);
        // t is a nested schema object
        return this.schemaToTs(
          t,
          typesOut,
          schema && schema.id
            ? this.refToTypeName(schema.id) + "Option" + idx
            : suggestedName
            ? `${suggestedName}Option${idx}`
            : undefined,
          currentType
        );
      });
      return items.join(" | ");
    }

    if (schema.oneOf || schema.anyOf) {
      const arr = schema.oneOf || schema.anyOf;
      const items = arr.map((s: any, idx: number) =>
        this.schemaToTs(
          s,
          typesOut,
          suggestedName ? `${suggestedName}Option${idx}` : undefined,
          currentType
        )
      );
      return items.join(" | ");
    }

    if (schema.allOf) {
      // if allOf contains object schemas, merge properties into one interface
      const name = suggestedName || "Combined";
      const lines: string[] = [];
      lines.push(`export interface ${name} {`);
      schema.allOf.forEach((s: any, idx: number) => {
        if (s.$ref) {
          const refName = this.refToTypeName(s.$ref);
          // record dependency
          if (currentType) {
            this.typeDeps[currentType] =
              this.typeDeps[currentType] || new Set();
            this.typeDeps[currentType].add(refName);
          }
          lines.push(`  // includes ${refName}`);
        } else if (s.properties) {
          Object.keys(s.properties).forEach((p) => {
            const prop = s.properties[p];
            const ptype = this.schemaToTs(
              prop,
              typesOut,
              `${name}${this.capitalize(p)}`,
              currentType
            );
            const optional = prop.required ? "" : "?";
            lines.push(`  ${p}${optional}: ${ptype};`);
          });
        }
      });
      lines.push("}");
      this.writeTypeIfNotExists(name, lines.join("\n"), typesOut);
      return name;
    }

    if (schema.type === "array" || (schema.items && !schema.type)) {
      const items = schema.items || {};
      if (items.$ref) {
        const t = `${this.refToTypeName(items.$ref)}[]`;
        if (currentType) {
          this.typeDeps[currentType] = this.typeDeps[currentType] || new Set();
          this.typeDeps[currentType].add(this.refToTypeName(items.$ref));
        }
        return t;
      }
      if (items.enums)
        return `Array<${items.enums
          .map((e: any) => JSON.stringify(e))
          .join(" | ")}>`;
      if (items.properties) {
        const itemName = suggestedName
          ? `${suggestedName}Item`
          : `AnonType${this.anonCounter++}`;
        const innerType = this.schemaToTs(
          {
            type: "object",
            properties: items.properties,
            additionalProperties: items.additionalProperties,
          },
          typesOut,
          itemName,
          currentType || itemName
        );
        // if innerType is a named type, ensure currentType depends on it
        if (
          currentType &&
          typeof innerType === "string" &&
          /^[A-Za-z0-9_]+$/.test(innerType) &&
          !this.isPrimitiveTsType(innerType)
        ) {
          this.typeDeps[currentType] = this.typeDeps[currentType] || new Set();
          this.typeDeps[currentType].add(innerType);
        }
        return `${innerType}[]`;
      }
      // fallback to basic
      const primitive = this.jsonTypeToTs(items.type || "any");
      return `${primitive}[]`;
    }

    if (schema.type === "object" || schema.properties) {
      const name =
        suggestedName ||
        (schema.id
          ? this.refToTypeName(schema.id)
          : `AnonType${this.anonCounter++}`);
      const lines: string[] = [];
      // handle 'extends' (kodi.json uses an 'extends' field to reference other types)
      let extendClause = "";
      if (schema.extends) {
        const exts = Array.isArray(schema.extends)
          ? schema.extends
          : [schema.extends];
        const extNames: string[] = [];
        exts.forEach((e: any) => {
          if (typeof e === "string") {
            const en = this.refToTypeName(e);
            extNames.push(en);
            if (currentType) {
              this.typeDeps[currentType] =
                this.typeDeps[currentType] || new Set();
              this.typeDeps[currentType].add(en);
            }
          } else if (e && e.$ref) {
            const en = this.refToTypeName(e.$ref);
            extNames.push(en);
            if (currentType) {
              this.typeDeps[currentType] =
                this.typeDeps[currentType] || new Set();
              this.typeDeps[currentType].add(en);
            }
          }
        });
        if (extNames.length) extendClause = ` extends ${extNames.join(", ")}`;
      }
      lines.push(`export interface ${name}${extendClause} {`);
      if (schema.properties) {
        // collect property names from any extended types to avoid duplicate/conflicting declarations
        const extendedProps = new Set<string>();
        if (schema.extends) {
          const exts = Array.isArray(schema.extends)
            ? schema.extends
            : [schema.extends];
          exts.forEach((e: any) => {
            let def: any = undefined;
            if (typeof e === "string") def = this.getDefByRef(e);
            else if (e && e.$ref) def = this.getDefByRef(e.$ref);
            if (def && def.properties)
              Object.keys(def.properties).forEach((k) => extendedProps.add(k));
            // if extended types themselves extend, we might recursively collect; keep it simple for now
          });
        }
        Object.keys(schema.properties).forEach((p) => {
          if (extendedProps.has(p)) return; // skip property already provided by extended types
          const prop = schema.properties[p];
          const ptype = this.schemaToTs(
            prop,
            typesOut,
            `${name}${this.capitalize(p)}`,
            currentType || name
          );
          const optional = prop.required ? "" : "?";
          // if ptype is a named type, record dependency both for this named type file and the requested currentType (parent)
          if (
            typeof ptype === "string" &&
            /^[A-Za-z0-9_]+$/.test(ptype) &&
            ptype !== name &&
            !this.isPrimitiveTsType(ptype)
          ) {
            // dependency for the type we're currently writing
            this.typeDeps[name] = this.typeDeps[name] || new Set();
            this.typeDeps[name].add(ptype);
            // also register dependency for the outer/current type so parent files import this named type
            if (currentType && currentType !== name) {
              this.typeDeps[currentType] =
                this.typeDeps[currentType] || new Set();
              this.typeDeps[currentType].add(ptype);
            }
          }
          lines.push(`  ${p}${optional}: ${ptype};`);
        });
      }
      if (schema.additionalProperties) {
        if (schema.additionalProperties === true) {
          lines.push(`  [key: string]: any | undefined;`);
        } else if (typeof schema.additionalProperties === "object") {
          const apType = this.schemaToTs(
            schema.additionalProperties,
            typesOut,
            `${name}AdditionalProperty`,
            currentType || name
          );
          if (
            typeof apType === "string" &&
            /^[A-Za-z0-9_]+$/.test(apType) &&
            apType !== name &&
            !this.isPrimitiveTsType(apType)
          ) {
            this.typeDeps[name] = this.typeDeps[name] || new Set();
            this.typeDeps[name].add(apType);
            if (currentType && currentType !== name) {
              this.typeDeps[currentType] =
                this.typeDeps[currentType] || new Set();
              this.typeDeps[currentType].add(apType);
            }
          }
          lines.push(`  [key: string]: ${apType} | undefined;`);
        }
      }
      lines.push("}");
      this.writeTypeIfNotExists(name, lines.join("\n"), typesOut);
      return name;
    }

    // fallback: primitive
    return this.jsonTypeToTs(schema.type || "any");
  }

  capitalize(s: string) {
    return s && s.length ? s[0].toUpperCase() + s.slice(1) : s;
  }
}

// If this file is executed directly, emit generated namespaces into src/generated/namespaces
if (require.main === module) {
  const root = path.resolve(__dirname);
  const spec = path.join(root, "kodi.json");
  const out = path.join(root, "generated", "namespaces");
  const g = new KodiNamespaceGenerator(spec, out);
  g.generate();
  // eslint-disable-next-line no-console
  console.log(`Generated namespaces into ${out}`);
}
