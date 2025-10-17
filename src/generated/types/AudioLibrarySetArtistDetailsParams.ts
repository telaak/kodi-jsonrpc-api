import { LibraryId } from './LibraryId';
import { OptionalString } from './OptionalString';
import { ArrayString } from './ArrayString';
import { MediaArtworkSet } from './MediaArtworkSet';

export interface AudioLibrarySetArtistDetailsParams {
  artistid: LibraryId;
  artist?: OptionalString;
  instrument?: null | ArrayString;
  style?: null | ArrayString;
  mood?: null | ArrayString;
  born?: OptionalString;
  formed?: OptionalString;
  description?: OptionalString;
  genre?: null | ArrayString;
  died?: OptionalString;
  disbanded?: OptionalString;
  yearsactive?: null | ArrayString;
  musicbrainzartistid?: OptionalString;
  sortname?: OptionalString;
  type?: OptionalString;
  gender?: OptionalString;
  disambiguation?: OptionalString;
  art?: null | MediaArtworkSet;
}