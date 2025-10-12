import { AudioFieldsRole } from './AudioFieldsRole';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface AudioLibraryGetRolesParams {
  properties?: AudioFieldsRole;
  limits?: ListLimits;
  sort?: ListSort;
}