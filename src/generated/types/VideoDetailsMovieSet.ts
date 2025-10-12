import { VideoDetailsMedia } from './VideoDetailsMedia';
import { LibraryId } from './LibraryId';

export interface VideoDetailsMovieSet extends VideoDetailsMedia {
  plot?: string;
  setid: LibraryId;
}