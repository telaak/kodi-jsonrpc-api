import { ProfilesFieldsProfile } from './ProfilesFieldsProfile';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface ProfilesGetProfilesParams {
  properties?: ProfilesFieldsProfile;
  limits?: ListLimits;
  sort?: ListSort;
}