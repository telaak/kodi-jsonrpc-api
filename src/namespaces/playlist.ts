// Functions Block
// These functions correspond to the Playlist methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Playlist" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiPlaylistNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  PlaylistId,
  PlaylistItem,
  PlaylistMediaItem,
  PlaylistMediaItemOptions,
  PlaylistPosition,
  PlaylistType,
  PlaylistSwapOptions,
  PlaylistGetItemsParams,
  PlaylistGetItemsResponse,
  PlaylistGetPlaylistsResponse,
  PlaylistDetails,
  PlaylistGetPropertiesParams,
  PlaylistGetPropertiesResponse,
  PlaylistInsertParams,
  PlaylistRemoveParams,
  PlaylistSwapParams,
  ListLimits,
  ListLimitsReturned,
  ListSort,
} from "../types/playlist"; // Adjust the import path as necessary

export class KodiPlaylistNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Adds item(s) to the specified playlist.
   *
   * @param playlistid - The ID of the playlist to add items to.
   * @param item - The media item or items to add.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Add(
    playlistid: PlaylistId,
    item: PlaylistMediaItem | PlaylistMediaItem[]
  ): Promise<string> {
    const params: PlaylistItem = { item };
    return this.sendMessage("Playlist.Add", { playlistid, item });
  }

  /**
   * Clears all items from the specified playlist.
   *
   * @param playlistid - The ID of the playlist to clear.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Clear(playlistid: PlaylistId): Promise<string> {
    return this.sendMessage("Playlist.Clear", { playlistid });
  }

  /**
   * Retrieves all items from the specified playlist with optional filtering and pagination.
   *
   * @param playlistid - The ID of the playlist to retrieve items from.
   * @param properties - Optional list of properties to retrieve for each item.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @returns A promise resolving to a list of playlist items and pagination details.
   */
  async GetItems(
    playlistid: PlaylistId,
    properties?: string[],
    limits?: ListLimits,
    sort?: ListSort
  ): Promise<PlaylistGetItemsResponse> {
    const params: PlaylistGetItemsParams = {
      playlistid,
      properties,
      limits,
      sort,
    };
    return this.sendMessage("Playlist.GetItems", params);
  }

  /**
   * Retrieves all existing playlists.
   *
   * @returns A promise resolving to a list of playlists.
   */
  async GetPlaylists(): Promise<PlaylistGetPlaylistsResponse> {
    return this.sendMessage("Playlist.GetPlaylists", {});
  }

  /**
   * Retrieves the values of the specified properties for a playlist.
   *
   * @param playlistid - The ID of the playlist.
   * @param properties - The list of properties to retrieve.
   * @returns A promise resolving to the requested properties and their values.
   */
  async GetProperties(
    playlistid: PlaylistId,
    properties: string[]
  ): Promise<PlaylistGetPropertiesResponse> {
    const params: PlaylistGetPropertiesParams = { playlistid, properties };
    return this.sendMessage("Playlist.GetProperties", params);
  }

  /**
   * Inserts item(s) into the specified playlist at the given position.
   *
   * @param playlistid - The ID of the playlist to insert items into.
   * @param position - The position at which to insert the items.
   * @param item - The media item or items to insert.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Insert(
    playlistid: PlaylistId,
    position: PlaylistPosition,
    item: PlaylistMediaItem | PlaylistMediaItem[]
  ): Promise<string> {
    const params: PlaylistInsertParams = { playlistid, position, item };
    return this.sendMessage("Playlist.Insert", params);
  }

  /**
   * Removes an item from the specified playlist at the given position.
   *
   * @param playlistid - The ID of the playlist to remove the item from.
   * @param position - The position of the item to remove.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Remove(
    playlistid: PlaylistId,
    position: PlaylistPosition
  ): Promise<string> {
    const params: PlaylistRemoveParams = { playlistid, position };
    return this.sendMessage("Playlist.Remove", params);
  }

  /**
   * Swaps two items within the specified playlist.
   *
   * @param playlistid - The ID of the playlist containing the items.
   * @param position1 - The position of the first item to swap.
   * @param position2 - The position of the second item to swap.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Swap(
    playlistid: PlaylistId,
    position1: PlaylistPosition,
    position2: PlaylistPosition
  ): Promise<string> {
    const params: PlaylistSwapParams = { playlistid, position1, position2 };
    return this.sendMessage("Playlist.Swap", params);
  }
}
