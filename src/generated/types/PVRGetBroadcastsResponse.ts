import { PVRDetailsBroadcast } from './PVRDetailsBroadcast';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface PVRGetBroadcastsResponse {
  broadcasts: PVRDetailsBroadcast[];
  limits: ListLimitsReturned;
}