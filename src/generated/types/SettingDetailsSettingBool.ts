import { SettingDetailsSettingBase } from './SettingDetailsSettingBase';

export interface SettingDetailsSettingBool extends SettingDetailsSettingBase {
  default: boolean;
  value: boolean;
}