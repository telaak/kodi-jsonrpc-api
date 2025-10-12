import { PlayerAudioStream } from './PlayerAudioStream';
import { PlayerPositionPercentage } from './PlayerPositionPercentage';
import { PlayerSubtitle } from './PlayerSubtitle';
import { PlayerVideoStream } from './PlayerVideoStream';
import { PlaylistId } from './PlaylistId';
import { PlaylistPosition } from './PlaylistPosition';
import { PlayerRepeat } from './PlayerRepeat';
import { GlobalTime } from './GlobalTime';
import { PlayerType } from './PlayerType';

export interface PlayerPropertyValue {
  audiostreams?: PlayerAudioStream[];
  cachepercentage?: PlayerPositionPercentage;
  canchangespeed?: boolean;
  canmove?: boolean;
  canrepeat?: boolean;
  canrotate?: boolean;
  canseek?: boolean;
  canshuffle?: boolean;
  canzoom?: boolean;
  currentaudiostream?: PlayerAudioStream;
  currentsubtitle?: PlayerSubtitle;
  currentvideostream?: PlayerVideoStream;
  live?: boolean;
  partymode?: boolean;
  percentage?: PlayerPositionPercentage;
  playlistid?: PlaylistId;
  position?: PlaylistPosition;
  repeat?: PlayerRepeat;
  shuffled?: boolean;
  speed?: number;
  subtitleenabled?: boolean;
  subtitles?: PlayerSubtitle[];
  time?: GlobalTime;
  totaltime?: GlobalTime;
  type?: PlayerType;
  videostreams?: PlayerVideoStream[];
}