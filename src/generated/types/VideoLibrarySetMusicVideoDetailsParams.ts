import { LibraryId } from './LibraryId';
import { OptionalString } from './OptionalString';
import { OptionalInteger } from './OptionalInteger';
import { ArrayString } from './ArrayString';
import { MediaArtworkSet } from './MediaArtworkSet';
import { VideoResume } from './VideoResume';
import { OptionalNumber } from './OptionalNumber';
import { MediaUniqueIDSet } from './MediaUniqueIDSet';

export interface VideoLibrarySetMusicVideoDetailsParams {
  musicvideoid: LibraryId;
  title?: OptionalString;
  playcount?: OptionalInteger;
  runtime?: OptionalInteger;
  director?: any | ArrayString;
  studio?: any | ArrayString;
  year?: OptionalInteger;
  plot?: OptionalString;
  album?: OptionalString;
  artist?: any | ArrayString;
  genre?: any | ArrayString;
  track?: OptionalInteger;
  lastplayed?: OptionalString;
  thumbnail?: OptionalString;
  fanart?: OptionalString;
  tag?: any | ArrayString;
  art?: any | MediaArtworkSet;
  resume?: any | VideoResume;
  rating?: OptionalNumber;
  userrating?: OptionalInteger;
  dateadded?: OptionalString;
  premiered?: OptionalString;
  uniqueid?: any | MediaUniqueIDSet;
}