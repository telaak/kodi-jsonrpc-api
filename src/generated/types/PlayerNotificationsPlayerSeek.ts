import { PlayerNotificationsPlayer } from './PlayerNotificationsPlayer';
import { GlobalTime } from './GlobalTime';

export interface PlayerNotificationsPlayerSeek extends PlayerNotificationsPlayer {
  seekoffset?: GlobalTime;
  time?: GlobalTime;
}