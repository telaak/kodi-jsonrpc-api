import { LibraryId } from './LibraryId';
import { OptionalString } from './OptionalString';
import { ArrayString } from './ArrayString';
import { OptionalInteger } from './OptionalInteger';
import { OptionalNumber } from './OptionalNumber';
import { MediaArtworkSet } from './MediaArtworkSet';

export interface AudioLibrarySetSongDetailsParams {
  songid: LibraryId;
  title?: OptionalString;
  artist?: any | ArrayString;
  genre?: any | ArrayString;
  year?: OptionalInteger;
  rating?: OptionalNumber;
  track?: OptionalInteger;
  disc?: OptionalInteger;
  duration?: OptionalInteger;
  comment?: OptionalString;
  musicbrainztrackid?: OptionalString;
  musicbrainzartistid?: OptionalString;
  playcount?: OptionalInteger;
  lastplayed?: OptionalString;
  userrating?: OptionalInteger;
  votes?: OptionalInteger;
  displayartist?: OptionalString;
  sortartist?: OptionalString;
  mood?: OptionalString;
  art?: any | MediaArtworkSet;
  disctitle?: OptionalString;
  releasedate?: OptionalString;
  originaldate?: OptionalString;
  bpm?: OptionalInteger;
  songvideourl?: OptionalString;
}