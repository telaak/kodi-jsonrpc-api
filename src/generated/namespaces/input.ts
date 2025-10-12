import { ISendMessage } from '../../';
import { InputButtonEventParams } from '../types/InputButtonEventParams';
import { InputAction } from '../types/InputAction';
import { InputExecuteActionParams } from '../types/InputExecuteActionParams';
import { InputSendTextParams } from '../types/InputSendTextParams';


export class KodiInputNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Goes back in GUI
   * @returns string
   */
  async Back(): Promise<string> {
    return this.sendMessage<string>("Input.Back", {});
  }

  /**
   * Send a button press event
   * @param button string
   * @param keymap "KB" | "XG" | "R1" | "R2"
   * @param holdtime number (optional)
   * @returns string
   */
  async ButtonEvent(params: InputButtonEventParams): Promise<string> {
    return this.sendMessage<string>("Input.ButtonEvent", params);
  }

  /**
   * Shows the context menu
   * @returns string
   */
  async ContextMenu(): Promise<string> {
    return this.sendMessage<string>("Input.ContextMenu", {});
  }

  /**
   * Navigate down in GUI
   * @returns string
   */
  async Down(): Promise<string> {
    return this.sendMessage<string>("Input.Down", {});
  }

  /**
   * Execute a specific action
   * @param action InputAction
   * @returns string
   */
  async ExecuteAction(params: InputExecuteActionParams): Promise<string> {
    return this.sendMessage<string>("Input.ExecuteAction", params);
  }

  /**
   * Goes to home window in GUI
   * @returns string
   */
  async Home(): Promise<string> {
    return this.sendMessage<string>("Input.Home", {});
  }

  /**
   * Shows the information dialog
   * @returns string
   */
  async Info(): Promise<string> {
    return this.sendMessage<string>("Input.Info", {});
  }

  /**
   * Navigate left in GUI
   * @returns string
   */
  async Left(): Promise<string> {
    return this.sendMessage<string>("Input.Left", {});
  }

  /**
   * Navigate right in GUI
   * @returns string
   */
  async Right(): Promise<string> {
    return this.sendMessage<string>("Input.Right", {});
  }

  /**
   * Select current item in GUI
   * @returns string
   */
  async Select(): Promise<string> {
    return this.sendMessage<string>("Input.Select", {});
  }

  /**
   * Send a generic (unicode) text
   * @param text string
   * @param done boolean (optional)
   * @returns string
   */
  async SendText(params: InputSendTextParams): Promise<string> {
    return this.sendMessage<string>("Input.SendText", params);
  }

  /**
   * Show codec information of the playing item
   * @returns string
   */
  async ShowCodec(): Promise<string> {
    return this.sendMessage<string>("Input.ShowCodec", {});
  }

  /**
   * Show the on-screen display for the current player
   * @returns string
   */
  async ShowOSD(): Promise<string> {
    return this.sendMessage<string>("Input.ShowOSD", {});
  }

  /**
   * Show player process information of the playing item, like video decoder, pixel format, pvr signal strength, ...
   * @returns string
   */
  async ShowPlayerProcessInfo(): Promise<string> {
    return this.sendMessage<string>("Input.ShowPlayerProcessInfo", {});
  }

  /**
   * Navigate up in GUI
   * @returns string
   */
  async Up(): Promise<string> {
    return this.sendMessage<string>("Input.Up", {});
  }

}