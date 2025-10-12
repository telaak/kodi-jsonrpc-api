import { VideoFieldsMovie } from './VideoFieldsMovie';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';
import { LibraryId } from './LibraryId';
import { ListFilterMovies } from './ListFilterMovies';
import { VideoLibraryGetMoviesParamsFilterOption0 } from './VideoLibraryGetMoviesParamsFilterOption0';
import { VideoLibraryGetMoviesParamsFilterOption1 } from './VideoLibraryGetMoviesParamsFilterOption1';
import { VideoLibraryGetMoviesParamsFilterOption2 } from './VideoLibraryGetMoviesParamsFilterOption2';
import { VideoLibraryGetMoviesParamsFilterOption3 } from './VideoLibraryGetMoviesParamsFilterOption3';
import { VideoLibraryGetMoviesParamsFilterOption4 } from './VideoLibraryGetMoviesParamsFilterOption4';
import { VideoLibraryGetMoviesParamsFilterOption5 } from './VideoLibraryGetMoviesParamsFilterOption5';
import { VideoLibraryGetMoviesParamsFilterOption6 } from './VideoLibraryGetMoviesParamsFilterOption6';
import { VideoLibraryGetMoviesParamsFilterOption7 } from './VideoLibraryGetMoviesParamsFilterOption7';
import { VideoLibraryGetMoviesParamsFilterOption8 } from './VideoLibraryGetMoviesParamsFilterOption8';
import { VideoLibraryGetMoviesParamsFilterOption9 } from './VideoLibraryGetMoviesParamsFilterOption9';

export interface VideoLibraryGetMoviesParams {
  properties?: VideoFieldsMovie;
  limits?: ListLimits;
  sort?: ListSort;
  filter?: VideoLibraryGetMoviesParamsFilterOption0 | VideoLibraryGetMoviesParamsFilterOption1 | VideoLibraryGetMoviesParamsFilterOption2 | VideoLibraryGetMoviesParamsFilterOption3 | VideoLibraryGetMoviesParamsFilterOption4 | VideoLibraryGetMoviesParamsFilterOption5 | VideoLibraryGetMoviesParamsFilterOption6 | VideoLibraryGetMoviesParamsFilterOption7 | VideoLibraryGetMoviesParamsFilterOption8 | VideoLibraryGetMoviesParamsFilterOption9 | ListFilterMovies;
}