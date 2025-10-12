import { PlaylistId } from './PlaylistId';
import { PlaylistPosition } from './PlaylistPosition';

export interface PlaylistRemoveParams {
  playlistid: PlaylistId;
  position: PlaylistPosition;
}