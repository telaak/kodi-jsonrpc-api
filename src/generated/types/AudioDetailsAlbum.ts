import { AudioDetailsMedia } from './AudioDetailsMedia';
import { LibraryId } from './LibraryId';
import { ArrayString } from './ArrayString';
import { AudioAlbumReleaseType } from './AudioAlbumReleaseType';
import { AudioDetailsGenres } from './AudioDetailsGenres';
import { ArrayInteger } from './ArrayInteger';

export interface AudioDetailsAlbum extends AudioDetailsMedia {
  albumduration?: number;
  albumid: LibraryId;
  albumlabel?: string;
  albumstatus?: string;
  compilation?: boolean;
  description?: string;
  isboxset?: boolean;
  lastplayed?: string;
  mood?: ArrayString;
  musicbrainzalbumid?: string;
  musicbrainzreleasegroupid?: string;
  playcount?: number;
  releasetype?: AudioAlbumReleaseType;
  songgenres?: AudioDetailsGenres;
  sourceid?: ArrayInteger;
  style?: ArrayString;
  theme?: ArrayString;
  totaldiscs?: number;
  type?: string;
}