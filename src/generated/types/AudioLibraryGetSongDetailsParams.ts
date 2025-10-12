import { LibraryId } from './LibraryId';
import { AudioFieldsSong } from './AudioFieldsSong';

export interface AudioLibraryGetSongDetailsParams {
  songid: LibraryId;
  properties?: AudioFieldsSong;
}