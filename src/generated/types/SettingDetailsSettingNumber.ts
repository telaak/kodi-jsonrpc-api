import { SettingDetailsSettingBase } from './SettingDetailsSettingBase';

export interface SettingDetailsSettingNumber extends SettingDetailsSettingBase {
  default: number;
  maximum: number;
  minimum: number;
  step: number;
  value: number;
}