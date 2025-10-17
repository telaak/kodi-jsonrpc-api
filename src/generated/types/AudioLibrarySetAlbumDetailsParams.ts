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
  artist?: null | ArrayString;
  description?: OptionalString;
  genre?: null | ArrayString;
  theme?: null | ArrayString;
  mood?: null | ArrayString;
  style?: null | ArrayString;
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
  musicbrainzalbumartistid?: null | ArrayString;
  art?: null | MediaArtworkSet;
  isboxset?: OptionalBoolean;
  releasedate?: OptionalString;
  originaldate?: OptionalString;
}