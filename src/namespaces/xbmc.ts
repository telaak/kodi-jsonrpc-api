// Functions Block
// These functions correspond to the XBMC methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "XBMC" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiXBMCNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  GetInfoBooleansResponse,
  GetInfoLabelsResponse,
  makeInfoLabels,
  CommonInfoLabel,
} from "../types/xbmc"; // Adjust the import path as necessary

export class KodiXBMCNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves the specified info booleans about Kodi and the system.
   *
   * @param booleans - An array of info boolean names to retrieve.
   * @returns A promise resolving to an object containing the requested info booleans and their states.
   */
  // Overload: accept readonly tuple to preserve literal types in callers
  async GetInfoBooleans<const B extends readonly string[]>(booleans: B): Promise<Record<B[number], boolean>>;
  // Fallback
  async GetInfoBooleans(booleans: string[]): Promise<GetInfoBooleansResponse>;
  async GetInfoBooleans(booleans: string[]): Promise<GetInfoBooleansResponse> {
    const params = { booleans: (booleans as unknown) as string[] };
    const response = await this.sendMessage("XBMC.GetInfoBooleans", params);
    return response as GetInfoBooleansResponse;
  }

  /**
   * Retrieves the specified info labels about Kodi and the system.
   *
   * @param labels - An array of info label names to retrieve.
   * @returns A promise resolving to an object containing the requested info labels and their values.
   */
  // Overload accepting a readonly tuple to preserve literal label types
  async GetInfoLabels<const L extends readonly string[]>(labels: L): Promise<Record<L[number], string>>;
  // Fallback overload
  async GetInfoLabels(labels: string[]): Promise<GetInfoLabelsResponse>;
  async GetInfoLabels(labels: string[]): Promise<GetInfoLabelsResponse> {
    const params = { labels: (labels as unknown) as string[] };
    const response = await this.sendMessage("XBMC.GetInfoLabels", params);
    return response as GetInfoLabelsResponse;
  }

  /** Convenience: get currently playing title (Player.Title) */
  async GetPlayerTitle(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Title" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing artist (Player.Artist) */
  async GetPlayerArtist(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Artist" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing album (Player.Album) */
  async GetPlayerAlbum(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Album" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing year (Player.Year) */
  async GetPlayerYear(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Year" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing season (Player.Season) */
  async GetPlayerSeason(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Season" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing episode (Player.Episode) */
  async GetPlayerEpisode(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Episode" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing duration (Player.Duration) */
  async GetPlayerDuration(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Duration" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing position (Player.Position) */
  async GetPlayerPosition(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Position" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing art (Player.Art) */
  async GetPlayerArt(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Art" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing genre (Player.Genre) */
  async GetPlayerGenre(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Genre" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing rating (Player.Rating) */
  async GetPlayerRating(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Rating" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get currently playing subtitle (Player.Subtitle) */
  async GetPlayerSubtitle(): Promise<string | undefined> {
    const labels = makeInfoLabels("Player.Subtitle" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get system time (System.Time) */
  async GetSystemTime(): Promise<string | undefined> {
    const labels = makeInfoLabels("System.Time" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get system date (System.Date) */
  async GetSystemDate(): Promise<string | undefined> {
    const labels = makeInfoLabels("System.Date" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get system build version (System.BuildVersion) */
  async GetSystemBuildVersion(): Promise<string | undefined> {
    const labels = makeInfoLabels("System.BuildVersion" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get system home path (System.Home) */
  async GetSystemHome(): Promise<string | undefined> {
    const labels = makeInfoLabels("System.Home" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }

  /** Convenience: get current profile name (System.ProfileName) */
  async GetSystemProfileName(): Promise<string | undefined> {
    const labels = makeInfoLabels("System.ProfileName" as const);
    const res = await this.GetInfoLabels(labels);
    return res[labels[0]];
  }
}
