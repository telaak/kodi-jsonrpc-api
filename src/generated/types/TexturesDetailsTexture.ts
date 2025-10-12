import { TexturesDetailsSize } from './TexturesDetailsSize';
import { LibraryId } from './LibraryId';

export interface TexturesDetailsTexture {
  cachedurl?: string;
  imagehash?: string;
  lasthashcheck?: string;
  sizes?: TexturesDetailsSize[];
  textureid?: LibraryId;
  url?: string;
}