import { LibraryFieldsTag } from './LibraryFieldsTag';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface VideoLibraryGetTagsParams {
  type: "movie" | "tvshow" | "musicvideo";
  properties?: LibraryFieldsTag;
  limits?: ListLimits;
  sort?: ListSort;
}