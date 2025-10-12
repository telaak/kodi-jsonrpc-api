import { LibraryId } from './LibraryId';
import { VideoFieldsTVShow } from './VideoFieldsTVShow';

export interface VideoLibraryGetTVShowDetailsParams {
  tvshowid: LibraryId;
  properties?: VideoFieldsTVShow;
}