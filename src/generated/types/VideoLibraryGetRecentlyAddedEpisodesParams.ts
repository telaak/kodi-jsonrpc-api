import { VideoFieldsEpisode } from './VideoFieldsEpisode';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface VideoLibraryGetRecentlyAddedEpisodesParams {
  properties?: VideoFieldsEpisode;
  limits?: ListLimits;
  sort?: ListSort;
}