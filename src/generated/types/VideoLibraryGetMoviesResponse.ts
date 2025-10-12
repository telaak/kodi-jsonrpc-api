import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsMovie } from './VideoDetailsMovie';

export interface VideoLibraryGetMoviesResponse {
  limits: ListLimitsReturned;
  movies?: VideoDetailsMovie[];
}