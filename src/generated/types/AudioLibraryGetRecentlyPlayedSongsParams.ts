import { AudioFieldsSong } from './AudioFieldsSong';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface AudioLibraryGetRecentlyPlayedSongsParams {
  properties?: AudioFieldsSong;
  limits?: ListLimits;
  sort?: ListSort;
}