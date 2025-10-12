import { PVRDetailsChannelGroup } from './PVRDetailsChannelGroup';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface PVRGetChannelGroupsResponse {
  channelgroups: PVRDetailsChannelGroup[];
  limits: ListLimitsReturned;
}