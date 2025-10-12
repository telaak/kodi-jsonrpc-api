import { SettingDetailsSettingBase } from './SettingDetailsSettingBase';
import { SettingValueList } from './SettingValueList';
import { SettingDetailsSetting } from './SettingDetailsSetting';
import { SettingType } from './SettingType';

export interface SettingDetailsSettingList extends SettingDetailsSettingBase {
  default: SettingValueList;
  definition: SettingDetailsSetting;
  delimiter: string;
  elementtype: SettingType;
  maximumitems?: number;
  minimumitems?: number;
  value: SettingValueList;
}