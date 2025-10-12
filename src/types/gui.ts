// Types and Interfaces Block
// These types and interfaces are specific to the GUI methods and mirror the
// shapes described in `src/kodi.json` under the GUI namespace.
//
// Consumers can use the exported helper factories (e.g. `makeGuiProps`) to
// build readonly tuples that preserve literal types for better compile-time
// inference with namespace methods such as `kodi.GUI.GetProperties`.

/**
 * StereoscopicMode ($ref: "GUI.StereoscopicMode")
 * Enum for stereoscopic modes used by GUI.SetStereoscopicMode and the
 * stereoscopic properties returned by GUI.GetStereoscopicModes.
 *
 * Example: `const m: StereoscopicMode = "anaglyph_cyan_red";`
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
 * Enum for window names accepted by GUI.ActivateWindow.
 * Use these string literals when calling GUI methods that accept a window
 * identifier.
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
 * Enumerates the property names accepted by `GUI.GetProperties`.
 *
 * Use `makeGuiProps("currentwindow", "fullscreen")` to create a readonly
 * tuple that preserves literal types for callers.
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
/**
 * Full mapping of GUI.Property.Value from kodi.json
 */
export interface PropertyValue {
  currentcontrol?: { label: string };
  currentwindow?: { id: number; label: string };
  fullscreen?: boolean;
  skin?: { id: string; name?: string };
  stereoscopicmode?: {
    label: string;
    mode:
      | "off"
      | "split_vertical"
      | "split_horizontal"
      | "row_interleaved"
      | "hardware_based"
      | "anaglyph_cyan_red"
      | "anaglyph_green_magenta"
      | "anaglyph_yellow_blue"
      | "monoscopic";
  };
}

/**
 * Typed const list of GUI property names.
 *
 * Useful as a reference or when you want to pick values programmatically.
 */
export const guiProps = [
  "currentwindow",
  "currentcontrol",
  "skin",
  "fullscreen",
  "stereoscopicmode",
] as const;

/**
 * Create a typed readonly tuple of GUI PropertyName values.
 *
 * The returned value is a readonly tuple which preserves literal types so
 * callers get narrowed inference when passing the tuple to namespace methods.
 *
 * @example
 * ```ts
 * import { makeGuiProps } from "../types/gui";
 * const props = makeGuiProps("currentwindow", "fullscreen");
 * // props is typed as readonly ["currentwindow","fullscreen"]
 * ```
 */
export function makeGuiProps<const P extends readonly PropertyName[]>(...p: P) {
  return p;
}

export const asGuiProps = makeGuiProps;

/**
 * Build params for `GUI.ActivateWindow`.
 * Useful to construct the params object with correct typing.
 *
 * @example
 * ```ts
 * import { makeActivateWindowParams } from "../types/gui";
 * const params = makeActivateWindowParams("filebrowser", ["/path/to/dir"]);
 * // kodi.GUI.ActivateWindow(params.window, params.parameters)
 * ```
 */
export function makeActivateWindowParams(window: Window, parameters?: string[]) {
  const p: any = { window };
  if (parameters !== undefined) p.parameters = parameters;
  return p as { window: Window; parameters?: string[] };
}

/**
 * Build params for `GUI.ShowNotification`.
 * Normalizes optional image and displaytime parameters.
 *
 * @example
 * ```ts
 * import { makeShowNotificationParams } from "../types/gui";
 * const params = makeShowNotificationParams("Hello", "This is a message", "info", 3000);
 * // kodi.GUI.ShowNotification(params.title, params.message, params.image, params.displaytime)
 * ```
 */
export function makeShowNotificationParams(
  title: string,
  message: string,
  image: NotificationType | string = "info",
  displaytime: number = 5000
) {
  return { title, message, image, displaytime } as {
    title: string;
    message: string;
    image: NotificationType | string;
    displaytime: number;
  };
}

/**
 * Build params for `GUI.SetFullscreen`.
 * Accepts boolean or "toggle" per schema's Global.Toggle.
 */
export function makeSetFullscreenParams(fullscreen: boolean | "toggle") {
  return { fullscreen } as { fullscreen: boolean | "toggle" };
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
