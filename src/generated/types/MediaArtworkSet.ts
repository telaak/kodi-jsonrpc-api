import { GlobalStringNotEmpty } from './GlobalStringNotEmpty';

export interface MediaArtworkSet {
  banner?: null | GlobalStringNotEmpty;
  fanart?: null | GlobalStringNotEmpty;
  poster?: null | GlobalStringNotEmpty;
  thumb?: null | GlobalStringNotEmpty;
  [key: string]: null | GlobalStringNotEmpty | undefined;
}