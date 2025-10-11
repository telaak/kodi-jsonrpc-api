// Types and Interfaces Block
// These types and interfaces are specific to the System methods and do not exist in koditestExports.ts

/**
 * SystemPropertyName ($ref: "System.Property.Name")
 * Enum for system property names.
 */
export type SystemPropertyName =
  | "canshutdown"
  | "cansuspend"
  | "canhibernate"
  | "canreboot";

/**
 * SystemPropertyValue ($ref: "System.Property.Value")
 * Interface for system property values.
 */
export type SystemPropertyValue = {
  [key in SystemPropertyName]?: boolean;
};

/** Typed const for System property names */
export const systemProps = [
  "canshutdown",
  "cansuspend",
  "canhibernate",
  "canreboot",
] as const;

/**
 * Create a readonly tuple of SystemPropertyName values.
 * Example: makeSystemProps("canshutdown", "canreboot") -> readonly ["canshutdown","canreboot"]
 */
export function makeSystemProps<P extends readonly SystemPropertyName[]>(
  ...p: P
): P {
  return p;
}

/** Alias for makeSystemProps */
export const asSystemProps = makeSystemProps;

/**
 * @example
 * ```ts
 * import { makeSystemProps } from "../types/system";
 * const props = makeSystemProps("canshutdown", "canreboot");
 * // const resp = await kodi.System.GetProperties({ properties: props });
 * ```
 */
