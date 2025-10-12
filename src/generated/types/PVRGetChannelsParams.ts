import { PVRChannelGroupId } from './PVRChannelGroupId';
import { PVRFieldsChannel } from './PVRFieldsChannel';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface PVRGetChannelsParams {
  channelgroupid: PVRChannelGroupId;
  properties?: PVRFieldsChannel;
  limits?: ListLimits;
  sort?: ListSort;
}