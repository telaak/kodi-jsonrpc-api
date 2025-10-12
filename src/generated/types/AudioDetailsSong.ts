import { AudioDetailsMedia } from './AudioDetailsMedia';
import { ArrayString } from './ArrayString';
import { ArrayInteger } from './ArrayInteger';
import { LibraryId } from './LibraryId';
import { AudioAlbumReleaseType } from './AudioAlbumReleaseType';
import { AudioContributors } from './AudioContributors';

export interface AudioDetailsSong extends AudioDetailsMedia {
  album?: string;
  albumartist?: ArrayString;
  albumartistid?: ArrayInteger;
  albumid?: LibraryId;
  albumreleasetype?: AudioAlbumReleaseType;
  bitrate?: any;
  bpm?: any;
  channels?: any;
  comment?: string;
  contributors?: AudioContributors;
  disc?: number;
  disctitle?: string;
  displaycomposer?: string;
  displayconductor?: string;
  displaylyricist?: string;
  displayorchestra?: string;
  duration?: number;
  file?: string;
  genreid?: ArrayInteger;
  lastplayed?: string;
  lyrics?: string;
  mood?: string;
  musicbrainzartistid?: ArrayString;
  musicbrainztrackid?: string;
  playcount?: number;
  samplerate?: any;
  songid: LibraryId;
  songvideourl?: string;
  sourceid?: ArrayInteger;
  track?: number;
}