import { LibraryId } from './LibraryId';

export interface VideoLibraryRefreshMovieParams {
  movieid: LibraryId;
  ignorenfo?: boolean;
  title?: string;
}