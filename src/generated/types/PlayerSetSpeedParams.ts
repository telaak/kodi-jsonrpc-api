import { PlayerId } from './PlayerId';
import { GlobalIncrementDecrement } from './GlobalIncrementDecrement';

export interface PlayerSetSpeedParams {
  playerid: PlayerId;
  speed: -32 | -16 | -8 | -4 | -2 | -1 | 0 | 1 | 2 | 4 | 8 | 16 | 32 | GlobalIncrementDecrement;
}