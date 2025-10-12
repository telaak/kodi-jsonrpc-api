import { LibraryId } from './LibraryId';

export interface PVRAddTimerParams {
  broadcastid: LibraryId;
  timerrule?: boolean;
  reminder?: boolean;
}