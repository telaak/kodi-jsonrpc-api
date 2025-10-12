import { ItemDetailsBase } from './ItemDetailsBase';
import { LibraryId } from './LibraryId';

export interface AudioDetailsRole extends ItemDetailsBase {
  roleid: LibraryId;
  title?: string;
}