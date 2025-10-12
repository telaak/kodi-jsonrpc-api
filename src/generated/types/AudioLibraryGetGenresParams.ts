import { LibraryFieldsGenre } from './LibraryFieldsGenre';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface AudioLibraryGetGenresParams {
  properties?: LibraryFieldsGenre;
  limits?: ListLimits;
  sort?: ListSort;
}