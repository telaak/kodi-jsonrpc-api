import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsTVShow } from './VideoDetailsTVShow';

export interface VideoLibraryGetTVShowsResponse {
  limits: ListLimitsReturned;
  tvshows?: VideoDetailsTVShow[];
}