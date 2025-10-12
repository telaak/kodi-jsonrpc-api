import { ListLimitsReturned } from './ListLimitsReturned';
import { ProfilesDetailsProfile } from './ProfilesDetailsProfile';

export interface ProfilesGetProfilesResponse {
  limits: ListLimitsReturned;
  profiles: ProfilesDetailsProfile[];
}