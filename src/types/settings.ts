// Types and Interfaces Block
// These types and interfaces are specific to the Settings methods and do not exist in koditestExports.ts

/**
 * SettingLevel ($ref: "Setting.Level")
 * Enum for setting levels.
 */
export type SettingLevel = "basic" | "standard" | "advanced" | "expert";

/**
 * SettingCategory ($ref: "Setting.Details.Category")
 * Represents a setting category.
 */
export interface SettingCategory {
  id: string;
  label: string;
  help?: string;
  groups?: SettingGroup[];
}

/**
 * SettingSection ($ref: "Setting.Details.Section")
 * Represents a setting section.
 */
export interface SettingSection {
  id: string;
  label: string;
  help?: string;
  categories?: SettingCategory[];
}

export interface SettingGroup {
  id: string;
  settings: Setting[];
}

/**
 * SettingName ($ref: "Setting.Property.Name")
 * Enum for setting property names.
 */
// Setting names are dynamic in many addons; keep as string but document the shape.
export type SettingName = string;

/**
 * SettingValue ($ref: "Setting.Value.Extended")
 * Represents the value of a setting.
 */
// Follow kodi.json Setting.Value.Extended (boolean | integer | number | string | Setting.Value.List)
export type SettingValue = boolean | number | string | SettingValueList | null;

export type SettingValueList = Array<boolean | number | string>;

/**
 * SkinSettingValue ($ref: "Skin.Setting.Value")
 * Represents the value of a skin setting.
 */
export type SkinSettingValue = boolean | number | string | null;

/**
 * SettingsGetCategoriesParams ($ref: "Settings.GetCategories.Params")
 * Parameters for the GetCategories method.
 */
export interface SettingsGetCategoriesParams {
  level?: SettingLevel; // Optional filter by setting level
  section?: string; // Optional filter by section
  properties?: SettingsGetCategoriesProperty[]; // Optional list of properties to retrieve
}

/**
 * SettingsGetCategoriesResponse ($ref: "Settings.GetCategories.Response")
 * Response structure for the GetCategories method.
 */
export interface SettingsGetCategoriesResponse {
  categories: SettingCategory[]; // List of retrieved setting categories
}

/**
 * SettingsGetSectionsParams ($ref: "Settings.GetSections.Params")
 * Parameters for the GetSections method.
 */
export interface SettingsGetSectionsParams {
  level?: SettingLevel; // Optional filter by setting level
  properties?: SettingsGetSectionsProperty[]; // Optional list of properties to retrieve
}

export type SettingsGetCategoriesProperty = "settings";
export const settingsGetCategoriesProps = ["settings"] as const;
/** Typed const list for Settings.GetCategories() properties */
export function makeSettingsGetCategoriesProps<P extends readonly SettingsGetCategoriesProperty[]>(...p: P): P {
  return p;
}
export const asSettingsGetCategoriesProps = makeSettingsGetCategoriesProps;
/**
 * @example
 * ```ts
 * import { makeSettingsGetCategoriesProps } from "../types/settings";
 * const props = makeSettingsGetCategoriesProps("settings");
 * // const resp = await kodi.Settings.GetCategories({ properties: props });
 * ```
 */

export type SettingsGetSectionsProperty = "categories";
export const settingsGetSectionsProps = ["categories"] as const;
/** Typed const list for Settings.GetSections() properties */
export function makeSettingsGetSectionsProps<P extends readonly SettingsGetSectionsProperty[]>(...p: P): P {
  return p;
}
export const asSettingsGetSectionsProps = makeSettingsGetSectionsProps;
/**
 * @example
 * ```ts
 * import { makeSettingsGetSectionsProps } from "../types/settings";
 * const props = makeSettingsGetSectionsProps("categories");
 * ```
 */

/**
 * SettingsGetSectionsResponse ($ref: "Settings.GetSections.Response")
 * Response structure for the GetSections method.
 */
export interface SettingsGetSectionsResponse {
  sections: SettingSection[]; // List of retrieved setting sections
}

/**
 * SettingsGetSettingValueParams ($ref: "Settings.GetSettingValue.Params")
 * Parameters for the GetSettingValue method.
 */
export interface SettingsGetSettingValueParams {
  setting: string; // Name of the setting to retrieve
}

/**
 * SettingsGetSettingValueResponse ($ref: "Settings.GetSettingValue.Response")
 * Response structure for the GetSettingValue method.
 */
export interface SettingsGetSettingValueResponse {
  value: SettingValue; // Value of the requested setting
}

/**
 * SettingsGetSettingsParams ($ref: "Settings.GetSettings.Params")
 * Parameters for the GetSettings method.
 */
export interface SettingsGetSettingsParams {
  level?: SettingLevel; // Optional filter by setting level
  filter?: {
    category?: string; // Optional filter by category
    section?: string; // Optional filter by section
  };
}

/**
 * SettingsGetSettingsResponse ($ref: "Settings.GetSettings.Response")
 * Response structure for the GetSettings method.
 */
export interface SettingsGetSettingsResponse {
  settings: Setting[]; // List of retrieved settings
}

/**
 * Setting ($ref: "Setting.Details.Setting")
 * Represents a setting.
 */
// Minimal representation of Setting.Details.Setting and its common base
export interface SettingBase {
  id: string;
  label: string;
  help?: string;
  type: "boolean" | "integer" | "number" | "string" | "action" | "list" | "path" | "addon" | "date" | "time";
  enabled: boolean;
  level: SettingLevel;
  parent?: string;
  control?: SettingControl;
}

/** Controls as defined in Setting.Details.Control */
export type SettingControl =
  | ControlCheckmark
  | ControlSpinner
  | ControlEdit
  | ControlButton
  | ControlList
  | ControlSlider
  | ControlRange
  | ControlLabel
  | ControlBase;

export interface ControlBase {
  delayed: boolean;
  format: string;
  type: string;
}

export interface ControlCheckmark extends ControlBase {
  format: "boolean";
  type: "toggle";
}

export interface ControlSpinner extends ControlBase {
  format: string;
  minimumlabel?: string;
  formatlabel?: string;
  type: "spinner";
}

export interface ControlEdit extends ControlBase {
  hidden: boolean;
  verifynewvalue: boolean;
  type: "edit";
}

export interface ControlButton extends ControlBase {
  type: "button";
}

export interface ControlList extends ControlBase {
  multiselect: boolean;
  type: "list";
}

export interface ControlSlider extends ControlBase {
  formatlabel: string;
  popup: boolean;
  type: "slider";
}

export interface ControlRange extends ControlBase {
  formatlabel: string;
  formatvalue: string;
  type: "range";
}

export interface ControlLabel extends ControlBase {
  format: "string";
  type: "label";
}

export interface SettingBool extends SettingBase {
  type: "boolean";
  default: boolean;
  value: boolean;
}

export interface SettingInt extends SettingBase {
  type: "integer";
  default: number;
  minimum?: number;
  maximum?: number;
  step?: number;
  value: number;
}

export interface SettingNumber extends SettingBase {
  type: "number";
  default: number;
  minimum: number;
  maximum: number;
  step: number;
  value: number;
}

export interface SettingString extends SettingBase {
  type: "string" | "date" | "time" | "path" | "addon";
  default: string;
  allowempty: boolean;
  value: string;
}

export interface SettingList extends SettingBase {
  type: "list";
  default: SettingValueList;
  value: SettingValueList;
  definition: Setting; // nested definition (required)
  delimiter: string;
  elementtype: SettingBase["type"];
}

export type Setting = SettingBool | SettingInt | SettingNumber | SettingString | SettingList | SettingBase;

/**
 * SettingsGetSkinSettingValueParams ($ref: "Settings.GetSkinSettingValue.Params")
 * Parameters for the GetSkinSettingValue method.
 */
export interface SettingsGetSkinSettingValueParams {
  setting: string; // Name of the skin setting to retrieve
}

/**
 * SettingsGetSkinSettingValueResponse ($ref: "Settings.GetSkinSettingValue.Response")
 * Response structure for the GetSkinSettingValue method.
 */
export interface SettingsGetSkinSettingValueResponse {
  value: SkinSettingValue; // Value of the requested skin setting
}

/**
 * SettingsGetSkinSettingsResponse ($ref: "Settings.GetSkinSettings.Response")
 * Response structure for the GetSkinSettings method.
 */
export interface SettingsGetSkinSettingsResponse {
  settings: {
    id: string;
    type: "boolean" | "integer" | "number" | "string";
    value: boolean | number | string | null;
  }[];
  skin: string;
}

/**
 * SettingsResetSettingValueParams ($ref: "Settings.ResetSettingValue.Params")
 * Parameters for the ResetSettingValue method.
 */
export interface SettingsResetSettingValueParams {
  setting: string; // Name of the setting to reset
}

/**
 * SettingsResetSettingValueResponse ($ref: "Settings.ResetSettingValue.Response")
 * Response structure for the ResetSettingValue method.
 */
export type SettingsResetSettingValueResponse = string; // Typically empty on success

/**
 * SettingsSetSettingValueParams ($ref: "Settings.SetSettingValue.Params")
 * Parameters for the SetSettingValue method.
 */
export interface SettingsSetSettingValueParams {
  setting: string; // Name of the setting to change
  value: SettingValue; // New value for the setting
}

/**
 * SettingsSetSettingValueResponse ($ref: "Settings.SetSettingValue.Response")
 * Response structure for the SetSettingValue method.
 */
export type SettingsSetSettingValueResponse = boolean; // Success status

/**
 * SettingsSetSkinSettingValueParams ($ref: "Settings.SetSkinSettingValue.Params")
 * Parameters for the SetSkinSettingValue method.
 */
export interface SettingsSetSkinSettingValueParams {
  setting: string; // Name of the skin setting to change
  value: SkinSettingValue; // New value for the skin setting
}

/**
 * SettingsSetSkinSettingValueResponse ($ref: "Settings.SetSkinSettingValue.Response")
 * Response structure for the SetSkinSettingValue method.
 */
export type SettingsSetSkinSettingValueResponse = boolean; // Success status
