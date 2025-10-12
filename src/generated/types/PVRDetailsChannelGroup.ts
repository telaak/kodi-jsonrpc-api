import { ItemDetailsBase } from './ItemDetailsBase';
import { LibraryId } from './LibraryId';
import { PVRChannelType } from './PVRChannelType';

export interface PVRDetailsChannelGroup extends ItemDetailsBase {
  channelgroupid: LibraryId;
  channeltype: PVRChannelType;
}