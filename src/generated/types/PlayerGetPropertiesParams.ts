import { PlayerId } from './PlayerId';
import { PlayerPropertyName } from './PlayerPropertyName';

export interface PlayerGetPropertiesParams {
  playerid: PlayerId;
  properties: PlayerPropertyName[];
}