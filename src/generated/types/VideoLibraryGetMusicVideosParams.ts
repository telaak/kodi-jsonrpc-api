import { VideoFieldsMusicVideo } from './VideoFieldsMusicVideo';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';
import { LibraryId } from './LibraryId';
import { ListFilterMusicVideos } from './ListFilterMusicVideos';
import { VideoLibraryGetMusicVideosParamsFilterOption0 } from './VideoLibraryGetMusicVideosParamsFilterOption0';
import { VideoLibraryGetMusicVideosParamsFilterOption1 } from './VideoLibraryGetMusicVideosParamsFilterOption1';
import { VideoLibraryGetMusicVideosParamsFilterOption2 } from './VideoLibraryGetMusicVideosParamsFilterOption2';
import { VideoLibraryGetMusicVideosParamsFilterOption3 } from './VideoLibraryGetMusicVideosParamsFilterOption3';
import { VideoLibraryGetMusicVideosParamsFilterOption4 } from './VideoLibraryGetMusicVideosParamsFilterOption4';
import { VideoLibraryGetMusicVideosParamsFilterOption5 } from './VideoLibraryGetMusicVideosParamsFilterOption5';
import { VideoLibraryGetMusicVideosParamsFilterOption6 } from './VideoLibraryGetMusicVideosParamsFilterOption6';

export interface VideoLibraryGetMusicVideosParams {
  properties?: VideoFieldsMusicVideo;
  limits?: ListLimits;
  sort?: ListSort;
  filter?: VideoLibraryGetMusicVideosParamsFilterOption0 | VideoLibraryGetMusicVideosParamsFilterOption1 | VideoLibraryGetMusicVideosParamsFilterOption2 | VideoLibraryGetMusicVideosParamsFilterOption3 | VideoLibraryGetMusicVideosParamsFilterOption4 | VideoLibraryGetMusicVideosParamsFilterOption5 | VideoLibraryGetMusicVideosParamsFilterOption6 | ListFilterMusicVideos;
}