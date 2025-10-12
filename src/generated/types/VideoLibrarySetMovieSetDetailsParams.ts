import { LibraryId } from './LibraryId';
import { OptionalString } from './OptionalString';
import { MediaArtworkSet } from './MediaArtworkSet';

export interface VideoLibrarySetMovieSetDetailsParams {
  setid: LibraryId;
  title?: OptionalString;
  art?: any | MediaArtworkSet;
  plot?: OptionalString;
}