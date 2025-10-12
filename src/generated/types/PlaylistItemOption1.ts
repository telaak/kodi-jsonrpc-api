import { FilesMedia } from './FilesMedia';

export interface PlaylistItemOption1 {
  directory: string;
  media?: FilesMedia;
  recursive?: boolean;
}