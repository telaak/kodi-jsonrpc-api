import { ItemDetailsBase } from './ItemDetailsBase';
import { LibraryId } from './LibraryId';

export interface LibraryDetailsTag extends ItemDetailsBase {
  tagid: LibraryId;
  title?: string;
}