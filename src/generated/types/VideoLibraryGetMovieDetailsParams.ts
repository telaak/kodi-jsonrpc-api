import { LibraryId } from './LibraryId';
import { VideoFieldsMovie } from './VideoFieldsMovie';

export interface VideoLibraryGetMovieDetailsParams {
  movieid: LibraryId;
  properties?: VideoFieldsMovie;
}