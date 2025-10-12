import { PlayerId } from './PlayerId';

export interface PlayerSetVideoStreamParams {
  playerid: PlayerId;
  stream: "previous" | "next" | number;
}