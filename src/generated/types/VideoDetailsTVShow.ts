import { VideoDetailsItem } from './VideoDetailsItem';
import { VideoCast } from './VideoCast';
import { ArrayString } from './ArrayString';
import { LibraryId } from './LibraryId';
import { MediaUniqueID } from './MediaUniqueID';

export interface VideoDetailsTVShow extends VideoDetailsItem {
  cast?: VideoCast;
  episode?: number;
  episodeguide?: string;
  genre?: ArrayString;
  imdbnumber?: string;
  mpaa?: string;
  originaltitle?: string;
  premiered?: string;
  rating?: number;
  ratings?: any;
  runtime?: number;
  season?: number;
  sorttitle?: string;
  status?: string;
  studio?: ArrayString;
  tag?: ArrayString;
  tvshowid: LibraryId;
  uniqueid?: MediaUniqueID;
  userrating?: number;
  votes?: string;
  watchedepisodes?: number;
  year?: number;
}