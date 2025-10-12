import { AudioFieldsAlbum } from './AudioFieldsAlbum';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';
import { LibraryId } from './LibraryId';
import { ListFilterAlbums } from './ListFilterAlbums';
import { AudioLibraryGetAlbumsParamsFilterOption0 } from './AudioLibraryGetAlbumsParamsFilterOption0';
import { AudioLibraryGetAlbumsParamsFilterOption1 } from './AudioLibraryGetAlbumsParamsFilterOption1';
import { AudioLibraryGetAlbumsParamsFilterOption2 } from './AudioLibraryGetAlbumsParamsFilterOption2';
import { AudioLibraryGetAlbumsParamsFilterOption3 } from './AudioLibraryGetAlbumsParamsFilterOption3';
import { AudioLibraryGetAlbumsParamsFilterOption4 } from './AudioLibraryGetAlbumsParamsFilterOption4';
import { AudioLibraryGetAlbumsParamsFilterOption5 } from './AudioLibraryGetAlbumsParamsFilterOption5';
import { AudioLibraryGetAlbumsParamsFilterOption6 } from './AudioLibraryGetAlbumsParamsFilterOption6';
import { AudioLibraryGetAlbumsParamsFilterOption7 } from './AudioLibraryGetAlbumsParamsFilterOption7';

export interface AudioLibraryGetAlbumsParams {
  properties?: AudioFieldsAlbum;
  limits?: ListLimits;
  sort?: ListSort;
  filter?: AudioLibraryGetAlbumsParamsFilterOption0 | AudioLibraryGetAlbumsParamsFilterOption1 | AudioLibraryGetAlbumsParamsFilterOption2 | AudioLibraryGetAlbumsParamsFilterOption3 | AudioLibraryGetAlbumsParamsFilterOption4 | AudioLibraryGetAlbumsParamsFilterOption5 | AudioLibraryGetAlbumsParamsFilterOption6 | AudioLibraryGetAlbumsParamsFilterOption7 | ListFilterAlbums;
  includesingles?: boolean;
  allroles?: boolean;
}