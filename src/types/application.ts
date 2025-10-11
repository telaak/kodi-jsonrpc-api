// Types and Interfaces Block
// These types and interfaces are specific to the Application methods and do not exist in koditestExports.ts

/**
 * GlobalToggle ($ref: "Global.Toggle")
 * Represents a toggle option, typically a boolean.
 */
export type GlobalToggle = boolean | "toggle";

/**
 * GlobalIncrementDecrement ($ref: "Global.IncrementDecrement")
 * Represents the increment or decrement actions for volume control.
 */
export type GlobalIncrementDecrement = "increment" | "decrement";

/**
 * ApplicationPropertyName ($ref: "Application.Property.Name")
 * Represents the names of properties that can be retrieved from the Application namespace.
 */
export type ApplicationPropertyName =
  | "volume"
  | "muted"
  | "name"
  | "version"
  | "sorttokens"
  | "language";

/**
 * ApplicationPropertyValue ($ref: "Application.Property.Value")
 * Represents the values of properties retrieved from the Application namespace.
 */
export interface ApplicationPropertyValue {
  // Current language code and region e.g. en_GB
  language?: string;
  // Mute state
  muted?: boolean;
  // Application name
  name?: string;
  // Array of sort tokens
  sorttokens?: string[];
  // Version object
  version?: {
    major: number;
    minor: number;
    revision?: string | number | null;
    tag: string;
    tagversion?: string;
  };
  // Current volume (0-100)
  volume?: number;
}

/**
 * SetMuteParams ($ref: "Application.SetMute.Params")
 * Parameters for the SetMute method.
 */
export interface SetMuteParams {
  mute: GlobalToggle; // Mute state to set
}
