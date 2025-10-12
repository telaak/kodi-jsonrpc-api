import { LibraryId } from './LibraryId';
import { OptionalString } from './OptionalString';
import { OptionalInteger } from './OptionalInteger';
import { ArrayString } from './ArrayString';
import { OptionalNumber } from './OptionalNumber';
import { MediaArtworkSet } from './MediaArtworkSet';
import { VideoRatingsSet } from './VideoRatingsSet';
import { MediaUniqueIDSet } from './MediaUniqueIDSet';

export interface VideoLibrarySetTVShowDetailsParams {
  tvshowid: LibraryId;
  title?: OptionalString;
  playcount?: OptionalInteger;
  studio?: any | ArrayString;
  plot?: OptionalString;
  genre?: any | ArrayString;
  rating?: OptionalNumber;
  mpaa?: OptionalString;
  imdbnumber?: OptionalString;
  premiered?: OptionalString;
  votes?: OptionalString;
  lastplayed?: OptionalString;
  originaltitle?: OptionalString;
  sorttitle?: OptionalString;
  episodeguide?: OptionalString;
  thumbnail?: OptionalString;
  fanart?: OptionalString;
  tag?: any | ArrayString;
  art?: any | MediaArtworkSet;
  userrating?: OptionalInteger;
  ratings?: VideoRatingsSet;
  dateadded?: OptionalString;
  runtime?: OptionalInteger;
  status?: OptionalString;
  uniqueid?: any | MediaUniqueIDSet;
}