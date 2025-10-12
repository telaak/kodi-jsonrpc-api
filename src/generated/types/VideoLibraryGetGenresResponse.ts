import { LibraryDetailsGenre } from './LibraryDetailsGenre';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface VideoLibraryGetGenresResponse {
  genres: LibraryDetailsGenre[];
  limits: ListLimitsReturned;
}