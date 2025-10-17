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
  studio?: null | ArrayString;
  plot?: OptionalString;
  genre?: null | ArrayString;
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
  tag?: null | ArrayString;
  art?: null | MediaArtworkSet;
  userrating?: OptionalInteger;
  ratings?: VideoRatingsSet;
  dateadded?: OptionalString;
  runtime?: OptionalInteger;
  status?: OptionalString;
  uniqueid?: null | MediaUniqueIDSet;
}