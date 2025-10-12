import { LibraryId } from './LibraryId';
import { PVRFieldsBroadcast } from './PVRFieldsBroadcast';

export interface PVRGetBroadcastDetailsParams {
  broadcastid: LibraryId;
  properties?: PVRFieldsBroadcast;
}