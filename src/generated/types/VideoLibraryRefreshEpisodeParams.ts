import { LibraryId } from './LibraryId';

export interface VideoLibraryRefreshEpisodeParams {
  episodeid: LibraryId;
  ignorenfo?: boolean;
  title?: string;
}