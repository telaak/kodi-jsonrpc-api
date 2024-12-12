// Functions Block
// These functions correspond to the Settings methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Settings" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiSettingsNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  SettingLevel,
  SettingCategory,
  SettingSection,
  SettingValue,
  SkinSettingValue,
  SettingsGetCategoriesParams,
  SettingsGetCategoriesResponse,
  SettingsGetSectionsParams,
  SettingsGetSectionsResponse,
  SettingsGetSettingValueParams,
  SettingsGetSettingValueResponse,
  SettingsGetSettingsParams,
  SettingsGetSettingsResponse,
  Setting,
  SettingsGetSkinSettingValueParams,
  SettingsGetSkinSettingValueResponse,
  SettingsGetSkinSettingsResponse,
  SettingsResetSettingValueParams,
  SettingsResetSettingValueResponse,
  SettingsSetSettingValueParams,
  SettingsSetSettingValueResponse,
  SettingsSetSkinSettingValueParams,
  SettingsSetSkinSettingValueResponse,
} from "../types/settings"; // Adjust the import path as necessary

export class KodiSettingsNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Changes the value of a setting.
   *
   * @param setting - The name of the setting to change.
   * @param value - The new value for the setting.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetSettingValue(
    setting: string,
    value: SettingValue
  ): Promise<SettingsSetSettingValueResponse> {
    const params: SettingsSetSettingValueParams = { setting, value };
    return this.sendMessage("Settings.SetSettingValue", params);
  }

  /**
   * Changes the value of the specified skin setting.
   *
   * @param setting - The name of the skin setting to change.
   * @param value - The new value for the skin setting.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetSkinSettingValue(
    setting: string,
    value: SkinSettingValue
  ): Promise<SettingsSetSkinSettingValueResponse> {
    const params: SettingsSetSkinSettingValueParams = { setting, value };
    return this.sendMessage("Settings.SetSkinSettingValue", params);
  }

  /**
   * Retrieves all setting categories.
   *
   * @param level - Optional filter by setting level (e.g., 'standard', 'advanced').
   * @param section - Optional filter by section.
   * @param properties - Optional list of properties to retrieve.
   * @returns A promise resolving to a list of setting categories.
   */
  async GetCategories(
    level?: SettingLevel,
    section?: string,
    properties?: string[]
  ): Promise<SettingsGetCategoriesResponse> {
    const params: SettingsGetCategoriesParams = { level, section, properties };
    return this.sendMessage("Settings.GetCategories", params);
  }

  /**
   * Retrieves all setting sections.
   *
   * @param level - Optional filter by setting level (e.g., 'standard', 'advanced').
   * @param properties - Optional list of properties to retrieve.
   * @returns A promise resolving to a list of setting sections.
   */
  async GetSections(
    level?: SettingLevel,
    properties?: string[]
  ): Promise<SettingsGetSectionsResponse> {
    const params: SettingsGetSectionsParams = { level, properties };
    return this.sendMessage("Settings.GetSections", params);
  }

  /**
   * Retrieves the value of a specific setting.
   *
   * @param setting - The name of the setting to retrieve.
   * @returns A promise resolving to the value of the requested setting.
   */
  async GetSettingValue(
    setting: string
  ): Promise<SettingsGetSettingValueResponse> {
    const params: SettingsGetSettingValueParams = { setting };
    return this.sendMessage("Settings.GetSettingValue", params);
  }

  /**
   * Retrieves all settings with optional filtering.
   *
   * @param level - Optional filter by setting level (e.g., 'standard', 'advanced').
   * @param filter - Optional filter criteria (e.g., category, section).
   * @returns A promise resolving to a list of settings.
   */
  async GetSettings(
    level?: SettingLevel,
    filter?: { category?: string; section?: string }
  ): Promise<SettingsGetSettingsResponse> {
    const params: SettingsGetSettingsParams = { level, filter };
    return this.sendMessage("Settings.GetSettings", params);
  }

  /**
   * Retrieves the value of a specific skin setting.
   *
   * @param setting - The name of the skin setting to retrieve.
   * @returns A promise resolving to the value of the requested skin setting.
   */
  async GetSkinSettingValue(
    setting: string
  ): Promise<SettingsGetSkinSettingValueResponse> {
    const params: SettingsGetSkinSettingValueParams = { setting };
    return this.sendMessage("Settings.GetSkinSettingValue", params);
  }

  /**
   * Retrieves all skin settings of the currently used skin.
   *
   * @returns A promise resolving to a list of skin settings and the current skin name.
   */
  async GetSkinSettings(): Promise<SettingsGetSkinSettingsResponse> {
    return this.sendMessage("Settings.GetSkinSettings", {});
  }

  /**
   * Resets the value of a specific setting to its default.
   *
   * @param setting - The name of the setting to reset.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ResetSettingValue(
    setting: string
  ): Promise<SettingsResetSettingValueResponse> {
    const params: SettingsResetSettingValueParams = { setting };
    return this.sendMessage("Settings.ResetSettingValue", params);
  }
}
