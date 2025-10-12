import { ListLimitsReturned } from './ListLimitsReturned';
import { AudioDetailsSong } from './AudioDetailsSong';

export interface AudioLibraryGetRecentlyPlayedSongsResponse {
  limits: ListLimitsReturned;
  songs?: AudioDetailsSong[];
}