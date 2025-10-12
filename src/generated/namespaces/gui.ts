import { ISendMessage } from '../../';

type __GUIPropertyValueKeys = keyof GUIPropertyValue;

import { GUIWindow } from '../types/GUIWindow';
import { GUIActivateWindowParams } from '../types/GUIActivateWindowParams';
import { GUIPropertyValue } from '../types/GUIPropertyValue';
import { GUIGetPropertiesParams } from '../types/GUIGetPropertiesParams';
import { GUIStereoscopyMode } from '../types/GUIStereoscopyMode';
import { GUIGetStereoscopicModesResponse } from '../types/GUIGetStereoscopicModesResponse';
import { GlobalToggle } from '../types/GlobalToggle';
import { GUISetFullscreenParams } from '../types/GUISetFullscreenParams';
import { GUISetStereoscopicModeParams } from '../types/GUISetStereoscopicModeParams';
import { GUIShowNotificationParams } from '../types/GUIShowNotificationParams';


export class KodiGUINamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Activates currently used screensaver
   */
  async ActivateScreenSaver(): Promise<string> {
    return this.sendMessage("GUI.ActivateScreenSaver", {});
  }

  /**
   * Activates the given window
   */
  async ActivateWindow(params: GUIActivateWindowParams): Promise<string> {
    return this.sendMessage("GUI.ActivateWindow", params);
  }

  async GetProperties<P extends readonly __GUIPropertyValueKeys[]>(params: { properties: P}): Promise<{ item: Pick<GUIPropertyValue, Extract<P[number], __GUIPropertyValueKeys>> }>;
  /**
   * Retrieves the values of the given properties
   */
  async GetProperties(params: GUIGetPropertiesParams): Promise<GUIPropertyValue>;
  async GetProperties(params: GUIGetPropertiesParams) {
    return this.sendMessage("GUI.GetProperties", params);
  }

  /**
   * Returns the supported stereoscopic modes of the GUI
   */
  async GetStereoscopicModes(): Promise<GUIGetStereoscopicModesResponse> {
    return this.sendMessage("GUI.GetStereoscopicModes", {});
  }

  /**
   * Toggle fullscreen/GUI
   */
  async SetFullscreen(params: GUISetFullscreenParams): Promise<boolean> {
    return this.sendMessage("GUI.SetFullscreen", params);
  }

  /**
   * Sets the stereoscopic mode of the GUI to the given mode
   */
  async SetStereoscopicMode(params: GUISetStereoscopicModeParams): Promise<string> {
    return this.sendMessage("GUI.SetStereoscopicMode", params);
  }

  /**
   * Shows a GUI notification
   */
  async ShowNotification(params: GUIShowNotificationParams): Promise<string> {
    return this.sendMessage("GUI.ShowNotification", params);
  }

}