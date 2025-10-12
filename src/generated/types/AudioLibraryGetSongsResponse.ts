import { ListLimitsReturned } from './ListLimitsReturned';
import { AudioDetailsSong } from './AudioDetailsSong';

export interface AudioLibraryGetSongsResponse {
  limits: ListLimitsReturned;
  songs?: AudioDetailsSong[];
}