import { PlaylistId } from './PlaylistId';
import { PlaylistPosition } from './PlaylistPosition';

export interface PlaylistSwapParams {
  playlistid: PlaylistId;
  position1: PlaylistPosition;
  position2: PlaylistPosition;
}