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
  director?: null | ArrayString;
  studio?: null | ArrayString;
  year?: OptionalInteger;
  plot?: OptionalString;
  album?: OptionalString;
  artist?: null | ArrayString;
  genre?: null | ArrayString;
  track?: OptionalInteger;
  lastplayed?: OptionalString;
  thumbnail?: OptionalString;
  fanart?: OptionalString;
  tag?: null | ArrayString;
  art?: null | MediaArtworkSet;
  resume?: null | VideoResume;
  rating?: OptionalNumber;
  userrating?: OptionalInteger;
  dateadded?: OptionalString;
  premiered?: OptionalString;
  uniqueid?: null | MediaUniqueIDSet;
}