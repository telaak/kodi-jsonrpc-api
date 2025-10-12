import { VideoFieldsMovie } from './VideoFieldsMovie';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface VideoLibraryGetRecentlyAddedMoviesParams {
  properties?: VideoFieldsMovie;
  limits?: ListLimits;
  sort?: ListSort;
}