import { PVRChannelType } from './PVRChannelType';
import { LibraryId } from './LibraryId';
import { NotificationsItemType } from './NotificationsItemType';

export interface NotificationsItemOption7 {
  channeltype: PVRChannelType;
  id: LibraryId;
  title: string;
  type: NotificationsItemType;
}