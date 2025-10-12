import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsMovie } from './VideoDetailsMovie';

export interface VideoLibraryGetRecentlyAddedMoviesResponse {
  limits: ListLimitsReturned;
  movies?: VideoDetailsMovie[];
}