// Methods Block
// These functions correspond to the Addons methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Addons" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiAddonsNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  AddonFields,
  AddonDetails,
  AddonType,
  AddonContent,
  ListLimitsReturned,
  ListLimits,
  GlobalToggle,
  AddonsGetAddonsResponse,
  AddonsGetAddonDetailsResponse,
  ExecuteAddonParams,
  ExecuteAddonResponse,
  GetAddonsParams,
  GetAddonsResponse,
  SetAddonEnabledParams,
  SetAddonEnabledResponse,
} from "../types/addons"; // Adjust the import path as necessary

export class KodiAddonsNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Executes the specified addon with optional parameters.
   *
   * @param addonid - The ID of the addon to execute.
   * @param params - Optional parameters for the addon.
   * @param wait - Whether to wait for the addon to finish execution (default is false).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ExecuteAddon(
    addonid: string,
    params?: string | { [key: string]: string } | string[],
    wait: boolean = false
  ): Promise<ExecuteAddonResponse> {
    const paramsObj: ExecuteAddonParams = { addonid, params, wait };
    return this.sendMessage("Addons.ExecuteAddon", paramsObj);
  }

  /**
   * Retrieves the details of a specific addon.
   *
   * @param addonid - The ID of the addon.
   * @param properties - The properties to retrieve.
   * @returns A promise resolving to the addon details and limits information.
   */
  async GetAddonDetails(
    addonid: string,
    properties: AddonFields[]
  ): Promise<AddonsGetAddonDetailsResponse> {
    const paramsObj = { addonid, properties };
    return this.sendMessage("Addons.GetAddonDetails", paramsObj);
  }

  /**
   * Retrieves a list of all available addons based on the specified criteria.
   *
   * @param type - The type of addons to retrieve (default is "unknown").
   * @param content - The content type for plugins and scripts (default is "unknown").
   * @param enabled - Filter addons by their enabled status ("all" to include all).
   * @param properties - The properties to retrieve for each addon.
   * @param limits - Pagination limits to apply.
   * @param installed - Filter addons by their installed status ("all" to include all).
   * @returns A promise resolving to a list of addons and limits information.
   */
  async GetAddons(
    type: AddonType = "unknown",
    content: AddonContent = "unknown",
    enabled: boolean | "all" = "all",
    properties: AddonFields[] = [],
    limits?: ListLimits,
    installed: boolean | "all" = false
  ): Promise<GetAddonsResponse> {
    const paramsObj: GetAddonsParams = {
      type,
      content,
      enabled,
      properties,
      limits,
      installed,
    };
    return this.sendMessage("Addons.GetAddons", paramsObj);
  }

  /**
   * Enables or disables a specific addon.
   *
   * @param addonid - The ID of the addon to enable or disable.
   * @param enabled - Whether to enable (true) or disable (false) the addon.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetAddonEnabled(
    addonid: string,
    enabled: GlobalToggle
  ): Promise<SetAddonEnabledResponse> {
    const paramsObj: SetAddonEnabledParams = { addonid, enabled };
    return this.sendMessage("Addons.SetAddonEnabled", paramsObj);
  }
}
