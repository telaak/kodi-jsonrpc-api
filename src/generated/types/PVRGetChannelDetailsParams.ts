import { LibraryId } from './LibraryId';
import { PVRFieldsChannel } from './PVRFieldsChannel';

export interface PVRGetChannelDetailsParams {
  channelid: LibraryId;
  properties?: PVRFieldsChannel;
}