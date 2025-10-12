import { ItemDetailsBase } from './ItemDetailsBase';
import { LibraryId } from './LibraryId';
import { ArrayInteger } from './ArrayInteger';

export interface LibraryDetailsGenre extends ItemDetailsBase {
  genreid: LibraryId;
  sourceid?: ArrayInteger;
  thumbnail?: string;
  title?: string;
}