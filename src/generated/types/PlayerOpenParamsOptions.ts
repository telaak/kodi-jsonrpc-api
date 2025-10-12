import { OptionalBoolean } from './OptionalBoolean';
import { PlayerRepeat } from './PlayerRepeat';
import { PlayerPositionPercentage } from './PlayerPositionPercentage';
import { PlayerPositionTime } from './PlayerPositionTime';

export interface PlayerOpenParamsOptions {
  playername?: any | "default" | string;
  repeat?: any | PlayerRepeat;
  resume?: boolean | PlayerPositionPercentage | PlayerPositionTime;
  shuffled?: OptionalBoolean;
}