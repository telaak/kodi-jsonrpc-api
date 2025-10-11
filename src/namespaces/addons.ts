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
  GetAddonsParams,
  GetAddonsResponse,
  SetAddonEnabledParams,
  
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
  ): Promise<string> {
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
  // Overload: accept readonly tuple for properties to preserve literal types
  async GetAddonDetails<const P extends readonly AddonFields[]>(
    addonid: string,
    properties?: P
  ): Promise<{ addon: Pick<AddonDetails, P[number]> } & { limits: ListLimitsReturned }>;

  // Fallback
  async GetAddonDetails(addonid: string, properties?: AddonFields[]): Promise<AddonsGetAddonDetailsResponse>;

  async GetAddonDetails(addonid: string, properties?: AddonFields[]): Promise<any> {
    const paramsObj: any = { addonid };
    if (properties) paramsObj.properties = (properties as unknown) as string[];
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
  // Overload: properties as readonly tuple
  async GetAddons<const P extends readonly AddonFields[]>(
    type?: AddonType,
    content?: AddonContent,
    enabled?: boolean | "all",
    properties?: P,
    limits?: ListLimits,
    installed?: boolean | "all"
  ): Promise<{ addons: Pick<AddonDetails, P[number]>[]; limits: ListLimitsReturned }>;

  // Fallback
  async GetAddons(
    type: AddonType = "unknown",
    content: AddonContent = "unknown",
    enabled: boolean | "all" = "all",
    properties: AddonFields[] = [],
    limits?: ListLimits,
    installed: boolean | "all" = true
  ): Promise<GetAddonsResponse> {
    const paramsObj: any = {
      type,
      content,
      enabled,
      // cast readonly tuple (narrow) to string[] for runtime transport
      properties: (properties as unknown) as string[] | undefined,
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
  ): Promise<string> {
    const paramsObj: SetAddonEnabledParams = { addonid, enabled };
    return this.sendMessage("Addons.SetAddonEnabled", paramsObj);
  }
}
