import { SettingDetailsControlHeading } from './SettingDetailsControlHeading';

export interface SettingDetailsControlSlider extends SettingDetailsControlHeading {
  formatlabel: string;
  popup: boolean;
  type: "slider";
}