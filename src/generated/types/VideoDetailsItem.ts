import { VideoDetailsMedia } from './VideoDetailsMedia';

export interface VideoDetailsItem extends VideoDetailsMedia {
  dateadded?: string;
  file?: string;
  lastplayed?: string;
  plot?: string;
}