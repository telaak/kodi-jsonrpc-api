import { AudioDetailsArtist } from './AudioDetailsArtist';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface AudioLibraryGetArtistsResponse {
  artists?: AudioDetailsArtist[];
  limits: ListLimitsReturned;
}