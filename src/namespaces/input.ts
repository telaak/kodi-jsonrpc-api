// Functions Block
// These functions correspond to the Input methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Input" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiInputNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  InputAction,
  InputButtonEventType,
  InputButtonEventParams,
  InputSendTextParams,
  InputExecuteActionParams,
  InputShowCodecParams,
  InputShowOSDParams,
  InputShowPlayerProcessInfoParams,
  InputMoveParams,
  InputGoToParams,
  InputFields,
  InputButtonEventResponse,
  InputSendTextResponse,
  InputExecuteActionResponse,
  InputShowCodecResponse,
  InputShowOSDResponse,
  InputShowPlayerProcessInfoResponse,
  InputMoveResponse,
  InputGoToResponse,
  InputBackResponse,
  InputContextMenuResponse,
  InputSelectResponse,
  InputUpResponse,
  InputDownResponse,
  InputLeftResponse,
  InputRightResponse,
  InputHomeResponse,
  InputInfoResponse,
} from "../types/input"; // Adjust the import path as necessary

export class KodiInputNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Navigates back in the current context.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Back(): Promise<InputBackResponse> {
    return this.sendMessage("Input.Back", {});
  }

  /**
   * Sends a button event to the player.
   *
   * @param button - The name of the button event.
   * @param action - The type of button event action.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ButtonEvent(
    button: string,
    action: InputButtonEventType,
    holdtime?: number
  ): Promise<InputButtonEventResponse> {
    const params: InputButtonEventParams = { button, action, holdtime };
    return this.sendMessage("Input.ButtonEvent", params);
  }

  /**
   * Opens the context menu.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ContextMenu(): Promise<InputContextMenuResponse> {
    return this.sendMessage("Input.ContextMenu", {});
  }

  /**
   * Navigates down in the current context.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Down(): Promise<InputDownResponse> {
    return this.sendMessage("Input.Down", {});
  }

  /**
   * Executes a specific action.
   *
   * @param action - The action to execute.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ExecuteAction(
    action: InputAction
  ): Promise<InputExecuteActionResponse> {
    const params: InputExecuteActionParams = { action };
    return this.sendMessage("Input.ExecuteAction", params);
  }

  /**
   * Navigates to the home screen.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Home(): Promise<InputHomeResponse> {
    return this.sendMessage("Input.Home", {});
  }

  /**
   * Displays the info dialog.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Info(): Promise<InputInfoResponse> {
    return this.sendMessage("Input.Info", {});
  }

  /**
   * Navigates left in the current context.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Left(): Promise<InputLeftResponse> {
    return this.sendMessage("Input.Left", {});
  }

  /**
   * Navigates right in the current context.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Right(): Promise<InputRightResponse> {
    return this.sendMessage("Input.Right", {});
  }

  /**
   * Selects the currently highlighted item.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Select(): Promise<InputSelectResponse> {
    return this.sendMessage("Input.Select", {});
  }

  /**
   * Sends text input to the player.
   *
   * @param text - The text to send.
   * @param done - Whether the input is complete (default: true).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SendText(
    text: string,
    done: boolean = true
  ): Promise<InputSendTextResponse> {
    const params: InputSendTextParams = { text, done };
    return this.sendMessage("Input.SendText", params);
  }

  /**
   * Shows or hides the codec information.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ShowCodec(): Promise<InputShowCodecResponse> {
    return this.sendMessage("Input.ShowCodec", {});
  }

  /**
   * Shows or hides the On-Screen Display (OSD).
   *
   * @param show - Whether to show or hide the OSD.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ShowOSD(): Promise<InputShowOSDResponse> {
    return this.sendMessage("Input.ShowOSD", {});
  }

  /**
   * Shows or hides the player process information.
   *
   * @param playerid - The ID of the player.
   * @param show - Whether to show or hide the player process info.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ShowPlayerProcessInfo(): Promise<InputShowPlayerProcessInfoResponse> {
    return this.sendMessage("Input.ShowPlayerProcessInfo", {});
  }

  /**
   * Navigates up in the current context.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Up(): Promise<InputUpResponse> {
    return this.sendMessage("Input.Up", {});
  }
}
