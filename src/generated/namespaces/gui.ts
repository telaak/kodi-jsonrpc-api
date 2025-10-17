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
   * @returns string
   */
  async ActivateScreenSaver(): Promise<string> {
    return this.sendMessage<string>("GUI.ActivateScreenSaver", {});
  }

  /**
   * Activates the given window
   * @param window GUIWindow
   * @param parameters string[] (optional)
   * @returns string
   */
  async ActivateWindow(params: GUIActivateWindowParams): Promise<string> {
    return this.sendMessage<string>("GUI.ActivateWindow", params);
  }

  async GetProperties<P extends readonly __GUIPropertyValueKeys[]>(params: { properties: P}): Promise<Pick<GUIPropertyValue, Extract<P[number], __GUIPropertyValueKeys>>>;
  /**
   * Retrieves the values of the given properties
   * @param properties GUIPropertyName[]
   * @returns GUIPropertyValue
   */
  async GetProperties(params: GUIGetPropertiesParams): Promise<GUIPropertyValue>;
  async GetProperties(params: any) {
    const res = await this.sendMessage<any>("GUI.GetProperties", params);
    if (res && typeof res === "object" && Object.prototype.hasOwnProperty.call(res, "item")) {
      return (res as any).item as GUIPropertyValue;
    }
    return res as GUIPropertyValue;
  }

  /**
   * Returns the supported stereoscopic modes of the GUI
   * @returns GUIGetStereoscopicModesResponse
   */
  async GetStereoscopicModes(): Promise<GUIGetStereoscopicModesResponse> {
    return this.sendMessage<GUIGetStereoscopicModesResponse>("GUI.GetStereoscopicModes", {});
  }

  /**
   * Toggle fullscreen/GUI
   * @param fullscreen GlobalToggle
   * @returns boolean
   */
  async SetFullscreen(params: GUISetFullscreenParams): Promise<boolean> {
    return this.sendMessage<boolean>("GUI.SetFullscreen", params);
  }

  /**
   * Sets the stereoscopic mode of the GUI to the given mode
   * @param mode "toggle" | "tomono" | "next" | "previous" | "select" | "off" | "split_vertical" | "split_horizontal" | "row_interleaved" | "hardware_based" | "anaglyph_cyan_red" | "anaglyph_green_magenta" | "monoscopic"
   * @returns string
   */
  async SetStereoscopicMode(params: GUISetStereoscopicModeParams): Promise<string> {
    return this.sendMessage<string>("GUI.SetStereoscopicMode", params);
  }

  /**
   * Shows a GUI notification
   * @param title string
   * @param message string
   * @param image "info" | "warning" | "error" | string (optional)
   * @param displaytime number (optional)
   * @returns string
   */
  async ShowNotification(params: GUIShowNotificationParams): Promise<string> {
    return this.sendMessage<string>("GUI.ShowNotification", params);
  }

}