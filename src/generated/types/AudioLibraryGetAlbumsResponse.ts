import { AudioDetailsAlbum } from './AudioDetailsAlbum';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface AudioLibraryGetAlbumsResponse {
  albums?: AudioDetailsAlbum[];
  limits: ListLimitsReturned;
}