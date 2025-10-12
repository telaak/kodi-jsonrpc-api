import { VideoDetailsEpisode } from './VideoDetailsEpisode';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface VideoLibraryGetRecentlyAddedEpisodesResponse {
  episodes?: VideoDetailsEpisode[];
  limits: ListLimitsReturned;
}