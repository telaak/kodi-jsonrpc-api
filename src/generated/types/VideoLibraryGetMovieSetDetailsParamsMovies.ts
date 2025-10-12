import { ListLimits } from './ListLimits';
import { VideoFieldsMovie } from './VideoFieldsMovie';
import { ListSort } from './ListSort';

export interface VideoLibraryGetMovieSetDetailsParamsMovies {
  limits?: ListLimits;
  properties?: VideoFieldsMovie;
  sort?: ListSort;
}