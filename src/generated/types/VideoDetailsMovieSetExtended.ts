import { VideoDetailsMovieSet } from './VideoDetailsMovieSet';
import { ListLimitsReturned } from './ListLimitsReturned';
import { VideoDetailsMovie } from './VideoDetailsMovie';

export interface VideoDetailsMovieSetExtended extends VideoDetailsMovieSet {
  limits: ListLimitsReturned;
  movies?: VideoDetailsMovie[];
}