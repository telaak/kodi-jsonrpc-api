import { PlaylistId } from './PlaylistId';
import { ListFieldsAll } from './ListFieldsAll';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface PlaylistGetItemsParams {
  playlistid: PlaylistId;
  properties?: ListFieldsAll;
  limits?: ListLimits;
  sort?: ListSort;
}