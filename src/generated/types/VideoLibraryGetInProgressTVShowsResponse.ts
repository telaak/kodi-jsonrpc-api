import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsTVShow } from './VideoDetailsTVShow';

export interface VideoLibraryGetInProgressTVShowsResponse {
  limits: ListLimitsReturned;
  tvshows?: VideoDetailsTVShow[];
}