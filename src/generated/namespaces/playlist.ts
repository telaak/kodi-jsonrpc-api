import { ISendMessage } from '../../';

type __ListItemAllKeys = keyof ListItemAll;
type __PlaylistPropertyValueKeys = keyof PlaylistPropertyValue;

import { PlaylistId } from '../types/PlaylistId';
import { PlaylistAddParams } from '../types/PlaylistAddParams';
import { PlaylistClearParams } from '../types/PlaylistClearParams';
import { ListFieldsAll } from '../types/ListFieldsAll';
import { ListLimits } from '../types/ListLimits';
import { ListSort } from '../types/ListSort';
import { ListItemAll } from '../types/ListItemAll';
import { ListLimitsReturned } from '../types/ListLimitsReturned';
import { PlaylistGetItemsParams } from '../types/PlaylistGetItemsParams';
import { PlaylistGetItemsResponse } from '../types/PlaylistGetItemsResponse';
import { PlaylistPropertyValue } from '../types/PlaylistPropertyValue';
import { PlaylistGetPropertiesParams } from '../types/PlaylistGetPropertiesParams';
import { PlaylistPosition } from '../types/PlaylistPosition';
import { PlaylistInsertParams } from '../types/PlaylistInsertParams';
import { PlaylistRemoveParams } from '../types/PlaylistRemoveParams';
import { PlaylistSwapParams } from '../types/PlaylistSwapParams';


export class KodiPlaylistNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Add item(s) to playlist
   */
  async Add(params: PlaylistAddParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Add", params);
  }

  /**
   * Clear playlist
   */
  async Clear(params: PlaylistClearParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Clear", params);
  }

  async GetItems<P extends readonly __ListItemAllKeys[]>(params: { playlistid: PlaylistId; properties: P; limits?: ListLimits; sort?: ListSort }): Promise<Array<Pick<ListItemAll, Extract<P[number], __ListItemAllKeys>>>>;
  /**
   * Get all items from playlist
   */
  async GetItems(params: PlaylistGetItemsParams): Promise<ListItemAll[]>;
  async GetItems(params: any) {
    return this.sendMessage<ListItemAll[]>("Playlist.GetItems", params);
  }

  /**
   * Returns all existing playlists
   */
  async GetPlaylists(): Promise<unknown[]> {
    return this.sendMessage<unknown[]>("Playlist.GetPlaylists", {});
  }

  async GetProperties<P extends readonly __PlaylistPropertyValueKeys[]>(params: { playlistid: PlaylistId; properties: P}): Promise<Pick<PlaylistPropertyValue, Extract<P[number], __PlaylistPropertyValueKeys>>>;
  /**
   * Retrieves the values of the given properties
   */
  async GetProperties(params: PlaylistGetPropertiesParams): Promise<PlaylistPropertyValue>;
  async GetProperties(params: any) {
    return this.sendMessage<PlaylistPropertyValue>("Playlist.GetProperties", params);
  }

  /**
   * Insert item(s) into playlist. Does not work for picture playlists (aka slideshows).
   */
  async Insert(params: PlaylistInsertParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Insert", params);
  }

  /**
   * Remove item from playlist. Does not work for picture playlists (aka slideshows).
   */
  async Remove(params: PlaylistRemoveParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Remove", params);
  }

  /**
   * Swap items in the playlist. Does not work for picture playlists (aka slideshows).
   */
  async Swap(params: PlaylistSwapParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Swap", params);
  }

}