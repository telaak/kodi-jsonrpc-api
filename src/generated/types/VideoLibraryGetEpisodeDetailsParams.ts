import { LibraryId } from './LibraryId';
import { VideoFieldsEpisode } from './VideoFieldsEpisode';

export interface VideoLibraryGetEpisodeDetailsParams {
  episodeid: LibraryId;
  properties?: VideoFieldsEpisode;
}