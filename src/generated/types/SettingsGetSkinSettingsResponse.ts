import { SettingsGetSkinSettingsResponseSettingsItem } from './SettingsGetSkinSettingsResponseSettingsItem';

export interface SettingsGetSkinSettingsResponse {
  settings?: SettingsGetSkinSettingsResponseSettingsItem[];
  skin: string;
}