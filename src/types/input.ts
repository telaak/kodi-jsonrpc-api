// Types and Interfaces Block
// These types and interfaces are specific to the Input methods and do not exist in koditestExports.ts

/**
 * InputAction ($ref: "Input.Action")
 * Enum for input actions.
 */
export type InputAction =
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
 * InputButtonEventType ($ref: "Input.ButtonEvent.Type")
 * Enum for button event types.
 */
export type InputButtonEventType = "KB" | "XG" | "R1" | "R2";

/**
 * InputButtonEventParams ($ref: "Input.ButtonEvent.Params")
 * Parameters for the ButtonEvent method.
 */
export interface InputButtonEventParams {
  button: string; // Name of the button event
  keymap: InputButtonEventType; // Type of button event action
  holdtime?: number;
}

/**
 * InputSendTextParams ($ref: "Input.SendText.Params")
 * Parameters for the SendText method.
 */
export interface InputSendTextParams {
  text: string; // Text to send
  done?: boolean; // Whether the input is complete (default: true)
}

/**
 * InputExecuteActionParams ($ref: "Input.ExecuteAction.Params")
 * Parameters for the ExecuteAction method.
 */
export interface InputExecuteActionParams {
  action: InputAction; // Action to execute
}

/**
 * InputShowCodecParams ($ref: "Input.ShowCodec.Params")
 * Parameters for the ShowCodec method.
 */
export interface InputShowCodecParams {
  playerid: number; // ID of the player
}

/**
 * InputShowOSDParams ($ref: "Input.ShowOSD.Params")
 * Parameters for the ShowOSD method.
 */
export interface InputShowOSDParams {
  playerid: number; // ID of the player
  show: boolean; // Whether to show or hide the OSD
}

/**
 * InputShowPlayerProcessInfoParams ($ref: "Input.ShowPlayerProcessInfo.Params")
 * Parameters for the ShowPlayerProcessInfo method.
 */
export interface InputShowPlayerProcessInfoParams {
  playerid: number; // ID of the player
  show: boolean; // Whether to show or hide the player process info
}

/**
 * InputMoveParams ($ref: "Input.Move.Params")
 * Parameters for the Move method.
 */
export interface InputMoveParams {
  direction: "left" | "right" | "up" | "down"; // Direction to move
  playerid?: number; // ID of the player (optional)
}

/**
 * InputGoToParams ($ref: "Input.GoTo.Params")
 * Parameters for the GoTo method.
 */
export interface InputGoToParams {
  playerid: number; // ID of the player
  to: "previous" | "next"; // Target to go to
}

/**
 * InputFields ($ref: "Input.Fields")
 * Represents all possible input fields.
 */
export interface InputFields {
  // Define properties as per kodi.json
}

/**
 * InputButtonEventResponse ($ref: "Input.ButtonEvent.Response")
 * Response structure for the ButtonEvent method.
 */
export type InputButtonEventResponse = string; // Typically empty on success

/**
 * InputSendTextResponse ($ref: "Input.SendText.Response")
 * Response structure for the SendText method.
 */
export type InputSendTextResponse = string; // Typically empty on success

/**
 * InputExecuteActionResponse ($ref: "Input.ExecuteAction.Response")
 * Response structure for the ExecuteAction method.
 */
export type InputExecuteActionResponse = string; // Typically empty on success

/**
 * InputShowCodecResponse ($ref: "Input.ShowCodec.Response")
 * Response structure for the ShowCodec method.
 */
export type InputShowCodecResponse = string; // Typically empty on success

/**
 * InputShowOSDResponse ($ref: "Input.ShowOSD.Response")
 * Response structure for the ShowOSD method.
 */
export type InputShowOSDResponse = string; // Typically empty on success

/**
 * InputShowPlayerProcessInfoResponse ($ref: "Input.ShowPlayerProcessInfo.Response")
 * Response structure for the ShowPlayerProcessInfo method.
 */
export type InputShowPlayerProcessInfoResponse = string; // Typically empty on success

/**
 * InputMoveResponse ($ref: "Input.Move.Response")
 * Response structure for the Move method.
 */
export type InputMoveResponse = string; // Typically empty on success

/**
 * InputGoToResponse ($ref: "Input.GoTo.Response")
 * Response structure for the GoTo method.
 */
export type InputGoToResponse = string; // Typically empty on success

/**
 * InputBackResponse ($ref: "Input.Back.Response")
 * Response structure for the Back method.
 */
export type InputBackResponse = string; // Typically empty on success

/**
 * InputContextMenuResponse ($ref: "Input.ContextMenu.Response")
 * Response structure for the ContextMenu method.
 */
export type InputContextMenuResponse = string; // Typically empty on success

/**
 * InputSelectResponse ($ref: "Input.Select.Response")
 * Response structure for the Select method.
 */
export type InputSelectResponse = string; // Typically empty on success

/**
 * InputUpResponse ($ref: "Input.Up.Response")
 * Response structure for the Up method.
 */
export type InputUpResponse = string; // Typically empty on success

/**
 * InputDownResponse ($ref: "Input.Down.Response")
 * Response structure for the Down method.
 */
export type InputDownResponse = string; // Typically empty on success

/**
 * InputLeftResponse ($ref: "Input.Left.Response")
 * Response structure for the Left method.
 */
export type InputLeftResponse = string; // Typically empty on success

/**
 * InputRightResponse ($ref: "Input.Right.Response")
 * Response structure for the Right method.
 */
export type InputRightResponse = string; // Typically empty on success

/**
 * InputHomeResponse ($ref: "Input.Home.Response")
 * Response structure for the Home method.
 */
export type InputHomeResponse = string; // Typically empty on success

/**
 * InputInfoResponse ($ref: "Input.Info.Response")
 * Response structure for the Info method.
 */
export type InputInfoResponse = string; // Typically empty on success
