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
   */
  async ExecuteAddon(params: AddonsExecuteAddonParams): Promise<string> {
    return this.sendMessage("Addons.ExecuteAddon", params);
  }

  /**
   * Gets the details of a specific addon
   */
  async GetAddonDetails(params: AddonsGetAddonDetailsParams): Promise<AddonsGetAddonDetailsResponse> {
    return this.sendMessage("Addons.GetAddonDetails", params);
  }

  /**
   * Gets all available addons
   */
  async GetAddons(params: AddonsGetAddonsParams): Promise<AddonsGetAddonsResponse> {
    return this.sendMessage("Addons.GetAddons", params);
  }

  /**
   * Enables/Disables a specific addon
   */
  async SetAddonEnabled(params: AddonsSetAddonEnabledParams): Promise<string> {
    return this.sendMessage("Addons.SetAddonEnabled", params);
  }

}