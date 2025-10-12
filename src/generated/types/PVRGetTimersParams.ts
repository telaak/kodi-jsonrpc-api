import { PVRFieldsTimer } from './PVRFieldsTimer';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface PVRGetTimersParams {
  properties?: PVRFieldsTimer;
  limits?: ListLimits;
  sort?: ListSort;
}