import { PlayerPositionPercentage } from './PlayerPositionPercentage';
import { GlobalTime } from './GlobalTime';

export interface PlayerSeekResponse {
  percentage?: PlayerPositionPercentage;
  time?: GlobalTime;
  totaltime?: GlobalTime;
}