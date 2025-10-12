import { AudioFieldsSong } from './AudioFieldsSong';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';
import { LibraryId } from './LibraryId';
import { ListFilterSongs } from './ListFilterSongs';
import { AudioLibraryGetSongsParamsFilterOption0 } from './AudioLibraryGetSongsParamsFilterOption0';
import { AudioLibraryGetSongsParamsFilterOption1 } from './AudioLibraryGetSongsParamsFilterOption1';
import { AudioLibraryGetSongsParamsFilterOption2 } from './AudioLibraryGetSongsParamsFilterOption2';
import { AudioLibraryGetSongsParamsFilterOption3 } from './AudioLibraryGetSongsParamsFilterOption3';
import { AudioLibraryGetSongsParamsFilterOption4 } from './AudioLibraryGetSongsParamsFilterOption4';
import { AudioLibraryGetSongsParamsFilterOption5 } from './AudioLibraryGetSongsParamsFilterOption5';
import { AudioLibraryGetSongsParamsFilterOption6 } from './AudioLibraryGetSongsParamsFilterOption6';
import { AudioLibraryGetSongsParamsFilterOption7 } from './AudioLibraryGetSongsParamsFilterOption7';
import { AudioLibraryGetSongsParamsFilterOption8 } from './AudioLibraryGetSongsParamsFilterOption8';
import { AudioLibraryGetSongsParamsFilterOption9 } from './AudioLibraryGetSongsParamsFilterOption9';

export interface AudioLibraryGetSongsParams {
  properties?: AudioFieldsSong;
  limits?: ListLimits;
  sort?: ListSort;
  filter?: AudioLibraryGetSongsParamsFilterOption0 | AudioLibraryGetSongsParamsFilterOption1 | AudioLibraryGetSongsParamsFilterOption2 | AudioLibraryGetSongsParamsFilterOption3 | AudioLibraryGetSongsParamsFilterOption4 | AudioLibraryGetSongsParamsFilterOption5 | AudioLibraryGetSongsParamsFilterOption6 | AudioLibraryGetSongsParamsFilterOption7 | AudioLibraryGetSongsParamsFilterOption8 | AudioLibraryGetSongsParamsFilterOption9 | ListFilterSongs;
  includesingles?: boolean;
  allroles?: boolean;
  singlesonly?: boolean;
}