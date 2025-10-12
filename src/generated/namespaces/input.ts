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
   */
  async Back(): Promise<string> {
    return this.sendMessage("Input.Back", {});
  }

  /**
   * Send a button press event
   */
  async ButtonEvent(params: InputButtonEventParams): Promise<string> {
    return this.sendMessage("Input.ButtonEvent", params);
  }

  /**
   * Shows the context menu
   */
  async ContextMenu(): Promise<string> {
    return this.sendMessage("Input.ContextMenu", {});
  }

  /**
   * Navigate down in GUI
   */
  async Down(): Promise<string> {
    return this.sendMessage("Input.Down", {});
  }

  /**
   * Execute a specific action
   */
  async ExecuteAction(params: InputExecuteActionParams): Promise<string> {
    return this.sendMessage("Input.ExecuteAction", params);
  }

  /**
   * Goes to home window in GUI
   */
  async Home(): Promise<string> {
    return this.sendMessage("Input.Home", {});
  }

  /**
   * Shows the information dialog
   */
  async Info(): Promise<string> {
    return this.sendMessage("Input.Info", {});
  }

  /**
   * Navigate left in GUI
   */
  async Left(): Promise<string> {
    return this.sendMessage("Input.Left", {});
  }

  /**
   * Navigate right in GUI
   */
  async Right(): Promise<string> {
    return this.sendMessage("Input.Right", {});
  }

  /**
   * Select current item in GUI
   */
  async Select(): Promise<string> {
    return this.sendMessage("Input.Select", {});
  }

  /**
   * Send a generic (unicode) text
   */
  async SendText(params: InputSendTextParams): Promise<string> {
    return this.sendMessage("Input.SendText", params);
  }

  /**
   * Show codec information of the playing item
   */
  async ShowCodec(): Promise<string> {
    return this.sendMessage("Input.ShowCodec", {});
  }

  /**
   * Show the on-screen display for the current player
   */
  async ShowOSD(): Promise<string> {
    return this.sendMessage("Input.ShowOSD", {});
  }

  /**
   * Show player process information of the playing item, like video decoder, pixel format, pvr signal strength, ...
   */
  async ShowPlayerProcessInfo(): Promise<string> {
    return this.sendMessage("Input.ShowPlayerProcessInfo", {});
  }

  /**
   * Navigate up in GUI
   */
  async Up(): Promise<string> {
    return this.sendMessage("Input.Up", {});
  }

}