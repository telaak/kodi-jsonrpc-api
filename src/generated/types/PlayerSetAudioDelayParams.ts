import { PlayerId } from './PlayerId';
import { GlobalIncrementDecrement } from './GlobalIncrementDecrement';

export interface PlayerSetAudioDelayParams {
  playerid: PlayerId;
  offset: number | GlobalIncrementDecrement;
}