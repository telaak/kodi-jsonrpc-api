import { SettingDetailsBase } from './SettingDetailsBase';
import { SettingDetailsGroup } from './SettingDetailsGroup';

export interface SettingDetailsCategory extends SettingDetailsBase {
  groups?: SettingDetailsGroup[];
}