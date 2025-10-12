import { VideoRating } from './VideoRating';

export interface VideoRatingsSet {
  [key: string]: any | VideoRating | undefined;
}