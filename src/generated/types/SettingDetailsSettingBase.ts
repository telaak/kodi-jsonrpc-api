import { SettingDetailsBase } from './SettingDetailsBase';
import { SettingDetailsControl } from './SettingDetailsControl';
import { SettingLevel } from './SettingLevel';
import { SettingType } from './SettingType';

export interface SettingDetailsSettingBase extends SettingDetailsBase {
  control?: SettingDetailsControl;
  enabled: boolean;
  level: SettingLevel;
  parent?: string;
  type: SettingType;
}