import { VideoDetailsBase } from './VideoDetailsBase';
import { LibraryId } from './LibraryId';

export interface VideoDetailsSeason extends VideoDetailsBase {
  episode?: number;
  season: number;
  seasonid: LibraryId;
  showtitle?: string;
  title?: string;
  tvshowid?: LibraryId;
  userrating?: number;
  watchedepisodes?: number;
}