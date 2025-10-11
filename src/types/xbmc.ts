// Types and Interfaces Block
// These types and interfaces are specific to the XBMC methods and do not exist in koditestExports.ts

/**
 * GetInfoBooleansResponse
 * Represents the response from XBMC.GetInfoBooleans method.
 * It contains key-value pairs where the key is the info boolean name and the value is its boolean state.
 */
export interface GetInfoBooleansResponse {
  [key: string]: boolean;
}

/**
 * GetInfoLabelsResponse
 * Represents the response from XBMC.GetInfoLabels method.
 * It contains key-value pairs where the key is the info label name and the value is its string value.
 */
export interface GetInfoLabelsResponse {
  [key: string]: string;
}

/**
 * InfoLabelName represents the name of an info label accepted by XBMC.GetInfoLabels.
 * Kodi exposes many labels (see http://kodi.wiki/view/InfoLabels). We keep this
 * open as `string` for completeness but provide helpers to preserve literal tuple
 * inference for common usage patterns.
 */
/** Curated common info labels (non-exhaustive). These are convenient to
 * surface as literal types so callers get autocompletion and narrowing. The
 * API still accepts arbitrary labels, so `InfoLabelName` falls back to `string`.
 */
export type CommonInfoLabel =
  | "Player.Title"
  | "Player.Artist"
  | "Player.Album"
  | "Player.Year"
  | "Player.Season"
  | "Player.Episode"
  | "Player.Duration"
  | "Player.Position"
  | "Player.Art"
  | "Player.Genre"
  | "Player.Rating"
  | "Player.Subtitle"
  | "System.BuildVersion"
  | "System.Home"
  | "System.ProfileName"
  | "System.FriendlyName"
  | "System.Language"
  | "System.Time"
  | "System.Date";

/** InfoLabelName accepts a curated common label or any string. */
export type InfoLabelName = CommonInfoLabel | (string & {});

export const infoLabelCommon = [
  "Player.Title",
  "Player.Artist",
  "Player.Album",
  "Player.Year",
  "Player.Duration",
  "Player.Art",
  "Player.Genre",
  "Player.Rating",
  "Player.Subtitle",
  "System.BuildVersion",
  "System.Home",
  "System.ProfileName",
  "System.FriendlyName",
  "System.Language",
  "System.Time",
  "System.Date",
] as const;

/**
 * Create a typed readonly tuple of InfoLabelName values.
 * Example: makeInfoLabels("Player.Title", "System.BuildVersion") -> readonly ["Player.Title","System.BuildVersion"]
 *
 * @example
 * ```ts
 * import { makeInfoLabels } from "../types/xbmc";
 * const labels = makeInfoLabels("Player.Title", "System.BuildVersion");
 * // const resp = await kodi.XBMC.GetInfoLabels(labels);
 * // resp[labels[0]] // typed as string
 * ```
 */
export function makeInfoLabels<const P extends readonly InfoLabelName[]>(...p: P): P {
  return p;
}

/** Alias for makeInfoLabels. Useful for casting existing arrays to a readonly tuple. */
export const asInfoLabels = makeInfoLabels;
/**
 * Note: readonly tuple helpers preserve compile-time literal types. Namespace
 * wrappers will convert them to plain string[] when sending the JSON-RPC
 * request.
 */
