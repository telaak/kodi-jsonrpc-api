import { GUIPropertyValueCurrentcontrol } from './GUIPropertyValueCurrentcontrol';
import { GUIPropertyValueCurrentwindow } from './GUIPropertyValueCurrentwindow';
import { GUIPropertyValueSkin } from './GUIPropertyValueSkin';
import { GUIStereoscopyMode } from './GUIStereoscopyMode';

export interface GUIPropertyValue {
  currentcontrol?: GUIPropertyValueCurrentcontrol;
  currentwindow?: GUIPropertyValueCurrentwindow;
  fullscreen?: boolean;
  skin?: GUIPropertyValueSkin;
  stereoscopicmode?: GUIStereoscopyMode;
}