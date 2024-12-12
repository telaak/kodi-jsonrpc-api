// Functions Block
// These functions correspond to the Player methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Player" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiPlayerNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  PlayerId,
  PlayerType,
  PlayerRepeat,
  PlayerViewMode,
  PlayerCustomViewMode,
  PlayerPositionPercentage,
  PlayerPositionTime,
  PlayerTempo,
  PlayerSpeed,
  PlayerPropertyName,
  PlayerPropertyValue,
  PlayerFieldsBroadcast,
  PlayerFieldsChannel,
  PlayerFieldsRecording,
  PlayerFieldsTimer,
  PlayerFieldsMovie,
  PlayerFieldsTVShow,
  PlayerFieldsAll,
  PlayerMediaItem,
  PlayerOptions,
  PlayerGoTo,
  PlayerMoveDirection,
  PlayerSeekValue,
  PlayerSetSubtitleOptions,
  PlayerSetViewModeOptions,
  PlayerFieldsCustomViewMode,
  PlayerFieldsViewMode,
  PlayerFieldsAllProperties,
  PlayerDetails,
  PlayerDetailsExtended,
} from "../types/player"; // Adjust the import path as necessary

export class KodiPlayerNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Adds a subtitle to the player.
   *
   * @param playerid - The ID of the player.
   * @param subtitle - The local path or remote URL to the subtitle file to load.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async AddSubtitle(playerid: PlayerId, subtitle: string): Promise<string> {
    const params = { playerid, subtitle };
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
   * @param playerid - The ID of the player.
   * @param properties - The properties to retrieve for the item.
   * @returns A promise resolving to the currently played item.
   */
  async GetItem(
    playerid: PlayerId,
    properties?: string[]
  ): Promise<{ item: PlayerMediaItem }> {
    const params = { playerid, properties };
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
      type: PlayerType;
    }>
  > {
    const params = { media };
    return this.sendMessage("Player.GetPlayers", params);
  }

  /**
   * Retrieves the values of the given properties for a player.
   *
   * @param playerid - The ID of the player.
   * @param properties - The properties to retrieve.
   * @returns A promise resolving to the requested properties and their values.
   */
  async GetProperties(
    playerid: PlayerId,
    properties: PlayerPropertyName[]
  ): Promise<PlayerPropertyValue> {
    const params = { playerid, properties };
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
   * @param playerid - The ID of the player.
   * @param to - The target to go to ('previous', 'next', or a specific position).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async GoTo(playerid: PlayerId, to: PlayerGoTo): Promise<string> {
    const params = { playerid, to };
    return this.sendMessage("Player.GoTo", params);
  }

  /**
   * Moves the viewport or skips playback based on the current state.
   *
   * @param playerid - The ID of the player.
   * @param direction - The direction to move ('left', 'right', 'up', 'down').
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Move(
    playerid: PlayerId,
    direction: PlayerMoveDirection
  ): Promise<string> {
    const params = { playerid, direction };
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
    item: any, // Replace 'any' with specific types if available
    options?: PlayerOptions
  ): Promise<string> {
    const params = { item, options };
    return this.sendMessage("Player.Open", params);
  }

  /**
   * Pauses or unpauses playback and returns the new state.
   *
   * @param playerid - The ID of the player.
   * @param play - The toggle state ('toggle' by default).
   * @returns A promise resolving to the new playback speed.
   */
  async PlayPause(
    playerid: PlayerId,
    play: boolean | "toggle" = "toggle"
  ): Promise<PlayerSpeed> {
    const params = { playerid, play };
    return this.sendMessage("Player.PlayPause", params);
  }

  /**
   * Rotates the current picture.
   *
   * @param playerid - The ID of the player.
   * @param value - The direction to rotate ('clockwise' or 'counterclockwise').
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Rotate(
    playerid: PlayerId,
    value: "clockwise" | "counterclockwise"
  ): Promise<string> {
    const params = { playerid, value };
    return this.sendMessage("Player.Rotate", params);
  }

  /**
   * Seeks through the playing item.
   *
   * @param playerid - The ID of the player.
   * @param value - The seek value (percentage, time, step, or seconds).
   * @returns A promise resolving to the new playback position.
   */
  async Seek(
    playerid: PlayerId,
    value: PlayerSeekValue
  ): Promise<{ percentage?: number; time?: string; totaltime?: string }> {
    const params = { playerid, value };
    return this.sendMessage("Player.Seek", params);
  }

  /**
   * Sets the audio delay for the current playback.
   *
   * @param playerid - The ID of the player.
   * @param offset - The offset value to set.
   * @returns A promise resolving to the new audio delay offset.
   */
  async SetAudioDelay(
    playerid: PlayerId,
    offset: number | "increment" | "decrement"
  ): Promise<{ offset: number }> {
    const params = { playerid, offset };
    return this.sendMessage("Player.SetAudioDelay", params);
  }

  /**
   * Sets the audio stream played by the player.
   *
   * @param playerid - The ID of the player.
   * @param stream - The audio stream to set ('previous', 'next', or stream index).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetAudioStream(
    playerid: PlayerId,
    stream: "previous" | "next" | number
  ): Promise<string> {
    const params = { playerid, stream };
    return this.sendMessage("Player.SetAudioStream", params);
  }

  /**
   * Turns partymode on or off.
   *
   * @param playerid - The ID of the player.
   * @param partymode - The toggle state ('toggle' by default).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetPartymode(
    playerid: PlayerId,
    partymode: boolean | "toggle"
  ): Promise<string> {
    const params = { playerid, partymode };
    return this.sendMessage("Player.SetPartymode", params);
  }

  /**
   * Sets the repeat mode of the player.
   *
   * @param playerid - The ID of the player.
   * @param repeat - The repeat mode ('off', 'one', 'all', or 'cycle').
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetRepeat(
    playerid: PlayerId,
    repeat: PlayerRepeat | "cycle"
  ): Promise<string> {
    const params = { playerid, repeat };
    return this.sendMessage("Player.SetRepeat", params);
  }

  /**
   * Shuffles or unshuffles items in the player.
   *
   * @param playerid - The ID of the player.
   * @param shuffle - The toggle state ('toggle' by default).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetShuffle(
    playerid: PlayerId,
    shuffle: boolean | "toggle"
  ): Promise<string> {
    const params = { playerid, shuffle };
    return this.sendMessage("Player.SetShuffle", params);
  }

  /**
   * Sets the speed of the current playback.
   *
   * @param playerid - The ID of the player.
   * @param speed - The speed value to set (-32 to 32 or increment/decrement).
   * @returns A promise resolving to the new playback speed.
   */
  async SetSpeed(
    playerid: PlayerId,
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
  ): Promise<PlayerSpeed> {
    const params = { playerid, speed };
    return this.sendMessage("Player.SetSpeed", params);
  }

  /**
   * Sets the subtitle displayed by the player.
   *
   * @param playerid - The ID of the player.
   * @param subtitle - The subtitle to set ('previous', 'next', 'off', 'on', or subtitle index).
   * @param enable - Whether to enable subtitles after setting (default: false).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetSubtitle(
    playerid: PlayerId,
    subtitle: "previous" | "next" | "off" | "on" | number,
    enable: boolean = false
  ): Promise<string> {
    const params = { playerid, subtitle, enable };
    return this.sendMessage("Player.SetSubtitle", params);
  }

  /**
   * Sets the tempo of the current playback.
   *
   * @param playerid - The ID of the player.
   * @param tempo - The tempo value to set.
   * @returns A promise resolving to the new tempo.
   */
  async SetTempo(
    playerid: PlayerId,
    tempo: number | "increment" | "decrement"
  ): Promise<PlayerTempo> {
    const params = { playerid, tempo };
    return this.sendMessage("Player.SetTempo", params);
  }

  /**
   * Sets the video stream played by the player.
   *
   * @param playerid - The ID of the player.
   * @param stream - The video stream to set ('previous', 'next', or stream index).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async SetVideoStream(
    playerid: PlayerId,
    stream: "previous" | "next" | number
  ): Promise<string> {
    const params = { playerid, stream };
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
   * @param playerid - The ID of the player.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Stop(playerid: PlayerId): Promise<string> {
    const params = { playerid };
    return this.sendMessage("Player.Stop", params);
  }

  /**
   * Zooms the current picture.
   *
   * @param playerid - The ID of the player.
   * @param zoom - The zoom action ('in', 'out', or zoom level).
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Zoom(playerid: PlayerId, zoom: "in" | "out" | number): Promise<string> {
    const params = { playerid, zoom };
    return this.sendMessage("Player.Zoom", params);
  }
}
