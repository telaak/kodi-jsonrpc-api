// Types and Interfaces Block
// These types and interfaces are specific to the Textures methods and do not exist in koditestExports.ts

/**
 * Texture ($ref: "Textures.Texture")
 * Represents a texture item.
 */
export interface Texture {
  // As defined in kodi.json -> Textures.Details.Texture
  textureid: number; // Library.Id
  url?: string; // Original source URL
  cachedurl?: string; // Cached URL on disk
  lasthashcheck?: string; // Last time source was checked for changes
  imagehash?: string; // Hash of image
  sizes?: TexturesDetailsSize[]; // Available sizes
}

/**
 * TextureType ($ref: "Textures.TextureType")
 * Enum for types of textures.
 */
export type TextureType =
  | "background"
  | "icon"
  | "banner"
  | "thumbnail"
  | "profile"
  | "custom";

/**
 * TextureFormat ($ref: "Textures.TextureFormat")
 * Enum for texture formats.
 */
export type TextureFormat = "PNG" | "JPEG" | "BMP" | "TGA" | "GIF" | "TIFF";

/**
 * TexturesGetTexturesParams ($ref: "Textures.GetTextures.Params")
 * Parameters for the GetTextures method.
 */
export interface TexturesGetTexturesParams {
  properties?: TextureFields[]; // Optional list of properties to retrieve for each texture
  filter?: TextureFilter; // Optional filter criteria (List.Filter.Textures shape)
  limit?: number; // Optional limit on the number of textures to retrieve
  offset?: number; // Optional offset for pagination
}

/**
 * TexturesGetTexturesResponse ($ref: "Textures.GetTextures.Response")
 * Response structure for the GetTextures method.
 */
export interface TexturesGetTexturesResponse {
  textures: Texture[]; // List of retrieved textures
  total: number; // Total number of textures available
}

/**
 * TexturesRemoveTextureParams ($ref: "Textures.RemoveTexture.Params")
 * Parameters for the RemoveTexture method.
 */
export interface TexturesRemoveTextureParams {
  textureid: number; // ID of the texture to remove (Library.Id)
}

/**
 * TexturesRemoveTextureResponse ($ref: "Textures.RemoveTexture.Response")
 * Response structure for the RemoveTexture method.
 */
export type TexturesRemoveTextureResponse = string; // Typically empty on success

/**
 * TextureFields ($ref: "Textures.Fields.Texture")
 * Enum for texture fields that can be retrieved.
 */
export type TextureFields =
  | "url"
  | "cachedurl"
  | "lasthashcheck"
  | "imagehash"
  | "sizes";

/**
 * TextureFilter ($ref: "Textures.Filter")
 * Interface for filtering textures.
 */
/** Operators used by List.Filter (from kodi.json "List.Filter.Operators") */
export type ListFilterOperator =
  | "contains"
  | "doesnotcontain"
  | "is"
  | "isnot"
  | "startswith"
  | "endswith"
  | "greaterthan"
  | "lessthan"
  | "after"
  | "before"
  | "inthelast"
  | "notinthelast"
  | "true"
  | "false"
  | "between";

/** A single rule for texture filtering */
export interface TextureFilterRule {
  field: TextureFields;
  operator: ListFilterOperator;
  value: string | string[];
}

/**
 * Exact shape approximating kodi.json's List.Filter.Textures:
 * - a combinator: { and: TextureFilter[] } or { or: TextureFilter[] }
 * - or a rule: TextureFilterRule
 */
export type TextureFilter =
  | { and: TextureFilter[] }
  | { or: TextureFilter[] }
  | TextureFilterRule;

// Helper constructors for building filters
/** Create a TextureFilterRule */
export function makeTextureRule(
  field: TextureFields,
  operator: ListFilterOperator,
  value: string | string[]
): TextureFilterRule {
  return { field, operator, value };
}

/** Create an 'and' combinator */
export function andTextureFilters(...filters: TextureFilter[]): TextureFilter {
  return { and: filters };
}

/** Create an 'or' combinator */
export function orTextureFilters(...filters: TextureFilter[]): TextureFilter {
  return { or: filters };
}

/**
 * TexturesDetailsSize corresponds to Textures.Details.Size in kodi.json
 */
export interface TexturesDetailsSize {
  height?: number;
  lastused?: string;
  size?: number; // 1 == largest per schema
  usecount?: number;
  width?: number;
}

// Helpers for readonly-tuple ergonomics (same pattern used elsewhere)
/**
 * Typed const list of available texture properties.
 * Use as a quick reference or pass elements into `makeTexturesProps`.
 */
export const texturesProps = ["url", "cachedurl", "lasthashcheck", "imagehash", "sizes"] as const;

/**
 * Create a typed readonly tuple of TextureFields.
 * Example: makeTexturesProps("url", "sizes") -> readonly ["url","sizes"]
 *
 * @example
 * ```ts
 * import { makeTexturesProps, makeTextureRule, andTextureFilters } from "../types/textures";
 *
 * // Build property tuple — caller gets narrow inference without `as const`
 * const props = makeTexturesProps("url", "sizes");
 *
 * // Build a simple rule and combinator
 * const rule = makeTextureRule("url", "contains", "example.com");
 * const filter = andTextureFilters(rule, makeTextureRule("imagehash", "is", "abc123"));
 *
 * // Typical usage with the namespace wrapper (pseudo-code):
 * // const resp = await kodi.Textures.GetTextures({ properties: props, filter });
 * // resp.textures[0].url  // typed as string | undefined when 'url' included in props
 * ```
 */
export function makeTexturesProps<const P extends readonly TextureFields[]>(...p: P) {
  return p;
}

/**
 * Alias for makeTexturesProps - useful when transforming an existing array into
 * a readonly tuple for compile-time inference.
 */
export const asTexturesProps = makeTexturesProps;
