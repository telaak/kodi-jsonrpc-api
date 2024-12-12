// Types and Interfaces Block
// These types and interfaces are specific to the GUI methods and do not exist in koditestExports.ts

/**
 * StereoscopicMode ($ref: "GUI.StereoscopicMode")
 * Enum for stereoscopic modes.
 */
export type StereoscopicMode =
  | "toggle"
  | "tomono"
  | "next"
  | "previous"
  | "select"
  | "off"
  | "split_vertical"
  | "split_horizontal"
  | "row_interleaved"
  | "hardware_based"
  | "anaglyph_cyan_red"
  | "anaglyph_green_magenta"
  | "monoscopic";

/**
 * Window ($ref: "GUI.Window")
 * Enum for window names.
 */
export type Window =
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
 * PropertyName ($ref: "GUI.Property.Name")
 * Enum for GUI property names.
 */
export type PropertyName =
  | "currentwindow"
  | "currentcontrol"
  | "skin"
  | "fullscreen"
  | "stereoscopicmode";
// Add other property names as per kodi.json

/**
 * PropertyValue ($ref: "GUI.Property.Value")
 * Interface for GUI property values.
 */
export interface PropertyValue {
  currentcontrol: string
  currentwindow: Window; // Current active window
  fullscreen: boolean; // Fullscreen state
  osdvisible: boolean; // On-screen display visibility
  videoplayerdisplaytext: string; // Display text in video player
  resolutionsettings: string; // Current resolution settings
  stereoscopicmode: StereoscopicMode; // Current stereoscopic mode
  // Add other properties as per kodi.json
}

/**
 * NotificationType ($ref: "GUI.Notification.Type")
 * Enum for notification image types.
 */
export type NotificationType = "info" | "warning" | "error";

/**
 * ViewMode ($ref: "Player.ViewMode")
 * Enum for view modes.
 */
export type ViewMode =
  | "default"
  | "poster"
  | "filmstrip"
  | "thumb"
  | "smallthumb"
  | "mediumthumb"
  | "largethumb"
  | "list";

/**
 * GUIPropertyValue ($ref: "GUI.Property.Value")
 * Interface representing GUI property values.
 */
export interface GUIPropertyValue {
  // Define GUI property values as per kodi.json
  // Example:
  fullscreen: boolean;
  stereoscopicmode: StereoscopicMode;
  // Add other properties as necessary
}
