import { LibraryId } from './LibraryId';
import { AudioFieldsAlbum } from './AudioFieldsAlbum';

export interface AudioLibraryGetAlbumDetailsParams {
  albumid: LibraryId;
  properties?: AudioFieldsAlbum;
}