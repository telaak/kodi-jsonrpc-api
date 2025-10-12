import { SettingDetailsSettingString } from './SettingDetailsSettingString';
import { AddonTypes } from './AddonTypes';

export interface SettingDetailsSettingAddon extends SettingDetailsSettingString {
  addontype: AddonTypes;
}