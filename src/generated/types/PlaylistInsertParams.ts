import { PlaylistId } from './PlaylistId';
import { PlaylistPosition } from './PlaylistPosition';
import { PlaylistItem } from './PlaylistItem';

export interface PlaylistInsertParams {
  playlistid: PlaylistId;
  position: PlaylistPosition;
  item: PlaylistItem | PlaylistItem[];
}