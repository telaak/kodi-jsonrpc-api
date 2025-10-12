import { PlaylistId } from './PlaylistId';
import { PlaylistItem } from './PlaylistItem';

export interface PlaylistAddParams {
  playlistid: PlaylistId;
  item: PlaylistItem | PlaylistItem[];
}