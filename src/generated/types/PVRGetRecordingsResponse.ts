import { ListLimitsReturned } from './ListLimitsReturned';
import { PVRDetailsRecording } from './PVRDetailsRecording';

export interface PVRGetRecordingsResponse {
  limits: ListLimitsReturned;
  recordings: PVRDetailsRecording[];
}