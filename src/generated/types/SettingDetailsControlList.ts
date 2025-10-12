import { SettingDetailsControlHeading } from './SettingDetailsControlHeading';

export interface SettingDetailsControlList extends SettingDetailsControlHeading {
  multiselect: boolean;
  type: "list";
}