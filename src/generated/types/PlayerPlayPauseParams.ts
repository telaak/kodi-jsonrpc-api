import { PlayerId } from './PlayerId';
import { GlobalToggle } from './GlobalToggle';

export interface PlayerPlayPauseParams {
  playerid: PlayerId;
  play?: GlobalToggle;
}