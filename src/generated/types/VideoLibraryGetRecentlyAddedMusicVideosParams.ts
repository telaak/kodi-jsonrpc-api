import { VideoFieldsMusicVideo } from './VideoFieldsMusicVideo';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface VideoLibraryGetRecentlyAddedMusicVideosParams {
  properties?: VideoFieldsMusicVideo;
  limits?: ListLimits;
  sort?: ListSort;
}