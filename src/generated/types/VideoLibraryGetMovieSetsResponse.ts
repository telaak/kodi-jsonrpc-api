import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsMovieSet } from './VideoDetailsMovieSet';

export interface VideoLibraryGetMovieSetsResponse {
  limits: ListLimitsReturned;
  sets?: VideoDetailsMovieSet[];
}