import { PVRFieldsRecording } from './PVRFieldsRecording';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface PVRGetRecordingsParams {
  properties?: PVRFieldsRecording;
  limits?: ListLimits;
  sort?: ListSort;
}