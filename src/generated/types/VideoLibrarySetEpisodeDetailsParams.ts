import { LibraryId } from './LibraryId';
import { OptionalString } from './OptionalString';
import { OptionalInteger } from './OptionalInteger';
import { ArrayString } from './ArrayString';
import { OptionalNumber } from './OptionalNumber';
import { MediaArtworkSet } from './MediaArtworkSet';
import { VideoResume } from './VideoResume';
import { VideoRatingsSet } from './VideoRatingsSet';
import { MediaUniqueIDSet } from './MediaUniqueIDSet';

export interface VideoLibrarySetEpisodeDetailsParams {
  episodeid: LibraryId;
  title?: OptionalString;
  playcount?: OptionalInteger;
  runtime?: OptionalInteger;
  director?: any | ArrayString;
  plot?: OptionalString;
  rating?: OptionalNumber;
  votes?: OptionalString;
  lastplayed?: OptionalString;
  writer?: any | ArrayString;
  firstaired?: OptionalString;
  productioncode?: OptionalString;
  season?: OptionalInteger;
  episode?: OptionalInteger;
  originaltitle?: OptionalString;
  thumbnail?: OptionalString;
  fanart?: OptionalString;
  art?: any | MediaArtworkSet;
  resume?: any | VideoResume;
  userrating?: OptionalInteger;
  ratings?: VideoRatingsSet;
  dateadded?: OptionalString;
  uniqueid?: any | MediaUniqueIDSet;
}