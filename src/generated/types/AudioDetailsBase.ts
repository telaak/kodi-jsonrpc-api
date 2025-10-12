import { MediaDetailsBase } from './MediaDetailsBase';
import { MediaArtwork } from './MediaArtwork';
import { ArrayString } from './ArrayString';

export interface AudioDetailsBase extends MediaDetailsBase {
  art?: MediaArtwork;
  dateadded?: string;
  genre?: ArrayString;
}