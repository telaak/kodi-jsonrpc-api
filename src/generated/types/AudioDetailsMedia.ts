import { AudioDetailsBase } from './AudioDetailsBase';
import { ArrayString } from './ArrayString';
import { ArrayInteger } from './ArrayInteger';

export interface AudioDetailsMedia extends AudioDetailsBase {
  artist?: ArrayString;
  artistid?: ArrayInteger;
  displayartist?: string;
  musicbrainzalbumartistid?: ArrayString;
  originaldate?: string;
  rating?: number;
  releasedate?: string;
  sortartist?: string;
  title?: string;
  userrating?: number;
  votes?: number;
  year?: number;
}