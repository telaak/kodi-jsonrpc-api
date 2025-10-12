import { PlayerId } from './PlayerId';
import { GlobalIncrementDecrement } from './GlobalIncrementDecrement';

export interface PlayerSetTempoParams {
  playerid: PlayerId;
  tempo: number | GlobalIncrementDecrement;
}