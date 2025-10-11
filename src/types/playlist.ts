// Types and Interfaces Block
// These types and interfaces are specific to the Playlist methods and do not exist in koditestExports.ts

/**
 * PlaylistId ($ref: "Playlist.Id")
 * Represents the unique identifier for a playlist.
 */
// PlaylistId reduced to primitive number — use `number` directly where needed.

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
 * Use primitive `number` for positions within a playlist.
 */

/**
 * PlaylistType ($ref: "Playlist.Type")
 * Enum for types of playlists.
 */
export type PlaylistType = "unknown" | "video" | "audio" | "picture" | "mixed";

/**
 * PlaylistPropertyName ($ref: "Playlist.Property.Name")
 * Allowed property names for playlist operations.
 */
export type PlaylistPropertyName = "type" | "size";

/**
 * PlaylistSwapOptions ($ref: "Playlist.SwapOptions")
 * Represents options for swapping items in a playlist.
 */
export interface PlaylistSwapOptions {
  /**
   * The ID of the playlist.
   */
  playlistid: number;

  /**
   * The first position to swap.
   */
  position1: number;

  /**
   * The second position to swap.
   */
  position2: number;
}

/**
 * PlaylistGetItemsParams ($ref: "Playlist.GetItems.Params")
 * Parameters for the GetItems method.
 */
export interface PlaylistGetItemsParams {
  playlistid: number; // ID of the playlist
  properties?: PlaylistPropertyName[]; // Optional list of properties to retrieve for each item
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
  playlistid: number; // Unique identifier for the playlist
  type: PlaylistType; // Type of the playlist
  name: string; // Name of the playlist
}

/**
 * PlaylistGetPropertiesParams ($ref: "Playlist.GetProperties.Params")
 * Parameters for the GetProperties method.
 */
export interface PlaylistGetPropertiesParams {
  playlistid: number; // ID of the playlist
  properties: PlaylistPropertyName[]; // List of properties to retrieve
}

/**
 * PlaylistGetPropertiesResponse ($ref: "Playlist.GetProperties.Response")
 * Response structure for the GetProperties method.
 */
export type PlaylistGetPropertiesResponse = Partial<Record<PlaylistPropertyName, any>>;

/**
 * PlaylistInsertParams ($ref: "Playlist.Insert.Params")
 * Parameters for the Insert method.
 */
export interface PlaylistInsertParams {
  playlistid: number; // ID of the playlist
  position: number; // Position at which to insert the item
  item: PlaylistMediaItem | PlaylistMediaItem[]; // Item(s) to insert
}

/**
 * PlaylistRemoveParams ($ref: "Playlist.Remove.Params")
 * Parameters for the Remove method.
 */
export interface PlaylistRemoveParams {
  playlistid: number; // ID of the playlist
  position: number; // Position of the item to remove
}

/**
 * PlaylistSwapParams ($ref: "Playlist.Swap.Params")
 * Parameters for the Swap method.
 */
export interface PlaylistSwapParams {
  playlistid: number; // ID of the playlist
  position1: number; // First position to swap
  position2: number; // Second position to swap
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

/**
 * Exported playlist property constants for ergonomic usage.
 * Example: import { playlistProps, makePlaylistProps } from "../types/playlist";
 */
export const playlistProps = ["type", "size"] as const;

/** Create a typed readonly tuple of PlaylistPropertyName values.
 *
 * Example:
 *   const p = makePlaylistProps("type", "size");
 *   // p is typed as readonly ["type","size"]
 *
 * @example
 * ```ts
 * import { makePlaylistProps, playlistProps } from "../types/playlist";
 *
 * const props = makePlaylistProps("type", "size");
 * // or use playlistProps for a reference list
 * // const props2 = playlistProps;
 *
 * // Typical usage:
 * // const resp = await kodi.Playlist.GetItems({ playlistid: 0, properties: props });
 * // resp.items[0].type // typed as string when 'type' included in props
 * ```
 */
export function makePlaylistProps<P extends readonly PlaylistPropertyName[]>(
  ...props: P
): P {
  return props;
}

/**
 * Cast an existing array to a readonly tuple of PlaylistPropertyName for inference.
 * Useful when you already have a string[] but want the narrower tuple typing.
 */
export function asPlaylistProps<P extends readonly PlaylistPropertyName[]>(
  props: P
): P {
  return props;
}
