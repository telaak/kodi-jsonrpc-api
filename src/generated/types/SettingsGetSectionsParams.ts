import { SettingLevel } from './SettingLevel';

export interface SettingsGetSectionsParams {
  level?: SettingLevel;
  properties?: Array<"categories">;
}