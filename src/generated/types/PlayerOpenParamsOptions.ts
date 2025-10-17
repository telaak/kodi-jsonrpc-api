import { OptionalBoolean } from './OptionalBoolean';
import { PlayerRepeat } from './PlayerRepeat';
import { PlayerPositionPercentage } from './PlayerPositionPercentage';
import { PlayerPositionTime } from './PlayerPositionTime';

export interface PlayerOpenParamsOptions {
  playername?: null | "default" | string;
  repeat?: null | PlayerRepeat;
  resume?: boolean | PlayerPositionPercentage | PlayerPositionTime;
  shuffled?: OptionalBoolean;
}