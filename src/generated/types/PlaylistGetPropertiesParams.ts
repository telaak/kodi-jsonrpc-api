import { PlaylistId } from './PlaylistId';
import { PlaylistPropertyName } from './PlaylistPropertyName';

export interface PlaylistGetPropertiesParams {
  playlistid: PlaylistId;
  properties: PlaylistPropertyName[];
}