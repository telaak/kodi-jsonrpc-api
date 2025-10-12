import { PVRDetailsChannelGroup } from './PVRDetailsChannelGroup';
import { PVRDetailsChannel } from './PVRDetailsChannel';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface PVRDetailsChannelGroupExtended extends PVRDetailsChannelGroup {
  channels?: PVRDetailsChannel[];
  limits: ListLimitsReturned;
}