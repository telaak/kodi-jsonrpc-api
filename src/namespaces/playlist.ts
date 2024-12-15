import { ISendMessage } from "..";

export class KodiPlaylistNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // Playlist Namespace Methods
  // =====================

  /**
   * Adds an item to the specified playlist.
   *
   * @param playlistid - The unique identifier of the playlist.
   * @param item - The playlist item to add.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async Add(playlistid: number, item: PlaylistItem): Promise<AddResponse> {
    const params: AddParams = { playlistid, item };
    return this.sendMessage("Playlist.Add", params);
  }

  /**
   * Clears all items from the specified playlist.
   *
   * @param playlistid - The unique identifier of the playlist to clear.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async Clear(playlistid: number): Promise<ClearResponse> {
    const params: ClearParams = { playlistid };
    return this.sendMessage("Playlist.Clear", params);
  }

  /**
   * Retrieves items from the specified playlist within the given range.
   *
   * @param playlistid - The unique identifier of the playlist.
   * @param start - Optional starting index of items to retrieve.
   * @param end - Optional ending index of items to retrieve.
   * @returns A promise that resolves to an object containing the retrieved items and the total number of items.
   */
  async GetItems(
    playlistid: number,
    start?: number,
    end?: number
  ): Promise<GetItemsResponse> {
    const params: GetItemsParams = { playlistid, start, end };
    return this.sendMessage("Playlist.GetItems", params);
  }

  /**
   * Retrieves all available playlists.
   *
   * @returns A promise that resolves to an object containing an array of playlists.
   */
  async GetPlaylists(): Promise<GetPlaylistsResponse> {
    const params: {} = {};
    return this.sendMessage("Playlist.GetPlaylists", params);
  }

  /**
   * Retrieves specified properties of the given playlist.
   *
   * @param playlistid - The unique identifier of the playlist.
   * @param properties - An array of property names to retrieve.
   * @returns A promise that resolves to an object containing the requested properties.
   */
  async GetProperties(
    playlistid: number,
    properties: string[]
  ): Promise<GetPropertiesResponse> {
    const params: GetPropertiesParams = { playlistid, properties };
    return this.sendMessage("Playlist.GetProperties", params);
  }

  /**
   * Inserts an item into the specified playlist at the given position.
   *
   * @param playlistid - The unique identifier of the playlist.
   * @param position - The position at which to insert the item.
   * @param item - The playlist item to insert.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async Insert(
    playlistid: number,
    position: number,
    item: PlaylistItem
  ): Promise<InsertResponse> {
    const params: InsertParams = { playlistid, position, item };
    return this.sendMessage("Playlist.Insert", params);
  }

  /**
   * Removes an item from the specified playlist.
   *
   * @param playlistid - The unique identifier of the playlist.
   * @param itemId - The unique identifier of the item to remove.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async Remove(playlistid: number, itemId: string): Promise<RemoveResponse> {
    const params: RemoveParams = { playlistid, itemId };
    return this.sendMessage("Playlist.Remove", params);
  }

  /**
   * Swaps two items within the specified playlist.
   *
   * @param playlistid - The unique identifier of the playlist.
   * @param itemId1 - The unique identifier of the first item.
   * @param itemId2 - The unique identifier of the second item.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async Swap(
    playlistid: number,
    itemId1: string,
    itemId2: string
  ): Promise<SwapResponse> {
    const params: SwapParams = { playlistid, itemId1, itemId2 };
    return this.sendMessage("Playlist.Swap", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the type of a playlist item.
 */
type PlaylistItemType = "video" | "audio" | "picture";

/**
 * Represents a playlist item.
 */
interface PlaylistItem {
  id: string;
  type: PlaylistItemType;
  title: string;
  path: string;
  thumbnail?: string;
  duration?: number; // in seconds
}

/**
 * Represents the available playlist types.
 */
type PlaylistType = "default" | "music" | "video" | "picture";

/**
 * Represents a playlist.
 */
interface Playlist {
  id: string;
  name: string;
  type: PlaylistType;
  items: PlaylistItem[];
  properties: Record<string, any>; // More specific typing can be applied if known
}

/**
 * Represents the parameters for Add.
 */
interface AddParams {
  playlistid: number;
  item: PlaylistItem;
}

/**
 * Represents the response structure for Add.
 */
interface AddResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for Clear.
 */
interface ClearParams {
  playlistid: number;
}

/**
 * Represents the response structure for Clear.
 */
interface ClearResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for GetItems.
 */
interface GetItemsParams {
  playlistid: number;
  start?: number;
  end?: number;
}

/**
 * Represents the response structure for GetItems.
 */
interface GetItemsResponse {
  items: PlaylistItem[];
  total: number;
}

/**
 * Represents the response structure for GetPlaylists.
 */
interface GetPlaylistsResponse {
  playlists: Playlist[];
}

/**
 * Represents the parameters for GetProperties.
 */
interface GetPropertiesParams {
  playlistid: number;
  properties: string[];
}

/**
 * Represents the response structure for GetProperties.
 */
interface GetPropertiesResponse {
  [key: string]: boolean | number | string | PlaylistItem[] | undefined;
}

/**
 * Represents the parameters for Insert.
 */
interface InsertParams {
  playlistid: number;
  position: number;
  item: PlaylistItem;
}

/**
 * Represents the response structure for Insert.
 */
interface InsertResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for Remove.
 */
interface RemoveParams {
  playlistid: number;
  itemId: string;
}

/**
 * Represents the response structure for Remove.
 */
interface RemoveResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for Swap.
 */
interface SwapParams {
  playlistid: number;
  itemId1: string;
  itemId2: string;
}

/**
 * Represents the response structure for Swap.
 */
interface SwapResponse {
  success: boolean;
  message: string;
}
