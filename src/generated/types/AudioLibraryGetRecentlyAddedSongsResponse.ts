import { ListLimitsReturned } from './ListLimitsReturned';
import { AudioDetailsSong } from './AudioDetailsSong';

export interface AudioLibraryGetRecentlyAddedSongsResponse {
  limits: ListLimitsReturned;
  songs?: AudioDetailsSong[];
}