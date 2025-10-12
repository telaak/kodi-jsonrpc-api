import { ListLimitsReturned } from './ListLimitsReturned';
import { AudioDetailsRole } from './AudioDetailsRole';

export interface AudioLibraryGetRolesResponse {
  limits: ListLimitsReturned;
  roles: AudioDetailsRole[];
}