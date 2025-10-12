import { PlayerId } from './PlayerId';

export interface PlayerSetSubtitleParams {
  playerid: PlayerId;
  subtitle: "previous" | "next" | "off" | "on" | number;
  enable?: boolean;
}