import { LibraryId } from './LibraryId';
import { PVRFieldsBroadcast } from './PVRFieldsBroadcast';
import { ListLimits } from './ListLimits';

export interface PVRGetBroadcastsParams {
  channelid: LibraryId;
  properties?: PVRFieldsBroadcast;
  limits?: ListLimits;
}