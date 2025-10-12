import { PlayerId } from './PlayerId';

export interface PlayerMoveParams {
  playerid: PlayerId;
  direction: "left" | "right" | "up" | "down";
}