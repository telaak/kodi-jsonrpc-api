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
   * @param playlistid PlaylistId
   * @param item PlaylistItem | PlaylistItem[]
   * @returns string
   */
  async Add(params: PlaylistAddParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Add", params);
  }

  /**
   * Clear playlist
   * @param playlistid PlaylistId
   * @returns string
   */
  async Clear(params: PlaylistClearParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Clear", params);
  }

  async GetItems<P extends readonly __ListItemAllKeys[]>(params: { playlistid: PlaylistId; properties: P; limits?: ListLimits; sort?: ListSort }): Promise<Array<Pick<ListItemAll, Extract<P[number], __ListItemAllKeys>>>>;
  /**
   * Get all items from playlist
   * @param playlistid PlaylistId
   * @param properties ListFieldsAll (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns PlaylistGetItemsResponse
   */
  async GetItems(params: PlaylistGetItemsParams): Promise<ListItemAll[]>;
  async GetItems(params: any) {
    const res = await this.sendMessage<any>("Playlist.GetItems", params);
    if (res && typeof res === "object" && Array.isArray((res as any).items)) {
      return (res as any).items as ListItemAll[];
    }
    if (Array.isArray(res)) return res as ListItemAll[];
    return res as ListItemAll[];
  }

  /**
   * Returns all existing playlists
   * @returns unknown[]
   */
  async GetPlaylists(): Promise<unknown[]> {
    return this.sendMessage<unknown[]>("Playlist.GetPlaylists", {});
  }

  async GetProperties<P extends readonly __PlaylistPropertyValueKeys[]>(params: { playlistid: PlaylistId; properties: P}): Promise<Pick<PlaylistPropertyValue, Extract<P[number], __PlaylistPropertyValueKeys>>>;
  /**
   * Retrieves the values of the given properties
   * @param playlistid PlaylistId
   * @param properties PlaylistPropertyName[]
   * @returns PlaylistPropertyValue
   */
  async GetProperties(params: PlaylistGetPropertiesParams): Promise<PlaylistPropertyValue>;
  async GetProperties(params: any) {
    const res = await this.sendMessage<any>("Playlist.GetProperties", params);
    if (res && typeof res === "object" && Object.prototype.hasOwnProperty.call(res, "item")) {
      return (res as any).item as PlaylistPropertyValue;
    }
    return res as PlaylistPropertyValue;
  }

  /**
   * Insert item(s) into playlist. Does not work for picture playlists (aka slideshows).
   * @param playlistid PlaylistId
   * @param position PlaylistPosition
   * @param item PlaylistItem | PlaylistItem[]
   * @returns string
   */
  async Insert(params: PlaylistInsertParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Insert", params);
  }

  /**
   * Remove item from playlist. Does not work for picture playlists (aka slideshows).
   * @param playlistid PlaylistId
   * @param position PlaylistPosition
   * @returns string
   */
  async Remove(params: PlaylistRemoveParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Remove", params);
  }

  /**
   * Swap items in the playlist. Does not work for picture playlists (aka slideshows).
   * @param playlistid PlaylistId
   * @param position1 PlaylistPosition
   * @param position2 PlaylistPosition
   * @returns string
   */
  async Swap(params: PlaylistSwapParams): Promise<string> {
    return this.sendMessage<string>("Playlist.Swap", params);
  }

}