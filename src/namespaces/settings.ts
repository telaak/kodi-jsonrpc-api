import { ISendMessage } from "..";

export class KodiSettingsNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // Settings Namespace Methods
  // =====================

  /**
   * Retrieves all available settings categories.
   *
   * @returns A promise that resolves to an object containing an array of settings categories.
   */
  async GetCategories(): Promise<GetCategoriesResponse> {
    const params: GetCategoriesParams = {};
    return this.sendMessage("Settings.GetCategories", params);
  }

  /**
   * Retrieves all sections within a specified settings category.
   *
   * @param category - The category to retrieve sections for.
   * @returns A promise that resolves to an object containing an array of settings sections.
   */
  async GetSections(category: SettingsCategory): Promise<GetSectionsResponse> {
    const params: GetSectionsParams = { category };
    return this.sendMessage("Settings.GetSections", params);
  }

  /**
   * Retrieves the value of a specific setting.
   *
   * @param settingId - The unique identifier of the setting.
   * @returns A promise that resolves to an object containing the value of the setting.
   */
  async GetSettingValue(settingId: string): Promise<GetSettingValueResponse> {
    const params: GetSettingValueParams = { settingId };
    return this.sendMessage("Settings.GetSettingValue", params);
  }

  /**
   * Retrieves all settings within a specified category and optional section.
   *
   * @param category - The category to retrieve settings from.
   * @param section - Optional section to filter settings.
   * @returns A promise that resolves to an object containing an array of settings.
   */
  async GetSettings(
    category: SettingsCategory,
    section?: SettingsSection
  ): Promise<GetSettingsResponse> {
    const params: GetSettingsParams = { category, section };
    return this.sendMessage("Settings.GetSettings", params);
  }

  /**
   * Retrieves the value of a specific skin setting.
   *
   * @param settingId - The unique identifier of the skin setting.
   * @returns A promise that resolves to an object containing the value of the skin setting.
   */
  async GetSkinSettingValue(
    settingId: string
  ): Promise<GetSkinSettingValueResponse> {
    const params: GetSkinSettingValueParams = { settingId };
    return this.sendMessage("Settings.GetSkinSettingValue", params);
  }

  /**
   * Retrieves all skin settings for a specified skin.
   *
   * @param skinId - The unique identifier of the skin.
   * @returns A promise that resolves to an object containing an array of skin settings.
   */
  async GetSkinSettings(skinId: string): Promise<GetSkinSettingsResponse> {
    const params: GetSkinSettingsParams = { skinId };
    return this.sendMessage("Settings.GetSkinSettings", params);
  }

  /**
   * Resets the value of a specific setting to its default.
   *
   * @param settingId - The unique identifier of the setting to reset.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async ResetSettingValue(
    settingId: string
  ): Promise<ResetSettingValueResponse> {
    const params: ResetSettingValueParams = { settingId };
    return this.sendMessage("Settings.ResetSettingValue", params);
  }

  /**
   * Sets the value of a specific setting.
   *
   * @param settingId - The unique identifier of the setting to set.
   * @param value - The new value to assign to the setting.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async SetSettingValue(
    settingId: string,
    value: boolean | number | string | any[]
  ): Promise<SetSettingValueResponse> {
    const params: SetSettingValueParams = { settingId, value };
    return this.sendMessage("Settings.SetSettingValue", params);
  }

  /**
   * Sets the value of a specific skin setting.
   *
   * @param settingId - The unique identifier of the skin setting to set.
   * @param value - The new value to assign to the skin setting.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async SetSkinSettingValue(
    settingId: string,
    value: boolean | number | string | any[]
  ): Promise<SetSkinSettingValueResponse> {
    const params: SetSkinSettingValueParams = { settingId, value };
    return this.sendMessage("Settings.SetSkinSettingValue", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available settings categories.
 */
type SettingsCategory =
  | "general"
  | "system"
  | "interface"
  | "skins"
  | "services"
  | "network";

/**
 * Represents the available sections within a settings category.
 */
type SettingsSection =
  | "display"
  | "audio"
  | "video"
  | "language"
  | "privacy"
  | "updates";

/**
 * Represents the type of a setting value.
 */
type SettingType = "boolean" | "integer" | "string" | "array" | "object";

/**
 * Represents a setting object.
 */
interface Setting {
  id: string;
  label: string;
  type: SettingType;
  value: boolean | number | string | any[];
  options?: any; // Depending on setting type, could include enum values, ranges, etc.
}

/**
 * Represents the parameters for GetCategories.
 */
interface GetCategoriesParams {
  // No parameters required for this method.
}

/**
 * Represents the response structure for GetCategories.
 */
interface GetCategoriesResponse {
  categories: SettingsCategory[];
}

/**
 * Represents the parameters for GetSections.
 */
interface GetSectionsParams {
  category: SettingsCategory;
}

/**
 * Represents the response structure for GetSections.
 */
interface GetSectionsResponse {
  sections: SettingsSection[];
}

/**
 * Represents the parameters for GetSettingValue.
 */
interface GetSettingValueParams {
  settingId: string;
}

/**
 * Represents the response structure for GetSettingValue.
 */
interface GetSettingValueResponse {
  value: boolean | number | string | any[];
}

/**
 * Represents the parameters for GetSettings.
 */
interface GetSettingsParams {
  category: SettingsCategory;
  section?: SettingsSection;
}

/**
 * Represents the response structure for GetSettings.
 */
interface GetSettingsResponse {
  settings: Setting[];
}

/**
 * Represents the parameters for GetSkinSettingValue.
 */
interface GetSkinSettingValueParams {
  settingId: string;
}

/**
 * Represents the response structure for GetSkinSettingValue.
 */
interface GetSkinSettingValueResponse {
  value: boolean | number | string | any[];
}

/**
 * Represents the parameters for GetSkinSettings.
 */
interface GetSkinSettingsParams {
  skinId: string;
}

/**
 * Represents the response structure for GetSkinSettings.
 */
interface GetSkinSettingsResponse {
  settings: Setting[];
}

/**
 * Represents the parameters for ResetSettingValue.
 */
interface ResetSettingValueParams {
  settingId: string;
}

/**
 * Represents the response structure for ResetSettingValue.
 */
interface ResetSettingValueResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for SetSettingValue.
 */
interface SetSettingValueParams {
  settingId: string;
  value: boolean | number | string | any[];
}

/**
 * Represents the response structure for SetSettingValue.
 */
interface SetSettingValueResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for SetSkinSettingValue.
 */
interface SetSkinSettingValueParams {
  settingId: string;
  value: boolean | number | string | any[];
}

/**
 * Represents the response structure for SetSkinSettingValue.
 */
interface SetSkinSettingValueResponse {
  success: boolean;
  message: string;
}
