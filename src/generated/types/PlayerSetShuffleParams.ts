import { PlayerId } from './PlayerId';
import { GlobalToggle } from './GlobalToggle';

export interface PlayerSetShuffleParams {
  playerid: PlayerId;
  shuffle: GlobalToggle;
}