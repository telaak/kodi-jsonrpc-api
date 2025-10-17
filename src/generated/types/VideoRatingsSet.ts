import { VideoRating } from './VideoRating';

export interface VideoRatingsSet {
  [key: string]: null | VideoRating | undefined;
}