import { VideoRating } from './VideoRating';

export interface VideoRatings {
  [key: string]: VideoRating | undefined;
}