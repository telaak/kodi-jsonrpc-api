import { AddonDetails } from './AddonDetails';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface AddonsGetAddonsResponse {
  addons?: AddonDetails[];
  limits: ListLimitsReturned;
}