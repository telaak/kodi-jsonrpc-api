import { LibraryId } from './LibraryId';
import { MediaArtworkSet } from './MediaArtworkSet';
import { OptionalInteger } from './OptionalInteger';
import { OptionalString } from './OptionalString';

export interface VideoLibrarySetSeasonDetailsParams {
  seasonid: LibraryId;
  art?: null | MediaArtworkSet;
  userrating?: OptionalInteger;
  title?: OptionalString;
}