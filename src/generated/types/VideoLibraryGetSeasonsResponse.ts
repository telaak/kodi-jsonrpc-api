import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsSeason } from './VideoDetailsSeason';

export interface VideoLibraryGetSeasonsResponse {
  limits: ListLimitsReturned;
  seasons?: VideoDetailsSeason[];
}