import { AudioDetailsAlbum } from './AudioDetailsAlbum';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface AudioLibraryGetRecentlyAddedAlbumsResponse {
  albums?: AudioDetailsAlbum[];
  limits: ListLimitsReturned;
}