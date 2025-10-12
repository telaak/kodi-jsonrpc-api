import { ItemDetailsBase } from './ItemDetailsBase';
import { ArrayString } from './ArrayString';
import { LibraryId } from './LibraryId';

export interface LibraryDetailsSource extends ItemDetailsBase {
  file: string;
  paths?: ArrayString;
  sourceid: LibraryId;
}