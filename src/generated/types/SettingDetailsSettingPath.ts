import { SettingDetailsSettingString } from './SettingDetailsSettingString';

export interface SettingDetailsSettingPath extends SettingDetailsSettingString {
  sources?: string[];
  writable: boolean;
}