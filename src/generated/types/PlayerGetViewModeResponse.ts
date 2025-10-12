import { PlayerViewMode } from './PlayerViewMode';

export interface PlayerGetViewModeResponse {
  nonlinearstretch: boolean;
  pixelratio: number;
  verticalshift: number;
  viewmode: PlayerViewMode;
  zoom: number;
}