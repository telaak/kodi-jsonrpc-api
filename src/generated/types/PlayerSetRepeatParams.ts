import { PlayerId } from './PlayerId';
import { PlayerRepeat } from './PlayerRepeat';

export interface PlayerSetRepeatParams {
  playerid: PlayerId;
  repeat: PlayerRepeat | "cycle";
}