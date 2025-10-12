import { VideoDetailsFile } from './VideoDetailsFile';
import { VideoCast } from './VideoCast';
import { ArrayString } from './ArrayString';
import { LibraryId } from './LibraryId';
import { MediaUniqueID } from './MediaUniqueID';

export interface VideoDetailsMovie extends VideoDetailsFile {
  cast?: VideoCast;
  country?: ArrayString;
  genre?: ArrayString;
  imdbnumber?: string;
  movieid: LibraryId;
  mpaa?: string;
  originaltitle?: string;
  plotoutline?: string;
  premiered?: string;
  rating?: number;
  ratings?: any;
  set?: string;
  setid?: LibraryId;
  showlink?: ArrayString;
  sorttitle?: string;
  studio?: ArrayString;
  tag?: ArrayString;
  tagline?: string;
  top250?: number;
  trailer?: string;
  uniqueid?: MediaUniqueID;
  userrating?: number;
  votes?: string;
  writer?: ArrayString;
  year?: number;
}