import { PVRDetailsChannel } from './PVRDetailsChannel';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface PVRGetChannelsResponse {
  channels: PVRDetailsChannel[];
  limits: ListLimitsReturned;
}