import { AddonDetails } from './AddonDetails';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface AddonsGetAddonDetailsResponse {
  addon: AddonDetails;
  limits: ListLimitsReturned;
}