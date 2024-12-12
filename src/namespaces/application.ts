// Functions Block
// These functions correspond to the Application methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Application" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are standalone and require an implementation of `ISendMessage` to communicate with Kodi's JSON-RPC API.

import { ISendMessage } from "..";
import {
  ApplicationPropertyName,
  ApplicationPropertyValue,
  GlobalToggle,
  GlobalIncrementDecrement,
  AddonSource,
  AudioOutput,
  SleepTimer,
  SetMuteParams,
  SetVolumeParams,
} from "../types/application"; // Adjust the import path as necessary

export class KodiApplicationNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves the values of the given properties from the Application namespace.
   *
   * @param sendMessage - The function to send JSON-RPC messages.
   * @param properties - The list of properties to retrieve.
   * @returns A promise resolving to the application properties.
   */
  async GetProperties(
    properties: ApplicationPropertyName[]
  ): Promise<ApplicationPropertyValue> {
    return this.sendMessage("Application.GetProperties", {
      properties,
    });
  }

  /**
   * Quits the Kodi application.
   *
   * @param sendMessage - The function to send JSON-RPC messages.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Quit(): Promise<string> {
    return this.sendMessage("Application.Quit", {});
  }

  /**
   * Mutes or unmutes the application.
   *
   * @param sendMessage - The function to send JSON-RPC messages.
   * @param mute - Whether to mute (true) or unmute (false) the application.
   * @returns A promise resolving to a boolean indicating the mute state.
   */
  async SetMute(mute: GlobalToggle): Promise<boolean> {
    const paramsObj: SetMuteParams = { mute };
    return this.sendMessage("Application.SetMute", paramsObj);
  }

  /**
   * Sets the volume level for the application.
   *
   * @param sendMessage - The function to send JSON-RPC messages.
   * @param volume - The volume level to set (0-100) or an increment/decrement action.
   * @returns A promise resolving to the new volume level as a number.
   */
  async SetVolume(volume: number | GlobalIncrementDecrement): Promise<number> {
    return this.sendMessage("Application.SetVolume", { volume });
  }
}
