import { LibraryId } from './LibraryId';
import { PVRFieldsRecording } from './PVRFieldsRecording';

export interface PVRGetRecordingDetailsParams {
  recordingid: LibraryId;
  properties?: PVRFieldsRecording;
}