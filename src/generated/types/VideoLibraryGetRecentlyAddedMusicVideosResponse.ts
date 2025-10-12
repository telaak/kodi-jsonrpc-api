import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsMusicVideo } from './VideoDetailsMusicVideo';

export interface VideoLibraryGetRecentlyAddedMusicVideosResponse {
  limits: ListLimitsReturned;
  musicvideos?: VideoDetailsMusicVideo[];
}