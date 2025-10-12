import { PlayerId } from './PlayerId';

export interface PlayerZoomParams {
  playerid: PlayerId;
  zoom: "in" | "out" | number;
}