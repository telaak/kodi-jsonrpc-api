import { SettingLevel } from './SettingLevel';

export interface SettingsGetCategoriesParams {
  level?: SettingLevel;
  section?: string;
  properties?: Array<"settings">;
}