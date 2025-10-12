import { PlayerId } from './PlayerId';
import { PlayerPositionPercentage } from './PlayerPositionPercentage';
import { PlayerPositionTime } from './PlayerPositionTime';
import { PlayerSeekParamsValueOption0 } from './PlayerSeekParamsValueOption0';
import { PlayerSeekParamsValueOption1 } from './PlayerSeekParamsValueOption1';
import { PlayerSeekParamsValueOption2 } from './PlayerSeekParamsValueOption2';
import { PlayerSeekParamsValueOption3 } from './PlayerSeekParamsValueOption3';

export interface PlayerSeekParams {
  playerid: PlayerId;
  value: PlayerSeekParamsValueOption0 | PlayerSeekParamsValueOption1 | PlayerSeekParamsValueOption2 | PlayerSeekParamsValueOption3;
}