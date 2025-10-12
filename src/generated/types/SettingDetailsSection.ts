import { SettingDetailsBase } from './SettingDetailsBase';
import { SettingDetailsCategory } from './SettingDetailsCategory';

export interface SettingDetailsSection extends SettingDetailsBase {
  categories?: SettingDetailsCategory[];
}