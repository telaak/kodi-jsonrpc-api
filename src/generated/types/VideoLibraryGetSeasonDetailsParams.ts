import { LibraryId } from './LibraryId';
import { VideoFieldsSeason } from './VideoFieldsSeason';

export interface VideoLibraryGetSeasonDetailsParams {
  seasonid: LibraryId;
  properties?: VideoFieldsSeason;
}