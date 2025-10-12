import { GlobalToggle } from './GlobalToggle';
import { LibraryId } from './LibraryId';

export interface PVRRecordParams {
  record?: GlobalToggle;
  channel?: "current" | LibraryId;
}