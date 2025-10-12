import { PlayerId } from './PlayerId';
import { PlaylistPosition } from './PlaylistPosition';

export interface PlayerGoToParams {
  playerid: PlayerId;
  to: "previous" | "next" | PlaylistPosition;
}