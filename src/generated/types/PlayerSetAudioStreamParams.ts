import { PlayerId } from './PlayerId';

export interface PlayerSetAudioStreamParams {
  playerid: PlayerId;
  stream: "previous" | "next" | number;
}