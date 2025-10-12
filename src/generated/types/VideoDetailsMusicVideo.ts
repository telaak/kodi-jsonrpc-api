import { VideoDetailsFile } from './VideoDetailsFile';
import { ArrayString } from './ArrayString';
import { LibraryId } from './LibraryId';
import { MediaUniqueID } from './MediaUniqueID';

export interface VideoDetailsMusicVideo extends VideoDetailsFile {
  album?: string;
  artist?: ArrayString;
  genre?: ArrayString;
  musicvideoid: LibraryId;
  premiered?: string;
  rating?: number;
  studio?: ArrayString;
  tag?: ArrayString;
  track?: number;
  uniqueid?: MediaUniqueID;
  userrating?: number;
  year?: number;
}