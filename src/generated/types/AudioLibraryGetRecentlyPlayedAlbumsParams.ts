import { AudioFieldsAlbum } from './AudioFieldsAlbum';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface AudioLibraryGetRecentlyPlayedAlbumsParams {
  properties?: AudioFieldsAlbum;
  limits?: ListLimits;
  sort?: ListSort;
}