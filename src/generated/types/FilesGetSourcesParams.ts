import { FilesMedia } from './FilesMedia';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface FilesGetSourcesParams {
  media: FilesMedia;
  limits?: ListLimits;
  sort?: ListSort;
}