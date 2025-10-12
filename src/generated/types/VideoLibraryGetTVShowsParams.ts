import { VideoFieldsTVShow } from './VideoFieldsTVShow';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';
import { LibraryId } from './LibraryId';
import { ListFilterTVShows } from './ListFilterTVShows';
import { VideoLibraryGetTVShowsParamsFilterOption0 } from './VideoLibraryGetTVShowsParamsFilterOption0';
import { VideoLibraryGetTVShowsParamsFilterOption1 } from './VideoLibraryGetTVShowsParamsFilterOption1';
import { VideoLibraryGetTVShowsParamsFilterOption2 } from './VideoLibraryGetTVShowsParamsFilterOption2';
import { VideoLibraryGetTVShowsParamsFilterOption3 } from './VideoLibraryGetTVShowsParamsFilterOption3';
import { VideoLibraryGetTVShowsParamsFilterOption4 } from './VideoLibraryGetTVShowsParamsFilterOption4';
import { VideoLibraryGetTVShowsParamsFilterOption5 } from './VideoLibraryGetTVShowsParamsFilterOption5';

export interface VideoLibraryGetTVShowsParams {
  properties?: VideoFieldsTVShow;
  limits?: ListLimits;
  sort?: ListSort;
  filter?: VideoLibraryGetTVShowsParamsFilterOption0 | VideoLibraryGetTVShowsParamsFilterOption1 | VideoLibraryGetTVShowsParamsFilterOption2 | VideoLibraryGetTVShowsParamsFilterOption3 | VideoLibraryGetTVShowsParamsFilterOption4 | VideoLibraryGetTVShowsParamsFilterOption5 | ListFilterTVShows;
}