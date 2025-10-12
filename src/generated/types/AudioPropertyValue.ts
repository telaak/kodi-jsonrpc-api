import { LibraryId } from './LibraryId';

export interface AudioPropertyValue {
  albumslastadded?: string;
  albumsmodified?: string;
  artistlinksupdated?: string;
  artistslastadded?: string;
  artistsmodified?: string;
  genreslastadded?: string;
  librarylastcleaned?: string;
  librarylastupdated?: string;
  missingartistid?: LibraryId;
  songslastadded?: string;
  songsmodified?: string;
}