import { ISendMessage } from "..";

export class KodiAddonsNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // Addons Namespace Methods
  // =====================

  /**
   * Executes the given addon with the provided parameters.
   *
   * @param addonId - The ID of the addon to execute.
   * @param params - Optional parameters for the addon execution. Can be an object, an array of strings, or a URL path starting with '/' or '?'.
   * @param wait - Optional boolean indicating whether to wait for the addon to finish execution. Defaults to false.
   * @returns A promise that resolves to a confirmation string upon successful execution.
   */
  async ExecuteAddon(
    addonId: string,
    params?: Record<string, string> | string[] | string,
    wait?: boolean
  ): Promise<string> {
    const payload: ExecuteAddonParams = { addonid: addonId, params, wait };
    return this.sendMessage("Addons.ExecuteAddon", payload);
  }

  /**
   * Retrieves the details of a specific addon.
   *
   * @param addonId - The ID of the addon to retrieve details for.
   * @param properties - Optional array of property names to include in the response.
   * @returns A promise that resolves to an object containing the addon details and limits.
   */
  async GetAddonDetails(
    addonId: string,
    properties?: AddonProperty[]
  ): Promise<GetAddonDetailsResponse> {
    const payload: GetAddonDetailsParams = { addonid: addonId, properties };
    return this.sendMessage("Addons.GetAddonDetails", payload);
  }

  /**
   * Retrieves all available addons with optional filtering and pagination.
   *
   * @param type - Optional type of addons to retrieve. Defaults to "unknown".
   * @param content - Optional content type provided by the addon. Only considered for plugins and scripts. Defaults to "unknown".
   * @param enabled - Optional filter to retrieve only enabled addons, disabled addons, or all addons. Defaults to "all".
   * @param properties - Optional array of property names to include in the response.
   * @param limits - Optional pagination limits with start and end indices.
   * @param installed - Optional filter to retrieve only installed addons, all addons, or based on specific criteria. Defaults to false.
   * @returns A promise that resolves to an object containing the list of addons and pagination limits.
   */
  async GetAddons(
    type?: AddonType,
    content?: "unknown" | "video" | "audio" | "image" | "executable",
    enabled?: EnabledOption,
    properties?: AddonProperty[],
    limits?: ListLimits,
    installed?: boolean | "all"
  ): Promise<GetAddonsResponse> {
    const payload: GetAddonsParams = {
      type,
      content,
      enabled,
      properties,
      limits,
      installed,
    };
    return this.sendMessage("Addons.GetAddons", payload);
  }

  /**
   * Enables or disables a specific addon.
   *
   * @param addonId - The ID of the addon to enable or disable.
   * @param enabled - A boolean to set the addon as enabled (`true`) or disabled (`false`), or the string "toggle" to switch its current state.
   * @returns A promise that resolves to a confirmation string upon successful operation.
   */
  async SetAddonEnabled(
    addonId: string,
    enabled: GlobalToggle
  ): Promise<string> {
    const payload: SetAddonEnabledParams = { addonid: addonId, enabled };
    return this.sendMessage("Addons.SetAddonEnabled", payload);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available property names for addons.
 */
type AddonProperty =
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
 * Represents the addon types.
 */
type AddonType =
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
 * Represents the enabled options.
 */
type EnabledOption = boolean | "all";

/**
 * Represents the global toggle options.
 */
type GlobalToggle = boolean | "toggle";

/**
 * Represents the parameters for ExecuteAddon.
 */
type ExecuteAddonParams = {
  addonid: string;
  params?: Record<string, string> | string[] | string;
  wait?: boolean;
}

/**
 * Represents the parameters for GetAddonDetails.
 */
type GetAddonDetailsParams = {
  addonid: string;
  properties?: AddonProperty[];
}

/**
 * Represents the response for GetAddonDetails.
 */
type GetAddonDetailsResponse = {
  addon: AddonDetails;
  limits: ListLimitsReturned;
}

/**
 * Represents the details of an addon.
 */
type AddonDetails = {
  addonid: string;
  author: string;
  broken: boolean | string | null;
  dependencies: Dependency[];
  deprecated: boolean | string | null;
  description: string;
  disclaimer: string;
  enabled: boolean;
  extrainfo: { key: string; value: string }[];
  fanart: string;
  installed: boolean;
  name: string;
  path: string;
  rating: number;
  summary: string;
  thumbnail: string;
  type: AddonType;
  version: string;
}

/**
 * Represents a dependency of an addon.
 */
type Dependency = {
  addonid: string;
  optional: boolean;
  version: string;
}

/**
 * Represents the limits returned.
 */
type ListLimitsReturned = {
  end: number;
  start: number;
  total: number;
}

/**
 * Represents the parameters for GetAddons.
 */
type GetAddonsParams = {
  type?: AddonType;
  content?: "unknown" | "video" | "audio" | "image" | "executable";
  enabled?: EnabledOption;
  properties?: AddonProperty[];
  limits?: ListLimits;
  installed?: boolean | "all";
}

/**
 * Represents the limits for GetAddons.
 */
type ListLimits = {
  end?: number;
  start?: number;
}

/**
 * Represents the response for GetAddons.
 */
type GetAddonsResponse = {
  addons: AddonDetails[];
  limits: ListLimitsReturned;
}

/**
 * Represents the parameters for SetAddonEnabled.
 */
type SetAddonEnabledParams = {
  addonid: string;
  enabled: GlobalToggle;
}
