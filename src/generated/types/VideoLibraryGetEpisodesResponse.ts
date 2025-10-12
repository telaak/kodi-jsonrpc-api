import { VideoDetailsEpisode } from './VideoDetailsEpisode';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface VideoLibraryGetEpisodesResponse {
  episodes?: VideoDetailsEpisode[];
  limits: ListLimitsReturned;
}