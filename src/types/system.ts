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
