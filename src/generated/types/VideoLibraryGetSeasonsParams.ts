import { LibraryId } from './LibraryId';
import { VideoFieldsSeason } from './VideoFieldsSeason';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface VideoLibraryGetSeasonsParams {
  tvshowid?: LibraryId;
  properties?: VideoFieldsSeason;
  limits?: ListLimits;
  sort?: ListSort;
}