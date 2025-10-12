import { FilesMedia } from './FilesMedia';
import { ListFieldsFiles } from './ListFieldsFiles';
import { ListSort } from './ListSort';
import { ListLimits } from './ListLimits';

export interface FilesGetDirectoryParams {
  directory: string;
  media?: FilesMedia;
  properties?: ListFieldsFiles;
  sort?: ListSort;
  limits?: ListLimits;
}