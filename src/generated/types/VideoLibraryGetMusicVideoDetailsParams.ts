import { LibraryId } from './LibraryId';
import { VideoFieldsMusicVideo } from './VideoFieldsMusicVideo';

export interface VideoLibraryGetMusicVideoDetailsParams {
  musicvideoid: LibraryId;
  properties?: VideoFieldsMusicVideo;
}