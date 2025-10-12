import { FilesMedia } from './FilesMedia';
import { ListFieldsFiles } from './ListFieldsFiles';

export interface FilesGetFileDetailsParams {
  file: string;
  media?: FilesMedia;
  properties?: ListFieldsFiles;
}