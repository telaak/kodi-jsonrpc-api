import { LibraryId } from './LibraryId';

export interface VideoLibraryRefreshTVShowParams {
  tvshowid: LibraryId;
  ignorenfo?: boolean;
  refreshepisodes?: boolean;
  title?: string;
}