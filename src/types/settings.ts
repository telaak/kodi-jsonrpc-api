// Types and Interfaces Block
// These types and interfaces are specific to the Settings methods and do not exist in koditestExports.ts

/**
 * SettingLevel ($ref: "Setting.Level")
 * Enum for setting levels.
 */
export type SettingLevel = "standard" | "advanced" | "expert";

/**
 * SettingCategory ($ref: "Setting.Details.Category")
 * Represents a setting category.
 */
export interface SettingCategory {
  id: string; // Unique identifier for the category
  name: string; // Name of the category
  // Additional properties can be added here as defined in kodi.json
}

/**
 * SettingSection ($ref: "Setting.Details.Section")
 * Represents a setting section.
 */
export interface SettingSection {
  id: string; // Unique identifier for the section
  name: string; // Name of the section
  // Additional properties can be added here as defined in kodi.json
}

/**
 * SettingName ($ref: "Setting.Property.Name")
 * Enum for setting property names.
 */
export type SettingName = string; // Replace with specific strings if available

/**
 * SettingValue ($ref: "Setting.Value.Extended")
 * Represents the value of a setting.
 */
export type SettingValue = boolean | string | number; // Extend as necessary based on kodi.json

/**
 * SkinSettingValue ($ref: "Skin.Setting.Value")
 * Represents the value of a skin setting.
 */
export type SkinSettingValue = boolean | string | number; // Extend as necessary based on kodi.json

/**
 * SettingsGetCategoriesParams ($ref: "Settings.GetCategories.Params")
 * Parameters for the GetCategories method.
 */
export interface SettingsGetCategoriesParams {
  level?: SettingLevel; // Optional filter by setting level
  section?: string; // Optional filter by section
  properties?: string[]; // Optional list of properties to retrieve
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
  properties?: string[]; // Optional list of properties to retrieve
}

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
export interface Setting {
  id: string; // Unique identifier for the setting
  name: string; // Name of the setting
  type: string; // Type of the setting (e.g., 'boolean', 'string')
  value: SettingValue; // Current value of the setting
  // Additional properties can be added here as defined in kodi.json
}

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
    id: string; // Unique identifier for the skin setting
    type: "boolean" | "string"; // Type of the skin setting
    value: boolean | string; // Current value of the skin setting
  }[];
  skin: string; // Name of the currently used skin
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
