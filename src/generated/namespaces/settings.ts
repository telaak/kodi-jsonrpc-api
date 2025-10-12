import { ISendMessage } from '../../';
import { SettingLevel } from '../types/SettingLevel';
import { SettingDetailsCategory } from '../types/SettingDetailsCategory';
import { SettingsGetCategoriesParams } from '../types/SettingsGetCategoriesParams';
import { SettingsGetCategoriesResponse } from '../types/SettingsGetCategoriesResponse';
import { SettingDetailsSection } from '../types/SettingDetailsSection';
import { SettingsGetSectionsParams } from '../types/SettingsGetSectionsParams';
import { SettingsGetSectionsResponse } from '../types/SettingsGetSectionsResponse';
import { SettingValueExtended } from '../types/SettingValueExtended';
import { SettingsGetSettingValueParams } from '../types/SettingsGetSettingValueParams';
import { SettingsGetSettingValueResponse } from '../types/SettingsGetSettingValueResponse';
import { SettingDetailsSetting } from '../types/SettingDetailsSetting';
import { SettingsGetSettingsParams } from '../types/SettingsGetSettingsParams';
import { SettingsGetSettingsResponse } from '../types/SettingsGetSettingsResponse';
import { SettingsGetSkinSettingValueParams } from '../types/SettingsGetSkinSettingValueParams';
import { SettingsGetSkinSettingValueResponse } from '../types/SettingsGetSkinSettingValueResponse';
import { SettingsGetSkinSettingsResponse } from '../types/SettingsGetSkinSettingsResponse';
import { SettingsResetSettingValueParams } from '../types/SettingsResetSettingValueParams';
import { SettingsSetSettingValueParams } from '../types/SettingsSetSettingValueParams';
import { SettingsSetSkinSettingValueParams } from '../types/SettingsSetSkinSettingValueParams';


export class KodiSettingsNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves all setting categories
   */
  async GetCategories(params: SettingsGetCategoriesParams): Promise<SettingsGetCategoriesResponse> {
    return this.sendMessage<SettingsGetCategoriesResponse>("Settings.GetCategories", params);
  }

  /**
   * Retrieves all setting sections
   */
  async GetSections(params: SettingsGetSectionsParams): Promise<SettingsGetSectionsResponse> {
    return this.sendMessage<SettingsGetSectionsResponse>("Settings.GetSections", params);
  }

  /**
   * Retrieves the value of a setting
   */
  async GetSettingValue(params: SettingsGetSettingValueParams): Promise<SettingsGetSettingValueResponse> {
    return this.sendMessage<SettingsGetSettingValueResponse>("Settings.GetSettingValue", params);
  }

  /**
   * Retrieves all settings
   */
  async GetSettings(params: SettingsGetSettingsParams): Promise<SettingsGetSettingsResponse> {
    return this.sendMessage<SettingsGetSettingsResponse>("Settings.GetSettings", params);
  }

  /**
   * Retrieves the value of the specified skin setting
   */
  async GetSkinSettingValue(params: SettingsGetSkinSettingValueParams): Promise<SettingsGetSkinSettingValueResponse> {
    return this.sendMessage<SettingsGetSkinSettingValueResponse>("Settings.GetSkinSettingValue", params);
  }

  /**
   * Retrieves all skin settings of the currently used skin
   */
  async GetSkinSettings(): Promise<SettingsGetSkinSettingsResponse> {
    return this.sendMessage<SettingsGetSkinSettingsResponse>("Settings.GetSkinSettings", {});
  }

  /**
   * Resets the value of a setting
   */
  async ResetSettingValue(params: SettingsResetSettingValueParams): Promise<string> {
    return this.sendMessage<string>("Settings.ResetSettingValue", params);
  }

  /**
   * Changes the value of a setting
   */
  async SetSettingValue(params: SettingsSetSettingValueParams): Promise<boolean> {
    return this.sendMessage<boolean>("Settings.SetSettingValue", params);
  }

  /**
   * Changes the value of the specified skin setting
   */
  async SetSkinSettingValue(params: SettingsSetSkinSettingValueParams): Promise<boolean> {
    return this.sendMessage<boolean>("Settings.SetSkinSettingValue", params);
  }

}