import { ItemDetailsBase } from './ItemDetailsBase';
import { PVRDetailsBroadcast } from './PVRDetailsBroadcast';
import { LibraryId } from './LibraryId';
import { PVRChannelType } from './PVRChannelType';

export interface PVRDetailsChannel extends ItemDetailsBase {
  broadcastnext?: PVRDetailsBroadcast;
  broadcastnow?: PVRDetailsBroadcast;
  channel?: string;
  channelid: LibraryId;
  channelnumber?: number;
  channeltype?: PVRChannelType;
  clientid?: LibraryId;
  hasarchive?: boolean;
  hidden?: boolean;
  icon?: string;
  isrecording?: boolean;
  lastplayed?: string;
  locked?: boolean;
  subchannelnumber?: number;
  thumbnail?: string;
  uniqueid: number;
}