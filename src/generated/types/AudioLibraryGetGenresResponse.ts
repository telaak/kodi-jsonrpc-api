import { LibraryDetailsGenre } from './LibraryDetailsGenre';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface AudioLibraryGetGenresResponse {
  genres: LibraryDetailsGenre[];
  limits: ListLimitsReturned;
}