// Functions Block
// These functions correspond to the GUI methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "GUI" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiGUINamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  StereoscopicMode,
  Window,
  PropertyName,
  PropertyValue,
  NotificationType,
  ViewMode,
} from "../types/gui"; // Adjust the import path as necessary

export class KodiGUINamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Activates the given window.
   *
   * @param window - The window to activate.
  * @param parameters - Parameters to pass to the window.
   * @returns A promise resolving to a string, typically empty on success.
  *
  * @see {@link ../types/gui.makeActivateWindowParams | makeActivateWindowParams}
   */
  async ActivateWindow(window: Window, parameters?: string[]): Promise<string> {
    const params: any = { window };
    if (parameters !== undefined) params.parameters = parameters;
    return this.sendMessage("GUI.ActivateWindow", params);
  }

  /**
   * Activates the currently used screensaver.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ActivateScreenSaver(): Promise<string> {
    return this.sendMessage("GUI.ActivateScreenSaver", {});
  }

  /**
   * Retrieves the values of the given properties.
   *
   * @param properties - List of properties to retrieve.
   * @returns A promise resolving to the property values.
   */
  // Overloads to support readonly-tuple inference for properties
  /**
   * @see {@link ../types/gui.makeGuiProps | makeGuiProps}
   */
  async GetProperties<P extends readonly PropertyName[]>(properties: P): Promise<PropertyValue>;
  async GetProperties(properties: PropertyName[] | readonly PropertyName[]): Promise<PropertyValue> {
    const params: any = { properties: properties as string[] };
    const response = await this.sendMessage("GUI.GetProperties", params);
    return response as PropertyValue;
  }

  /**
   * Gets the supported stereoscopic modes.
   *
   * @returns A promise resolving to a list of stereoscopic modes.
   */
  async GetStereoscopicModes(): Promise<StereoscopicMode[]> {
    const response = await this.sendMessage("GUI.GetStereoscopicModes", {});
    return response.stereoscopicmodes as StereoscopicMode[];
  }

  /**
   * Shows a notification on the GUI.
   *
   * @param title - The title of the notification.
   * @param message - The message content of the notification.
   * @param image - The image type or URL for the notification.
   * @param displaytime - Time in milliseconds the notification will be visible.
   * @returns A promise resolving to a string, typically empty on success.
   */
  /**
   * @see {@link ../types/gui.makeShowNotificationParams | makeShowNotificationParams}
   */
  async ShowNotification(
    title: string,
    message: string,
    image: NotificationType | string = "info",
    displaytime: number = 5000
  ): Promise<string> {
    const params = { title, message, image, displaytime };
    return this.sendMessage("GUI.ShowNotification", params);
  }

  /**
   * Sets the fullscreen state of the GUI.
   *
   * @param fullscreen - The fullscreen state to set.
   * @returns A promise resolving to the new fullscreen state.
   */
  /**
   * @see {@link ../types/gui.makeSetFullscreenParams | makeSetFullscreenParams}
   */
  async SetFullscreen(fullscreen: boolean | "toggle"): Promise<boolean> {
    const params = { fullscreen };
    const response = await this.sendMessage("GUI.SetFullscreen", params);
    return response as boolean;
  }

  /**
   * Sets the stereoscopic mode of the GUI.
   *
   * @param mode - The stereoscopic mode to set.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetStereoscopicMode(mode: StereoscopicMode): Promise<string> {
    const params = { mode };
    return this.sendMessage("GUI.SetStereoscopicMode", params);
  }
}
