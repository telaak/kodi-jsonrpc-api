import { PVRChannelGroupId } from './PVRChannelGroupId';
import { ListLimits } from './ListLimits';
import { PVRFieldsChannel } from './PVRFieldsChannel';
import { PVRGetChannelGroupDetailsParamsChannels } from './PVRGetChannelGroupDetailsParamsChannels';

export interface PVRGetChannelGroupDetailsParams {
  channelgroupid: PVRChannelGroupId;
  channels?: PVRGetChannelGroupDetailsParamsChannels;
}