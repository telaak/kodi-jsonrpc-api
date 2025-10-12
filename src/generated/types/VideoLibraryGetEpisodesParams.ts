import { LibraryId } from './LibraryId';
import { VideoFieldsEpisode } from './VideoFieldsEpisode';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';
import { ListFilterEpisodes } from './ListFilterEpisodes';
import { VideoLibraryGetEpisodesParamsFilterOption0 } from './VideoLibraryGetEpisodesParamsFilterOption0';
import { VideoLibraryGetEpisodesParamsFilterOption1 } from './VideoLibraryGetEpisodesParamsFilterOption1';
import { VideoLibraryGetEpisodesParamsFilterOption2 } from './VideoLibraryGetEpisodesParamsFilterOption2';
import { VideoLibraryGetEpisodesParamsFilterOption3 } from './VideoLibraryGetEpisodesParamsFilterOption3';
import { VideoLibraryGetEpisodesParamsFilterOption4 } from './VideoLibraryGetEpisodesParamsFilterOption4';

export interface VideoLibraryGetEpisodesParams {
  tvshowid?: LibraryId;
  season?: number;
  properties?: VideoFieldsEpisode;
  limits?: ListLimits;
  sort?: ListSort;
  filter?: VideoLibraryGetEpisodesParamsFilterOption0 | VideoLibraryGetEpisodesParamsFilterOption1 | VideoLibraryGetEpisodesParamsFilterOption2 | VideoLibraryGetEpisodesParamsFilterOption3 | VideoLibraryGetEpisodesParamsFilterOption4 | ListFilterEpisodes;
}