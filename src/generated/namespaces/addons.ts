import { ISendMessage } from '../../';
import { AddonsExecuteAddonParams } from '../types/AddonsExecuteAddonParams';
import { AddonFields } from '../types/AddonFields';
import { AddonDetails } from '../types/AddonDetails';
import { ListLimitsReturned } from '../types/ListLimitsReturned';
import { AddonsGetAddonDetailsParams } from '../types/AddonsGetAddonDetailsParams';
import { AddonsGetAddonDetailsResponse } from '../types/AddonsGetAddonDetailsResponse';
import { AddonTypes } from '../types/AddonTypes';
import { AddonContent } from '../types/AddonContent';
import { ListLimits } from '../types/ListLimits';
import { AddonsGetAddonsParams } from '../types/AddonsGetAddonsParams';
import { AddonsGetAddonsResponse } from '../types/AddonsGetAddonsResponse';
import { GlobalToggle } from '../types/GlobalToggle';
import { AddonsSetAddonEnabledParams } from '../types/AddonsSetAddonEnabledParams';


export class KodiAddonsNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Executes the given addon with the given parameters (if possible)
   * @param addonid string
   * @param params AddonsExecuteAddonParamsParamsOption0 | string[] | string (optional)
   * @param wait boolean (optional)
   * @returns string
   */
  async ExecuteAddon(params: AddonsExecuteAddonParams): Promise<string> {
    return this.sendMessage<string>("Addons.ExecuteAddon", params);
  }

  /**
   * Gets the details of a specific addon
   * @param addonid string
   * @param properties AddonFields (optional)
   * @returns AddonsGetAddonDetailsResponse
   */
  async GetAddonDetails(params: AddonsGetAddonDetailsParams): Promise<AddonsGetAddonDetailsResponse> {
    return this.sendMessage<AddonsGetAddonDetailsResponse>("Addons.GetAddonDetails", params);
  }

  /**
   * Gets all available addons
   * @param type AddonTypes (optional)
   * @param content AddonContent (optional)
   * @param enabled boolean | "all" (optional)
   * @param properties AddonFields (optional)
   * @param limits ListLimits (optional)
   * @param installed boolean | "all" (optional)
   * @returns AddonsGetAddonsResponse
   */
  async GetAddons(params: AddonsGetAddonsParams): Promise<AddonsGetAddonsResponse> {
    return this.sendMessage<AddonsGetAddonsResponse>("Addons.GetAddons", params);
  }

  /**
   * Enables/Disables a specific addon
   * @param addonid string
   * @param enabled GlobalToggle
   * @returns string
   */
  async SetAddonEnabled(params: AddonsSetAddonEnabledParams): Promise<string> {
    return this.sendMessage<string>("Addons.SetAddonEnabled", params);
  }

}