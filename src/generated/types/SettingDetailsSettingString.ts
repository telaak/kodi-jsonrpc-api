import { SettingDetailsSettingBase } from './SettingDetailsSettingBase';
import { SettingDetailsSettingStringOptionsItem } from './SettingDetailsSettingStringOptionsItem';

export interface SettingDetailsSettingString extends SettingDetailsSettingBase {
  allowempty: boolean;
  default: string;
  options?: SettingDetailsSettingStringOptionsItem[];
  value: string;
}