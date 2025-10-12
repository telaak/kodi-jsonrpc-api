import { PlayerCustomViewMode } from './PlayerCustomViewMode';
import { PlayerViewMode } from './PlayerViewMode';

export interface PlayerSetViewModeParams {
  viewmode: PlayerCustomViewMode | PlayerViewMode;
}