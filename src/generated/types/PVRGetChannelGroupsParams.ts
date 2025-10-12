import { PVRChannelType } from './PVRChannelType';
import { ListLimits } from './ListLimits';

export interface PVRGetChannelGroupsParams {
  channeltype: PVRChannelType;
  limits?: ListLimits;
}