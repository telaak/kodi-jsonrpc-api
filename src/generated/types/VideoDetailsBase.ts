import { MediaDetailsBase } from './MediaDetailsBase';
import { MediaArtwork } from './MediaArtwork';

export interface VideoDetailsBase extends MediaDetailsBase {
  art?: MediaArtwork;
  playcount?: number;
}