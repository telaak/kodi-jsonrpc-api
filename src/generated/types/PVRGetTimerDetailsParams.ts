import { LibraryId } from './LibraryId';
import { PVRFieldsTimer } from './PVRFieldsTimer';

export interface PVRGetTimerDetailsParams {
  timerid: LibraryId;
  properties?: PVRFieldsTimer;
}