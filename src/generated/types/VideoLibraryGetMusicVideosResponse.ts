import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsMusicVideo } from './VideoDetailsMusicVideo';

export interface VideoLibraryGetMusicVideosResponse {
  limits: ListLimitsReturned;
  musicvideos?: VideoDetailsMusicVideo[];
}