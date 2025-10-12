import { PlayerId } from './PlayerId';
import { ListFieldsAll } from './ListFieldsAll';

export interface PlayerGetItemParams {
  playerid: PlayerId;
  properties?: ListFieldsAll;
}