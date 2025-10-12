import { LibraryId } from './LibraryId';
import { OptionalString } from './OptionalString';
import { ArrayString } from './ArrayString';
import { OptionalNumber } from './OptionalNumber';
import { OptionalInteger } from './OptionalInteger';
import { MediaArtworkSet } from './MediaArtworkSet';
import { OptionalBoolean } from './OptionalBoolean';

export interface AudioLibrarySetAlbumDetailsParams {
  albumid: LibraryId;
  title?: OptionalString;
  artist?: any | ArrayString;
  description?: OptionalString;
  genre?: any | ArrayString;
  theme?: any | ArrayString;
  mood?: any | ArrayString;
  style?: any | ArrayString;
  type?: OptionalString;
  albumlabel?: OptionalString;
  rating?: OptionalNumber;
  year?: OptionalInteger;
  userrating?: OptionalInteger;
  votes?: OptionalInteger;
  musicbrainzalbumid?: OptionalString;
  musicbrainzreleasegroupid?: OptionalString;
  sortartist?: OptionalString;
  displayartist?: OptionalString;
  musicbrainzalbumartistid?: any | ArrayString;
  art?: any | MediaArtworkSet;
  isboxset?: OptionalBoolean;
  releasedate?: OptionalString;
  originaldate?: OptionalString;
}