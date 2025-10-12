import { LibraryFieldsGenre } from './LibraryFieldsGenre';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface VideoLibraryGetGenresParams {
  type: "movie" | "tvshow" | "musicvideo";
  properties?: LibraryFieldsGenre;
  limits?: ListLimits;
  sort?: ListSort;
}