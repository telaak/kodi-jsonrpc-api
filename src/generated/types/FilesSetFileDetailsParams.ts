import { FilesMedia } from './FilesMedia';
import { OptionalInteger } from './OptionalInteger';
import { OptionalString } from './OptionalString';
import { VideoResume } from './VideoResume';

export interface FilesSetFileDetailsParams {
  file: string;
  media: FilesMedia;
  playcount?: OptionalInteger;
  lastplayed?: OptionalString;
  resume?: any | VideoResume;
}