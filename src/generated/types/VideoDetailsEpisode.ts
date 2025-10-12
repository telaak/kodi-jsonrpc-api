import { VideoDetailsFile } from './VideoDetailsFile';
import { VideoCast } from './VideoCast';
import { LibraryId } from './LibraryId';
import { ArrayString } from './ArrayString';
import { MediaUniqueID } from './MediaUniqueID';

export interface VideoDetailsEpisode extends VideoDetailsFile {
  cast?: VideoCast;
  episode?: number;
  episodeid: LibraryId;
  firstaired?: string;
  genre?: ArrayString;
  originaltitle?: string;
  productioncode?: string;
  rating?: number;
  ratings?: any;
  season?: number;
  seasonid?: LibraryId;
  showtitle?: string;
  specialsortepisode?: number;
  specialsortseason?: number;
  studio?: ArrayString;
  tvshowid?: LibraryId;
  uniqueid?: MediaUniqueID;
  userrating?: number;
  votes?: string;
  writer?: ArrayString;
}