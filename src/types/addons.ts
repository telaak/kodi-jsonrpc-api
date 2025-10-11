// Types and Interfaces Block
// These types and interfaces are specific to the Addons methods and do not exist in koditestExports.ts

/**
 * Addon.Fields ($ref: "Addon.Fields")
 * Defines which fields to retrieve for addon details.
 */
export type AddonFields =
  | "name"
  | "version"
  | "summary"
  | "description"
  | "path"
  | "author"
  | "thumbnail"
  | "disclaimer"
  | "fanart"
  | "dependencies"
  | "broken"
  | "extrainfo"
  | "rating"
  | "enabled"
  | "installed"
  | "deprecated";

/**
 * AddonType ($ref: "Addon.Types")
 * Enum for addon types.
 */
export type AddonType =
  | "unknown"
  | "xbmc.player.musicviz"
  | "xbmc.gui.skin"
  | "kodi.pvrclient"
  | "kodi.inputstream"
  | "kodi.gameclient"
  | "kodi.peripheral"
  | "xbmc.python.script"
  | "xbmc.python.weather"
  | "xbmc.subtitle.module"
  | "xbmc.python.lyrics"
  | "xbmc.metadata.scraper.albums"
  | "xbmc.metadata.scraper.artists"
  | "xbmc.metadata.scraper.movies"
  | "xbmc.metadata.scraper.musicvideos"
  | "xbmc.metadata.scraper.tvshows"
  | "xbmc.ui.screensaver"
  | "xbmc.python.pluginsource"
  | "xbmc.addon.repository"
  | "xbmc.webinterface"
  | "xbmc.service"
  | "kodi.audioencoder"
  | "kodi.context.item"
  | "kodi.audiodecoder"
  | "kodi.resource.images"
  | "kodi.resource.language"
  | "kodi.resource.uisounds"
  | "kodi.resource.games"
  | "kodi.resource.font"
  | "kodi.vfs"
  | "kodi.imagedecoder"
  | "xbmc.metadata.scraper.library"
  | "xbmc.python.library"
  | "xbmc.python.module"
  | "kodi.game.controller"
  | ""
  | "xbmc.addon.video"
  | "xbmc.addon.audio"
  | "xbmc.addon.image"
  | "xbmc.addon.executable"
  | "kodi.addon.game";

/**
 * AddonContent ($ref: "Addon.Content")
 * Enum for addon content types.
 */
export type AddonContent =
  | "unknown"
  | "video"
  | "audio"
  | "image"
  | "executable";

/**
 * AddonDetails ($ref: "Addon.Details")
 * Represents detailed information about an addon.
 */
export interface AddonDetails {
  addonid: string; // Unique identifier for the addon
  author?: string;
  broken?: boolean | string | null;
  dependencies?: {
    addonid: string;
    optional: boolean;
    version: string;
  }[];
  deprecated?: boolean | string | null;
  description?: string;
  disclaimer?: string;
  enabled?: boolean;
  extrainfo?: { key: string; value: string }[];
  fanart?: string;
  installed?: boolean;
  name?: string;
  path?: string;
  rating?: number;
  summary?: string;
  thumbnail?: string;
  type?: AddonType;
  version?: string;
}

/**
 * ListLimitsReturned ($ref: "List.LimitsReturned")
 * Represents the limits returned by list methods.
 */
export interface ListLimitsReturned {
  total: number; // Total number of items
  start: number; // Starting index
  end: number; // Ending index
}

/**
 * ListLimits ($ref: "List.Limits")
 * Represents the limits to apply to list methods.
 */
export interface ListLimits {
  start?: number; // Starting index
  end?: number; // Ending index
  limit?: number; // Limit
}

/**
 * GlobalToggle ($ref: "Global.Toggle")
 * Represents a toggle option, typically a boolean.
 */
export type GlobalToggle = boolean | "toggle";

/**
 * ExecuteAddonParams ($ref: "Addons.ExecuteAddon.Params")
 * Parameters for the ExecuteAddon method.
 */
export interface ExecuteAddonParams {
  addonid: string; // ID of the addon to execute
  params?: string | { [key: string]: string } | string[]; // Parameters for the addon
  wait?: boolean; // Whether to wait for the addon to finish
}

/**
 * ExecuteAddonResponse ($ref: "Addons.ExecuteAddon.Response")
 * Response structure for the ExecuteAddon method.
 */
// ExecuteAddon returns a plain string per kodi.json - use primitive string where needed

/**
 * AddonsGetAddonDetailsResponse ($ref: "Addons.GetAddonDetails.Response")
 * Response structure for the GetAddonDetails method.
 */
export interface AddonsGetAddonDetailsResponse {
  addon: AddonDetails; // Details of the addon
  limits: ListLimitsReturned; // Limits information
}

/**
 * AddonsGetAddonsResponse ($ref: "Addons.GetAddons.Response")
 * Response structure for the GetAddons method.
 */
export interface AddonsGetAddonsResponse {
  addons: AddonDetails[]; // List of addons
  limits: ListLimitsReturned; // Limits information
}

/**
 * GetAddonsParams ($ref: "Addons.GetAddons.Params")
 * Parameters for the GetAddons method.
 */
export interface GetAddonsParams {
  type?: AddonType; // Type of addons to retrieve (default is "unknown")
  content?: AddonContent; // Content type for plugins and scripts (default is "unknown")
  enabled?: boolean | "all"; // Whether to filter by enabled status ("all" to include all)
  properties?: AddonFields[]; // Properties to retrieve
  limits?: ListLimits; // Limits to apply
  installed?: boolean | "all"; // Whether to filter by installed status ("all" to include all)
}

/**
 * GetAddonsResponse ($ref: "Addons.GetAddons.Response")
 * Response structure for the GetAddons method.
 */
export interface GetAddonsResponse {
  addons: AddonDetails[]; // List of addons
  limits: ListLimitsReturned; // Limits information
}

/**
 * SetAddonEnabledParams ($ref: "Addons.SetAddonEnabled.Params")
 * Parameters for the SetAddonEnabled method.
 */
export interface SetAddonEnabledParams {
  addonid: string; // ID of the addon to enable/disable
  enabled: GlobalToggle; // Whether to enable or disable the addon
}

/**
 * SetAddonEnabledResponse ($ref: "Addons.SetAddonEnabled.Response")
 * Response structure for the SetAddonEnabled method.
 */
// SetAddonEnabled returns a plain string per kodi.json - use primitive string where needed

// --- Helpers: typed const and factories for AddonFields ---
/**
 * Typed readonly const array of available addon properties (AddonFields).
 * Use this to reference available fields or to pick subsets for requests.
 */
export const addonFields = [
  "name",
  "version",
  "summary",
  "description",
  "path",
  "author",
  "thumbnail",
  "disclaimer",
  "fanart",
  "dependencies",
  "broken",
  "extrainfo",
  "rating",
  "enabled",
  "installed",
  "deprecated",
] as const;

/**
 * Create a typed readonly tuple of AddonFields.
 * Preserves literal types for callers so TypeScript infers narrow tuple types
 * without requiring `as const` at each call site.
 *
 * Note: at runtime the readonly tuple is cast to `string[]` before sending
 * the RPC payload because the transport expects a plain array of strings.
 */
export function makeAddonFields<const P extends readonly AddonFields[]>(...p: P) {
  return p;
}

/** Alias for makeAddonFields to match helper naming patterns */
export const asAddonFields = makeAddonFields;
