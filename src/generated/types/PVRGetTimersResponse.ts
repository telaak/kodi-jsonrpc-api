import { ListLimitsReturned } from './ListLimitsReturned';
import { PVRDetailsTimer } from './PVRDetailsTimer';

export interface PVRGetTimersResponse {
  limits: ListLimitsReturned;
  timers: PVRDetailsTimer[];
}