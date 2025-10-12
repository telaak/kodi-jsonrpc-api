import { LibraryId } from './LibraryId';
import { VideoFieldsMovieSet } from './VideoFieldsMovieSet';
import { ListLimits } from './ListLimits';
import { VideoFieldsMovie } from './VideoFieldsMovie';
import { ListSort } from './ListSort';
import { VideoLibraryGetMovieSetDetailsParamsMovies } from './VideoLibraryGetMovieSetDetailsParamsMovies';

export interface VideoLibraryGetMovieSetDetailsParams {
  setid: LibraryId;
  properties?: VideoFieldsMovieSet;
  movies?: VideoLibraryGetMovieSetDetailsParamsMovies;
}