import { GlobalStringNotEmpty } from './GlobalStringNotEmpty';

export interface MediaArtwork {
  banner?: GlobalStringNotEmpty;
  fanart?: GlobalStringNotEmpty;
  poster?: GlobalStringNotEmpty;
  thumb?: GlobalStringNotEmpty;
  [key: string]: GlobalStringNotEmpty | undefined;
}