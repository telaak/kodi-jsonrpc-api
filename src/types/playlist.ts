// Types and Interfaces Block
// These types and interfaces are specific to the Playlist methods and do not exist in koditestExports.ts

/**
 * PlaylistId ($ref: "Playlist.Id")
 * Represents the unique identifier for a playlist.
 */
export type PlaylistId = string;

/**
 * PlaylistItem ($ref: "Playlist.Item")
 * Represents an item in a playlist.
 */
export interface PlaylistItem {
  /**
   * The media item to add to the playlist.
   * It can be a single item or an array of items.
   */
  item: PlaylistMediaItem | PlaylistMediaItem[];
}

/**
 * PlaylistMediaItem ($ref: "Playlist.MediaItem")
 * Represents a media item that can be added to a playlist.
 */
export interface PlaylistMediaItem {
  /**
   * The type of the media item (e.g., video, music, etc.).
   */
  type: string;

  /**
   * The path or identifier of the media item.
   */
  path: string;

  /**
   * Additional options for the media item.
   */
  options?: PlaylistMediaItemOptions;
}

/**
 * PlaylistMediaItemOptions ($ref: "Playlist.MediaItemOptions")
 * Represents additional options for a media item in a playlist.
 */
export interface PlaylistMediaItemOptions {
  /**
   * The index at which to insert the media item.
   */
  index?: number;

  /**
   * Whether to start playback immediately after adding the item.
   */
  start?: boolean;
}

/**
 * PlaylistPosition ($ref: "Playlist.Position")
 * Represents the position of an item within a playlist.
 */
export type PlaylistPosition = number;

/**
 * PlaylistType ($ref: "Playlist.Type")
 * Enum for types of playlists.
 */
export type PlaylistType = "video" | "audio" | "musicvideo";

/**
 * PlaylistSwapOptions ($ref: "Playlist.SwapOptions")
 * Represents options for swapping items in a playlist.
 */
export interface PlaylistSwapOptions {
  /**
   * The ID of the playlist.
   */
  playlistid: PlaylistId;

  /**
   * The first position to swap.
   */
  position1: PlaylistPosition;

  /**
   * The second position to swap.
   */
  position2: PlaylistPosition;
}

/**
 * PlaylistGetItemsParams ($ref: "Playlist.GetItems.Params")
 * Parameters for the GetItems method.
 */
export interface PlaylistGetItemsParams {
  playlistid: PlaylistId; // ID of the playlist
  properties?: string[]; // Optional list of properties to retrieve for each item
  limits?: ListLimits; // Optional limits for pagination
  sort?: ListSort; // Optional sorting options
}

/**
 * PlaylistGetItemsResponse ($ref: "Playlist.GetItems.Response")
 * Response structure for the GetItems method.
 */
export interface PlaylistGetItemsResponse {
  items: PlaylistMediaItem[]; // List of retrieved playlist items
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * PlaylistGetPlaylistsResponse ($ref: "Playlist.GetPlaylists.Response")
 * Response structure for the GetPlaylists method.
 */
export interface PlaylistGetPlaylistsResponse {
  playlists: PlaylistDetails[]; // List of retrieved playlists
}

/**
 * PlaylistDetails ($ref: "Playlist.Details")
 * Represents the details of a playlist.
 */
export interface PlaylistDetails {
  playlistid: PlaylistId; // Unique identifier for the playlist
  type: PlaylistType; // Type of the playlist
  name: string; // Name of the playlist
}

/**
 * PlaylistGetPropertiesParams ($ref: "Playlist.GetProperties.Params")
 * Parameters for the GetProperties method.
 */
export interface PlaylistGetPropertiesParams {
  playlistid: PlaylistId; // ID of the playlist
  properties: string[]; // List of properties to retrieve
}

/**
 * PlaylistGetPropertiesResponse ($ref: "Playlist.GetProperties.Response")
 * Response structure for the GetProperties method.
 */
export interface PlaylistGetPropertiesResponse {
  [key: string]: any; // Dynamic properties based on requested properties
}

/**
 * PlaylistInsertParams ($ref: "Playlist.Insert.Params")
 * Parameters for the Insert method.
 */
export interface PlaylistInsertParams {
  playlistid: PlaylistId; // ID of the playlist
  position: PlaylistPosition; // Position at which to insert the item
  item: PlaylistMediaItem | PlaylistMediaItem[]; // Item(s) to insert
}

/**
 * PlaylistRemoveParams ($ref: "Playlist.Remove.Params")
 * Parameters for the Remove method.
 */
export interface PlaylistRemoveParams {
  playlistid: PlaylistId; // ID of the playlist
  position: PlaylistPosition; // Position of the item to remove
}

/**
 * PlaylistSwapParams ($ref: "Playlist.Swap.Params")
 * Parameters for the Swap method.
 */
export interface PlaylistSwapParams {
  playlistid: PlaylistId; // ID of the playlist
  position1: PlaylistPosition; // First position to swap
  position2: PlaylistPosition; // Second position to swap
}

/**
 * ListLimits ($ref: "List.Limits")
 * Represents pagination limits.
 */
export interface ListLimits {
  start?: number; // Starting index
  end?: number; // Ending index
}

/**
 * ListLimitsReturned ($ref: "List.LimitsReturned")
 * Represents the pagination limits returned by the API.
 */
export interface ListLimitsReturned {
  start: number; // Starting index
  end: number; // Ending index
  total: number; // Total number of items available
}

/**
 * ListSort ($ref: "List.Sort")
 * Represents sorting options.
 */
export interface ListSort {
  method: string; // Field by which to sort
  order: "ascending" | "descending"; // Order of sorting
}
