import { ISendMessage } from "..";

export class KodiInputNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // Input Namespace Methods
  // =====================

  /**
   * Triggers a button event with the specified button, source, and duration.
   *
   * @param button - The name of the button to trigger.
   * @param source - The source of the button event ("KB", "XG", "R1", "R2").
   * @param holdtime - Number of milliseconds to simulate button hold
   * @returns A promise that resolves to a string indicating the result of the button event.
   */
  async ButtonEvent(
    button: string,
    keymap: Keymap,
    holdtime?: number
  ): Promise<string> {
    const params: ButtonEventParams = { button, keymap, holdtime };
    return this.sendMessage("Input.ButtonEvent", params);
  }

  /**
   * Executes a specific action in the current context.
   *
   * @param action - The action to execute.
   * @returns A string on success
   */
  async ExecuteAction(action: InputAction): Promise<string> {
    const params: ExecuteActionParams = { action };
    return this.sendMessage("Input.ExecuteAction", params);
  }

  /**
   * Navigates back in the current context.
   *
   * @returns A string on success
   */
  async Back(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.Back", params);
  }

  /**
   * Opens the context menu in the current context.
   *
   * @returns A string on success
   */
  async ContextMenu(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.ContextMenu", params);
  }

  /**
   * Navigates down in the current context.
   *
   * @returns A string on success
   */
  async Down(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.Down", params);
  }

  /**
   * Navigates to the home screen.
   *
   * @returns A string on success
   */
  async Home(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.Home", params);
  }

  /**
   * Displays information about the current context.
   *
   * @returns A string on success
   */
  async Info(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.Info", params);
  }

  /**
   * Navigates left in the current context.
   *
   * @returns A string on success
   */
  async Left(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.Left", params);
  }

  /**
   * Navigates right in the current context.
   *
   * @returns A string on success
   */
  async Right(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.Right", params);
  }

  /**
   * Selects the currently highlighted item.
   *
   * @returns A string on success
   */
  async Select(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.Select", params);
  }

  /**
   * Sends text input to the current context.
   *
   * @param text - The text to send.
   * @param done - Whether this is the whole input or not (closes an open input dialog if true).
   * @returns A string on success
   */
  async SendText(text: string, done: boolean): Promise<string> {
    const params: SendTextParams = { text, done };
    return this.sendMessage("Input.SendText", params);
  }

  /**
   * Shows codec information on the On-Screen Display (OSD).
   *
   * @returns A string on success
   */
  async ShowCodec(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.ShowCodec", params);
  }

  /**
   * Shows or hides the On-Screen Display (OSD).
   *
   * @returns A string on success
   */
  async ShowOSD(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.ShowOSD", params);
  }

  /**
   * Shows or hides player process information on the OSD.
   *
   * @returns A string on success
   */
  async ShowPlayerProcessInfo(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.ShowPlayerProcessInfo", params);
  }

  /**
   * Navigates up in the current context.
   *
   * @returns A string on success
   */
  async Up(): Promise<string> {
    const params: {} = {};
    return this.sendMessage("Input.Up", params);
  }
}
// =====================
// Type Definitions
// =====================

/**
 * Represents the available actions for ExecuteAction.
 */
type InputAction =
  | "analogfastforward"
  | "analogmove"
  | "analogmovexleft"
  | "analogmovexright"
  | "analogmoveydown"
  | "analogmoveyup"
  | "analogrewind"
  | "analogseekback"
  | "analogseekforward"
  | "aspectratio"
  | "audiodelay"
  | "audiodelayminus"
  | "audiodelayplus"
  | "audionextlanguage"
  | "audiotoggledigital"
  | "back"
  | "backspace"
  | "bigstepback"
  | "bigstepforward"
  | "blue"
  | "browsesubtitle"
  | "channeldown"
  | "channelnumberseparator"
  | "channelup"
  | "chapterorbigstepback"
  | "chapterorbigstepforward"
  | "close"
  | "codecinfo"
  | "contextmenu"
  | "copy"
  | "createbookmark"
  | "createepisodebookmark"
  | "cursorleft"
  | "cursorright"
  | "cyclesubtitle"
  | "cycletonemapmethod"
  | "decreasepar"
  | "decreaserating"
  | "decreasevisrating"
  | "delete"
  | "dialogselectaudio"
  | "dialogselectsubtitle"
  | "dialogselectvideo"
  | "doubleclick"
  | "down"
  | "enter"
  | "error"
  | "fastforward"
  | "filter"
  | "filterclear"
  | "filtersms2"
  | "filtersms3"
  | "filtersms4"
  | "filtersms5"
  | "filtersms6"
  | "filtersms7"
  | "filtersms8"
  | "filtersms9"
  | "firstpage"
  | "fullscreen"
  | "green"
  | "guiprofile"
  | "hdrtoggle"
  | "highlight"
  | "increasepar"
  | "increaserating"
  | "increasevisrating"
  | "info"
  | "jumpsms2"
  | "jumpsms3"
  | "jumpsms4"
  | "jumpsms5"
  | "jumpsms6"
  | "jumpsms7"
  | "jumpsms8"
  | "jumpsms9"
  | "lastpage"
  | "left"
  | "leftclick"
  | "lockpreset"
  | "longclick"
  | "longpress"
  | "menu"
  | "middleclick"
  | "mousedrag"
  | "mousedragend"
  | "mousemove"
  | "move"
  | "moveitemdown"
  | "moveitemup"
  | "mute"
  | "nextcalibration"
  | "nextchannelgroup"
  | "nextletter"
  | "nextpicture"
  | "nextpreset"
  | "nextresolution"
  | "nextscene"
  | "nextstereomode"
  | "nextsubtitle"
  | "noop"
  | "number0"
  | "number1"
  | "number2"
  | "number3"
  | "number4"
  | "number5"
  | "number6"
  | "number7"
  | "number8"
  | "number9"
  | "osd"
  | "pagedown"
  | "pageup"
  | "pangesture"
  | "parentdir"
  | "parentfolder"
  | "pause"
  | "play"
  | "playerdebug"
  | "playerdebugvideo"
  | "playerprocessinfo"
  | "playerprogramselect"
  | "playerresolutionselect"
  | "playlist"
  | "playnext"
  | "playpause"
  | "playpvr"
  | "playpvrradio"
  | "playpvrtv"
  | "previouschannelgroup"
  | "previousmenu"
  | "previouspicture"
  | "previouspreset"
  | "previousscene"
  | "previousstereomode"
  | "prevletter"
  | "queue"
  | "randompreset"
  | "record"
  | "red"
  | "reloadkeymaps"
  | "rename"
  | "resetcalibration"
  | "rewind"
  | "right"
  | "rightclick"
  | "rotate"
  | "rotateccw"
  | "rotategesture"
  | "scanitem"
  | "screenshot"
  | "scrolldown"
  | "scrollup"
  | "select"
  | "setrating"
  | "settingslevelchange"
  | "settingsreset"
  | "shift"
  | "showpreset"
  | "showsubtitles"
  | "showtime"
  | "showtimerrule"
  | "showvideomenu"
  | "skipnext"
  | "skipprevious"
  | "smallstepback"
  | "stepback"
  | "stepforward"
  | "stereomode"
  | "stereomodetomono"
  | "stop"
  | "subtitlealign"
  | "subtitledelay"
  | "subtitledelayminus"
  | "subtitledelayplus"
  | "subtitleshiftdown"
  | "subtitleshiftup"
  | "swipedown"
  | "swipeleft"
  | "swiperight"
  | "swipeup"
  | "switchplayer"
  | "symbols"
  | "tap"
  | "tempodown"
  | "tempoup"
  | "togglecommskip"
  | "togglefont"
  | "togglefullscreen"
  | "togglestereomode"
  | "togglewatched"
  | "up"
  | "verticalshiftdown"
  | "verticalshiftup"
  | "videonextstream"
  | "voicerecognizer"
  | "volampdown"
  | "volampup"
  | "volumeamplification"
  | "volumedown"
  | "volumeup"
  | "wheeldown"
  | "wheelup"
  | "yellow"
  | "zoomgesture"
  | "zoomin"
  | "zoomlevel1"
  | "zoomlevel2"
  | "zoomlevel3"
  | "zoomlevel4"
  | "zoomlevel5"
  | "zoomlevel6"
  | "zoomlevel7"
  | "zoomlevel8"
  | "zoomlevel9"
  | "zoomnormal"
  | "zoomout";

/**
 * Represents the available sources for ButtonEvent.
 */
type Keymap = "KB" | "XG" | "R1" | "R2";

/**
 * Represents the parameters for ButtonEvent.
 */
interface ButtonEventParams {
  button: string;
  keymap: Keymap;
  holdtime?: number;
}

/**
 * Represents the parameters for ExecuteAction.
 */
type ExecuteActionParams = {
  action: InputAction;
};

/**
 * Represents the parameters for SendText.
 */
interface SendTextParams {
  text: string;
  done: boolean;
}
