import { GlobalStringNotEmpty } from './GlobalStringNotEmpty';

export interface MediaArtworkSet {
  banner?: any | GlobalStringNotEmpty;
  fanart?: any | GlobalStringNotEmpty;
  poster?: any | GlobalStringNotEmpty;
  thumb?: any | GlobalStringNotEmpty;
  [key: string]: any | GlobalStringNotEmpty | undefined;
}