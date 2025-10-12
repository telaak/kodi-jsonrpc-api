import { SettingDetailsControlHeading } from './SettingDetailsControlHeading';

export interface SettingDetailsControlEdit extends SettingDetailsControlHeading {
  hidden: boolean;
  type: "edit";
  verifynewvalue: boolean;
}