import { AudioDetailsAlbum } from './AudioDetailsAlbum';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface AudioLibraryGetRecentlyPlayedAlbumsResponse {
  albums?: AudioDetailsAlbum[];
  limits: ListLimitsReturned;
}