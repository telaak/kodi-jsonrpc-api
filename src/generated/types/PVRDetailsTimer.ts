import { ItemDetailsBase } from './ItemDetailsBase';
import { LibraryId } from './LibraryId';
import { PVRTimerState } from './PVRTimerState';
import { GlobalWeekday } from './GlobalWeekday';

export interface PVRDetailsTimer extends ItemDetailsBase {
  broadcastid?: LibraryId;
  channelid?: LibraryId;
  clientid?: LibraryId;
  directory?: string;
  endanytime?: boolean;
  endmargin?: number;
  endtime?: string;
  epgsearchstring?: string;
  epguid?: number;
  file?: string;
  firstday?: string;
  fulltextepgsearch?: boolean;
  ismanual?: boolean;
  isradio?: boolean;
  isreadonly?: boolean;
  isreminder?: boolean;
  istimerrule?: boolean;
  lifetime?: number;
  maxrecordings?: number;
  preventduplicateepisodes?: number;
  priority?: number;
  recordinggroup?: number;
  runtime?: number;
  startanytime?: boolean;
  startmargin?: number;
  starttime?: string;
  state?: PVRTimerState;
  summary?: string;
  timerid: LibraryId;
  title?: string;
  weekdays?: GlobalWeekday[];
}