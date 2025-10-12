import { OptionalBoolean } from './OptionalBoolean';
import { AudioFieldsArtist } from './AudioFieldsArtist';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';
import { LibraryId } from './LibraryId';
import { ListFilterArtists } from './ListFilterArtists';
import { AudioLibraryGetArtistsParamsFilterOption0 } from './AudioLibraryGetArtistsParamsFilterOption0';
import { AudioLibraryGetArtistsParamsFilterOption1 } from './AudioLibraryGetArtistsParamsFilterOption1';
import { AudioLibraryGetArtistsParamsFilterOption2 } from './AudioLibraryGetArtistsParamsFilterOption2';
import { AudioLibraryGetArtistsParamsFilterOption3 } from './AudioLibraryGetArtistsParamsFilterOption3';
import { AudioLibraryGetArtistsParamsFilterOption4 } from './AudioLibraryGetArtistsParamsFilterOption4';
import { AudioLibraryGetArtistsParamsFilterOption5 } from './AudioLibraryGetArtistsParamsFilterOption5';
import { AudioLibraryGetArtistsParamsFilterOption6 } from './AudioLibraryGetArtistsParamsFilterOption6';
import { AudioLibraryGetArtistsParamsFilterOption7 } from './AudioLibraryGetArtistsParamsFilterOption7';
import { AudioLibraryGetArtistsParamsFilterOption8 } from './AudioLibraryGetArtistsParamsFilterOption8';
import { AudioLibraryGetArtistsParamsFilterOption9 } from './AudioLibraryGetArtistsParamsFilterOption9';
import { AudioLibraryGetArtistsParamsFilterOption10 } from './AudioLibraryGetArtistsParamsFilterOption10';
import { AudioLibraryGetArtistsParamsFilterOption11 } from './AudioLibraryGetArtistsParamsFilterOption11';
import { AudioLibraryGetArtistsParamsFilterOption12 } from './AudioLibraryGetArtistsParamsFilterOption12';
import { AudioLibraryGetArtistsParamsFilterOption13 } from './AudioLibraryGetArtistsParamsFilterOption13';
import { AudioLibraryGetArtistsParamsFilterOption14 } from './AudioLibraryGetArtistsParamsFilterOption14';

export interface AudioLibraryGetArtistsParams {
  albumartistsonly?: OptionalBoolean;
  properties?: AudioFieldsArtist;
  limits?: ListLimits;
  sort?: ListSort;
  filter?: AudioLibraryGetArtistsParamsFilterOption0 | AudioLibraryGetArtistsParamsFilterOption1 | AudioLibraryGetArtistsParamsFilterOption2 | AudioLibraryGetArtistsParamsFilterOption3 | AudioLibraryGetArtistsParamsFilterOption4 | AudioLibraryGetArtistsParamsFilterOption5 | AudioLibraryGetArtistsParamsFilterOption6 | AudioLibraryGetArtistsParamsFilterOption7 | AudioLibraryGetArtistsParamsFilterOption8 | AudioLibraryGetArtistsParamsFilterOption9 | AudioLibraryGetArtistsParamsFilterOption10 | AudioLibraryGetArtistsParamsFilterOption11 | AudioLibraryGetArtistsParamsFilterOption12 | AudioLibraryGetArtistsParamsFilterOption13 | AudioLibraryGetArtistsParamsFilterOption14 | ListFilterArtists;
  allroles?: boolean;
}