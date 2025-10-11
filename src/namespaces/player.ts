// Functions Block
// These functions correspond to the Player methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Player" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiPlayerNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  PlayerPlayertype,
  PlayerRepeat,
  PlayerViewMode,
  PlayerCustomViewMode,
  PlayerPropertyName,
  PlayerPropertyValue,
  PlayerMediaItem,
  PlayerOptions,
  PlayerOpenItem,
  PlayerGoTo,
  PlayerMoveDirection,
  PlayerSeekValue,
  PlayerDetails,
} from "../types/player"; // Adjust the import path as necessary

export class KodiPlayerNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Adds a subtitle to the player.
   *
   * @param number - The ID of the player.
   * @param subtitle - The local path or remote URL to the subtitle file to load.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async AddSubtitle(number: number, subtitle: string): Promise<string> {
    const params = { number, subtitle };
    return this.sendMessage("Player.AddSubtitle", params);
  }

  /**
   * Retrieves all active players.
   *
   * @returns A promise resolving to an array of active players.
   */
  async GetActivePlayers(): Promise<PlayerDetails[]> {
    return this.sendMessage("Player.GetActivePlayers", {});
  }

  /**
   * Gets the audio delay for the current playback.
   *
   * @returns A promise resolving to the audio delay offset.
   */
  async GetAudioDelay(): Promise<{ offset: number }> {
    return this.sendMessage("Player.GetAudioDelay", {});
  }

  /**
   * Retrieves the currently played item.
   *
   * @param number - The ID of the player.
   * @param properties - The properties to retrieve for the item.
   * @returns A promise resolving to the currently played item.
   */
  // Overloads: when no properties are requested return the full item; when
  // a literal tuple of property names is provided, return a Pick of those keys.
  async GetItem(number: number): Promise<{ item: PlayerMediaItem }>;
  async GetItem<
    P extends readonly (keyof import("../types/player").PlayerGetItem)[]
  >(
    number: number,
    properties: P
  ): Promise<{
    item: Pick<import("../types/player").PlayerGetItem, Extract<P[number], keyof import("../types/player").PlayerGetItem>>;
  }>;
  async GetItem(number: number, properties?: readonly string[]) {
    const params = { number, properties };
    return this.sendMessage("Player.GetItem", params);
  }

  /**
   * Retrieves a list of available players.
   *
   * @param media - The type of media (e.g., 'all', 'video', 'audio').
   * @returns A promise resolving to an array of available players.
   */
  async GetPlayers(media: "all" | "video" | "audio" = "all"): Promise<
    Array<{
      name: string;
      playsaudio: boolean;
      playsvideo: boolean;
      type: PlayerPlayertype;
    }>
  > {
    const params = { media };
    return this.sendMessage("Player.GetPlayers", params);
  }

  /**
   * Retrieves the values of the given properties for a player.
   *
   * @param number - The ID of the player.
   * @param properties - The properties to retrieve.
   * @returns A promise resolving to the requested properties and their values.
   */
  async GetProperties(
    number: number,
    properties: PlayerPropertyName[]
  ): Promise<PlayerPropertyValue> {
    const params = { number, properties };
    return this.sendMessage("Player.GetProperties", params);
  }

  /**
   * Gets the view mode of the video player.
   *
   * @returns A promise resolving to the view mode details.
   */
  async GetViewMode(): Promise<{
    nonlinearstretch: boolean;
    pixelratio: number;
    verticalshift: number;
    viewmode: PlayerViewMode;
    zoom: number;
  }> {
    return this.sendMessage("Player.GetViewMode", {});
  }

  /**
   * Goes to the previous, next, or a specific position in the playlist.
   *
   * @param number - The ID of the player.
   * @param to - The target to go to ('previous', 'next', or a specific position).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async GoTo(number: number, to: PlayerGoTo): Promise<string> {
    const params = { number, to };
    return this.sendMessage("Player.GoTo", params);
  }

  /**
   * Moves the viewport or skips playback based on the current state.
   *
   * @param number - The ID of the player.
   * @param direction - The direction to move ('left', 'right', 'up', 'down').
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Move(
    number: number,
    direction: PlayerMoveDirection
  ): Promise<string> {
    const params = { number, direction };
    return this.sendMessage("Player.Move", params);
  }

  /**
   * Starts playback of a playlist, slideshow, single file, or database item.
   *
   * @param item - The item to play.
   * @param options - Optional playback options.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Open(
    item: PlayerOpenItem,
    options?: PlayerOptions
  ): Promise<string> {
    const params = { item, options };
    return this.sendMessage("Player.Open", params);
  }

  /**
   * Pauses or unpauses playback and returns the new state.
   *
   * @param number - The ID of the player.
   * @param play - The toggle state ('toggle' by default).
   * @returns A promise resolving to the new playback speed.
   */
  async PlayPause(
    number: number,
    play: boolean | "toggle" = "toggle"
  ): Promise<number> {
    const params = { number, play };
    return this.sendMessage("Player.PlayPause", params);
  }

  /**
   * Rotates the current picture.
   *
   * @param number - The ID of the player.
   * @param value - The direction to rotate ('clockwise' or 'counterclockwise').
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Rotate(
    number: number,
    value: "clockwise" | "counterclockwise"
  ): Promise<string> {
    const params = { number, value };
    return this.sendMessage("Player.Rotate", params);
  }

  /**
   * Seeks through the playing item.
   *
   * @param number - The ID of the player.
   * @param value - The seek value (percentage, time, step, or seconds).
   * @returns A promise resolving to the new playback position.
   */
  async Seek(
    number: number,
    value: PlayerSeekValue
  ): Promise<{ percentage?: number; time?: string; totaltime?: string }> {
    const params = { number, value };
    return this.sendMessage("Player.Seek", params);
  }

  /**
   * Sets the audio delay for the current playback.
   *
   * @param number - The ID of the player.
   * @param offset - The offset value to set.
   * @returns A promise resolving to the new audio delay offset.
   */
  async SetAudioDelay(
    number: number,
    offset: number | "increment" | "decrement"
  ): Promise<{ offset: number }> {
    const params = { number, offset };
    return this.sendMessage("Player.SetAudioDelay", params);
  }

  /**
   * Sets the audio stream played by the player.
   *
   * @param number - The ID of the player.
   * @param stream - The audio stream to set ('previous', 'next', or stream index).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetAudioStream(
    number: number,
    stream: "previous" | "next" | number
  ): Promise<string> {
    const params = { number, stream };
    return this.sendMessage("Player.SetAudioStream", params);
  }

  /**
   * Turns partymode on or off.
   *
   * @param number - The ID of the player.
   * @param partymode - The toggle state ('toggle' by default).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetPartymode(
    number: number,
    partymode: boolean | "toggle"
  ): Promise<string> {
    const params = { number, partymode };
    return this.sendMessage("Player.SetPartymode", params);
  }

  /**
   * Sets the repeat mode of the player.
   *
   * @param number - The ID of the player.
   * @param repeat - The repeat mode ('off', 'one', 'all', or 'cycle').
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetRepeat(
    number: number,
    repeat: PlayerRepeat | "cycle"
  ): Promise<string> {
    const params = { number, repeat };
    return this.sendMessage("Player.SetRepeat", params);
  }

  /**
   * Shuffles or unshuffles items in the player.
   *
   * @param number - The ID of the player.
   * @param shuffle - The toggle state ('toggle' by default).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetShuffle(
    number: number,
    shuffle: boolean | "toggle"
  ): Promise<string> {
    const params = { number, shuffle };
    return this.sendMessage("Player.SetShuffle", params);
  }

  /**
   * Sets the speed of the current playback.
   *
   * @param number - The ID of the player.
   * @param speed - The speed value to set (-32 to 32 or increment/decrement).
   * @returns A promise resolving to the new playback speed.
   */
  async SetSpeed(
    number: number,
    speed:
      | -32
      | -16
      | -8
      | -4
      | -2
      | -1
      | 0
      | 1
      | 2
      | 4
      | 8
      | 16
      | 32
      | "increment"
      | "decrement"
  ): Promise<number> {
    const params = { number, speed };
    return this.sendMessage("Player.SetSpeed", params);
  }

  /**
   * Sets the subtitle displayed by the player.
   *
   * @param number - The ID of the player.
   * @param subtitle - The subtitle to set ('previous', 'next', 'off', 'on', or subtitle index).
   * @param enable - Whether to enable subtitles after setting (default: false).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetSubtitle(
    number: number,
    subtitle: "previous" | "next" | "off" | "on" | number,
    enable: boolean = false
  ): Promise<string> {
    const params = { number, subtitle, enable };
    return this.sendMessage("Player.SetSubtitle", params);
  }

  /**
   * Sets the tempo of the current playback.
   *
   * @param number - The ID of the player.
   * @param tempo - The tempo value to set.
   * @returns A promise resolving to the new tempo.
   */
  async SetTempo(
    number: number,
    tempo: number | "increment" | "decrement"
  ): Promise<number> {
    const params = { number, tempo };
    return this.sendMessage("Player.SetTempo", params);
  }

  /**
   * Sets the video stream played by the player.
   *
   * @param number - The ID of the player.
   * @param stream - The video stream to set ('previous', 'next', or stream index).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetVideoStream(
    number: number,
    stream: "previous" | "next" | number
  ): Promise<string> {
    const params = { number, stream };
    return this.sendMessage("Player.SetVideoStream", params);
  }

  /**
   * Sets the view mode of the video player.
   *
   * @param viewmode - The view mode to set (custom or predefined).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetViewMode(
    viewmode: PlayerCustomViewMode | PlayerViewMode
  ): Promise<string> {
    const params = { viewmode };
    return this.sendMessage("Player.SetViewMode", params);
  }

  /**
   * Stops playback.
   *
   * @param number - The ID of the player.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Stop(number: number): Promise<string> {
    const params = { number };
    return this.sendMessage("Player.Stop", params);
  }

  /**
   * Zooms the current picture.
   *
   * @param number - The ID of the player.
   * @param zoom - The zoom action ('in', 'out', or zoom level).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Zoom(number: number, zoom: "in" | "out" | number): Promise<string> {
    const params = { number, zoom };
    return this.sendMessage("Player.Zoom", params);
  }
}
