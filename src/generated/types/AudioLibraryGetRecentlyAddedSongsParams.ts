import { ListAmount } from './ListAmount';
import { AudioFieldsSong } from './AudioFieldsSong';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface AudioLibraryGetRecentlyAddedSongsParams {
  albumlimit?: ListAmount;
  properties?: AudioFieldsSong;
  limits?: ListLimits;
  sort?: ListSort;
}