import { LibraryId } from './LibraryId';
import { OptionalString } from './OptionalString';
import { ArrayString } from './ArrayString';
import { MediaArtworkSet } from './MediaArtworkSet';

export interface AudioLibrarySetArtistDetailsParams {
  artistid: LibraryId;
  artist?: OptionalString;
  instrument?: any | ArrayString;
  style?: any | ArrayString;
  mood?: any | ArrayString;
  born?: OptionalString;
  formed?: OptionalString;
  description?: OptionalString;
  genre?: any | ArrayString;
  died?: OptionalString;
  disbanded?: OptionalString;
  yearsactive?: any | ArrayString;
  musicbrainzartistid?: OptionalString;
  sortname?: OptionalString;
  type?: OptionalString;
  gender?: OptionalString;
  disambiguation?: OptionalString;
  art?: any | MediaArtworkSet;
}