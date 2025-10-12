import { SettingDetailsSettingBase } from './SettingDetailsSettingBase';
import { SettingDetailsSettingIntOptionsItem } from './SettingDetailsSettingIntOptionsItem';

export interface SettingDetailsSettingInt extends SettingDetailsSettingBase {
  default: number;
  maximum?: number;
  minimum?: number;
  options?: SettingDetailsSettingIntOptionsItem[];
  step?: number;
  value: number;
}