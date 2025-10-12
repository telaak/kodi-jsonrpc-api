import { LibraryId } from './LibraryId';
import { AudioFieldsArtist } from './AudioFieldsArtist';

export interface AudioLibraryGetArtistDetailsParams {
  artistid: LibraryId;
  properties?: AudioFieldsArtist;
}