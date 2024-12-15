// =====================
// GUI Namespace Methods
// =====================

import { ISendMessage } from "..";

export class KodiGUINamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Activates the screen saver.
   *
   * @returns A promise that resolves to a confirmation string upon successful activation.
   */
  async ActivateScreenSaver(): Promise<string> {
    return this.sendMessage("GUI.ActivateScreenSaver", {});
  }

  /**
   * Activates a specific window within the GUI.
   *
   * @param window - The ID of the window to activate.
   * @param parameters - An array of parameters required by the window.
   * @returns A promise that resolves to a confirmation string upon successful activation.
   */
  async ActivateWindow(
    window: GUIWindow,
    parameters: string[]
  ): Promise<string> {
    const params: ActivateWindowParams = { window, parameters };
    return this.sendMessage("GUI.ActivateWindow", params);
  }

  /**
   * Retrieves the specified properties from the GUI.
   *
   * @param properties - An array of property names to retrieve.
   * @returns A promise that resolves to an object containing the requested properties.
   */
  async GetProperties(
    properties: GUIPropertyName[]
  ): Promise<GetPropertiesResponse> {
    const params = { properties };
    return this.sendMessage("GUI.GetProperties", params);
  }

  /**
   * Retrieves the available stereoscopic modes.
   *
   * @returns A promise that resolves to an object containing the list of stereoscopic modes.
   */
  async GetStereoscopicModes(): Promise<GetStereoscopicModesResponse> {
    return this.sendMessage("GUI.GetStereoscopicModes", {});
  }

  /**
   * Sets the fullscreen state of the GUI.
   *
   * @param fullscreen - A boolean indicating whether to enable (`true`) or disable (`false`) fullscreen mode, or "toggle" to switch the current state.
   * @returns A promise that resolves to the new fullscreen state (`boolean`) upon successful update.
   */
  async SetFullscreen(fullscreen: boolean | "toggle"): Promise<boolean> {
    const params = { fullscreen };
    return this.sendMessage("GUI.SetFullscreen", params);
  }

  /**
   * Sets the stereoscopic mode of the GUI.
   *
   * @param stereoscopicMode - The stereoscopic mode to set.
   * @returns A promise that resolves to a confirmation string upon successful update.
   */
  async SetStereoscopicMode(
    stereoscopicMode: StereoscopicMode
  ): Promise<string> {
    const params = { stereoscopicMode };
    return this.sendMessage("GUI.SetStereoscopicMode", params);
  }

  /**
   * Displays a notification within the GUI.
   *
   * @param title - The title of the notification.
   * @param message - The message body of the notification.
   * @param image - Optional image type ("info", "warning", "error") or a URL to a custom icon.
   * @param displaytime - Optional time in milliseconds for how long the notification should be displayed (minimum 1500ms).
   * @returns A promise that resolves to a confirmation string upon successful display.
   */
  async ShowNotification(
    title: string,
    message: string,
    image?: "info" | "warning" | "error" | string,
    displaytime?: number
  ): Promise<string> {
    const params: ShowNotificationParams = {
      title,
      message,
      image,
      displaytime,
    };
    return this.sendMessage("GUI.ShowNotification", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available window IDs.
 */
type GUIWindow =
  | "addon"
  | "addonbrowser"
  | "addoninformation"
  | "addonsettings"
  | "appearancesettings"
  | "busydialog"
  | "busydialognocancel"
  | "contentsettings"
  | "contextmenu"
  | "dialogcolorpicker"
  | "dialogselectaudio"
  | "dialogselectsubtitle"
  | "dialogselectvideo"
  | "eventlog"
  | "extendedprogressdialog"
  | "favouritesbrowser"
  | "filebrowser"
  | "filemanager"
  | "fullscreengame"
  | "fullscreeninfo"
  | "fullscreenlivetv"
  | "fullscreenlivetvinput"
  | "fullscreenlivetvpreview"
  | "fullscreenradio"
  | "fullscreenradioinput"
  | "fullscreenradiopreview"
  | "fullscreenvideo"
  | "gameadvancedsettings"
  | "gameagents"
  | "gamecontrollers"
  | "gameosd"
  | "gamepadinput"
  | "gameports"
  | "games"
  | "gamesaves"
  | "gamesettings"
  | "gamestretchmode"
  | "gamevideofilter"
  | "gamevideorotation"
  | "gamevolume"
  | "home"
  | "infoprovidersettings"
  | "ingamesaves"
  | "interfacesettings"
  | "libexportsettings"
  | "locksettings"
  | "loginscreen"
  | "managevideoextras"
  | "managevideoversions"
  | "mediafilter"
  | "mediasettings"
  | "mediasource"
  | "movieinformation"
  | "music"
  | "musicinformation"
  | "musicosd"
  | "musicplaylist"
  | "musicplaylisteditor"
  | "networksetup"
  | "notification"
  | "numericinput"
  | "okdialog"
  | "osdaudiosettings"
  | "osdcmssettings"
  | "osdsubtitlesettings"
  | "osdvideosettings"
  | "peripherals"
  | "peripheralsettings"
  | "pictureinfo"
  | "pictures"
  | "playercontrols"
  | "playerprocessinfo"
  | "playersettings"
  | "profiles"
  | "profilesettings"
  | "programs"
  | "progressdialog"
  | "pvrchannelguide"
  | "pvrchannelmanager"
  | "pvrchannelscan"
  | "pvrgroupmanager"
  | "pvrguidecontrols"
  | "pvrguideinfo"
  | "pvrguidesearch"
  | "pvrosdchannels"
  | "pvrosdguide"
  | "pvrosdteletext"
  | "pvrradiordsinfo"
  | "pvrrecordinginfo"
  | "pvrsettings"
  | "pvrtimersetting"
  | "pvrupdateprogress"
  | "radiochannels"
  | "radioguide"
  | "radioproviders"
  | "radiorecordings"
  | "radiosearch"
  | "radiotimerrules"
  | "radiotimers"
  | "screencalibration"
  | "screensaver"
  | "seekbar"
  | "selectdialog"
  | "selectvideoextra"
  | "selectvideoversion"
  | "servicesettings"
  | "settings"
  | "shutdownmenu"
  | "skinsettings"
  | "sliderdialog"
  | "slideshow"
  | "smartplaylisteditor"
  | "smartplaylistrule"
  | "songinformation"
  | "splash"
  | "startup"
  | "startwindow"
  | "submenu"
  | "subtitlesearch"
  | "systeminfo"
  | "systemsettings"
  | "teletext"
  | "textviewer"
  | "tvchannels"
  | "tvguide"
  | "tvproviders"
  | "tvrecordings"
  | "tvsearch"
  | "tvtimerrules"
  | "tvtimers"
  | "videobookmarks"
  | "videomenu"
  | "videoosd"
  | "videoplaylist"
  | "videos"
  | "videotimeseek"
  | "virtualkeyboard"
  | "visualisation"
  | "visualisationpresetlist"
  | "volumebar"
  | "weather"
  | "yesnodialog";

/**
 * Represents the available stereoscopic modes.
 */
type StereoscopicMode =
  | "off"
  | "split_vertical"
  | "split_horizontal"
  | "row_interleaved"
  | "hardware_based"
  | "anaglyph_cyan_red"
  | "anaglyph_green_magenta"
  | "anaglyph_yellow_blue"
  | "monoscopic";

/**
 * Represents the properties that can be retrieved via GUI.GetProperties.
 */
type GUIPropertyName =
  | "fullscreen"
  | "currentwindow"
  | "screensaverActive"
  | "stereoscopicmode"
  | "currentcontrol"
  | "skin";

/**
 * Represents the response structure for GUI.GetProperties.
 */
type GetPropertiesResponse = {
  fullscreen: boolean;
  currentwindow: {
    id: number;
    label: string;
  };
  screensaverActive: boolean;
  stereoscopicmode: {
    label: string;
    mode: StereoscopicMode;
  };
  currentcontrol?: {
    label: string;
  };
  skin?: {
    id: string;
    name: string;
  };
};

/**
 * Represents the response structure for GUI.GetStereoscopicModes.
 */
type GetStereoscopicModesResponse = {
  stereoscopicmodes: StereoscopicMode[];
};

/**
 * Represents the parameters for ShowNotification.
 */
type ShowNotificationParams = {
  title: string;
  message: string;
  image?: "info" | "warning" | "error" | string;
  displaytime?: number; // in milliseconds
};

/**
 * Represents the parameters for ActivateWindow.
 */
type ActivateWindowParams = {
  window: GUIWindow;
  parameters: string[];
};
