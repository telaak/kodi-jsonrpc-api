import { PlayerId } from './PlayerId';

export interface PlayerRotateParams {
  playerid: PlayerId;
  value?: "clockwise" | "counterclockwise";
}