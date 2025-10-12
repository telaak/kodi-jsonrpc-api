import { SettingDetailsSettingBool } from './SettingDetailsSettingBool';
import { SettingDetailsSettingInt } from './SettingDetailsSettingInt';
import { SettingDetailsSettingNumber } from './SettingDetailsSettingNumber';
import { SettingDetailsSettingString } from './SettingDetailsSettingString';
import { SettingDetailsSettingAction } from './SettingDetailsSettingAction';
import { SettingDetailsSettingList } from './SettingDetailsSettingList';
import { SettingDetailsSettingPath } from './SettingDetailsSettingPath';
import { SettingDetailsSettingAddon } from './SettingDetailsSettingAddon';
import { SettingDetailsSettingDate } from './SettingDetailsSettingDate';
import { SettingDetailsSettingTime } from './SettingDetailsSettingTime';

export type SettingDetailsSetting = SettingDetailsSettingBool | SettingDetailsSettingInt | SettingDetailsSettingNumber | SettingDetailsSettingString | SettingDetailsSettingAction | SettingDetailsSettingList | SettingDetailsSettingPath | SettingDetailsSettingAddon | SettingDetailsSettingDate | SettingDetailsSettingTime;