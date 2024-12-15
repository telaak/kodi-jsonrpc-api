import { ISendMessage } from "..";

export class KodiApplicationNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }
  // =====================
  // Application Namespace Methods
  // =====================

  /**
   * Retrieves the values of the given properties from the application.
   *
   * @param properties - An array of property names to retrieve.
   * @returns A promise that resolves to an object containing the requested properties.
   */
  async GetProperties(
    properties: ApplicationPropertyName[]
  ): Promise<GetPropertiesResponse> {
    const params = { properties };
    return this.sendMessage("Application.GetProperties", params);
  }

  /**
   * Quits the application.
   *
   * @returns A promise that resolves to a confirmation string upon successful exit.
   */
  async Quit(): Promise<string> {
    return this.sendMessage("Application.Quit", {});
  }

  /**
   * Toggles the mute state of the application.
   *
   * @param mute - A boolean to set mute (`true` to mute, `false` to unmute) or `"toggle"` to switch the current state.
   * @returns A promise that resolves to the new mute state.
   */
  async SetMute(mute: MuteToggle): Promise<boolean> {
    const params = { mute };
    return this.sendMessage("Application.SetMute", params);
  }

  /**
   * Sets the current volume of the application.
   *
   * @param volume - A number between 0 and 100 to set the volume, or `"increment"`/`"decrement"` to adjust the volume by a predefined step.
   * @returns A promise that resolves to the new volume level.
   */
  async SetVolume(volume: VolumeControl): Promise<number> {
    const params = { volume };
    return this.sendMessage("Application.SetVolume", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available property names that can be retrieved from the application.
 */
type ApplicationPropertyName =
  | "muted"
  | "volume"
  | "name"
  | "version"
  | "sorttokens"
  | "language";

/**
 * Represents the options for muting/unmuting the application.
 */
type MuteToggle = boolean | "toggle";

/**
 * Represents the options for adjusting the volume.
 */
type VolumeControl = number | "increment" | "decrement";

/**
 * Represents the response structure for the GetProperties method.
 */
type GetPropertiesResponse = {
  muted?: boolean;
  volume?: number;
  fullscreen?: boolean;
  activeWindow?: string;
  canExit?: boolean;
};
