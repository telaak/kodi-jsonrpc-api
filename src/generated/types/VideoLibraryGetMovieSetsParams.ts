import { VideoFieldsMovieSet } from './VideoFieldsMovieSet';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface VideoLibraryGetMovieSetsParams {
  properties?: VideoFieldsMovieSet;
  limits?: ListLimits;
  sort?: ListSort;
}