import { VideoFieldsTVShow } from './VideoFieldsTVShow';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface VideoLibraryGetInProgressTVShowsParams {
  properties?: VideoFieldsTVShow;
  limits?: ListLimits;
  sort?: ListSort;
}