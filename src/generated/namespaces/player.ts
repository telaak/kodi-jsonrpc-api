import { ISendMessage } from '../../';

type __ListItemAllKeys = keyof ListItemAll;
type __PlayerPropertyValueKeys = keyof PlayerPropertyValue;

import { PlayerId } from '../types/PlayerId';
import { PlayerAddSubtitleParams } from '../types/PlayerAddSubtitleParams';
import { PlayerGetAudioDelayResponse } from '../types/PlayerGetAudioDelayResponse';
import { ListFieldsAll } from '../types/ListFieldsAll';
import { ListItemAll } from '../types/ListItemAll';
import { PlayerGetItemParams } from '../types/PlayerGetItemParams';
import { PlayerGetItemResponse } from '../types/PlayerGetItemResponse';
import { PlayerGetPlayersParams } from '../types/PlayerGetPlayersParams';
import { PlayerPropertyValue } from '../types/PlayerPropertyValue';
import { PlayerGetPropertiesParams } from '../types/PlayerGetPropertiesParams';
import { PlayerViewMode } from '../types/PlayerViewMode';
import { PlayerGetViewModeResponse } from '../types/PlayerGetViewModeResponse';
import { PlayerGoToParams } from '../types/PlayerGoToParams';
import { PlayerMoveParams } from '../types/PlayerMoveParams';
import { PlayerOpenParams } from '../types/PlayerOpenParams';
import { GlobalToggle } from '../types/GlobalToggle';
import { PlayerSpeed } from '../types/PlayerSpeed';
import { PlayerPlayPauseParams } from '../types/PlayerPlayPauseParams';
import { PlayerRotateParams } from '../types/PlayerRotateParams';
import { PlayerPositionPercentage } from '../types/PlayerPositionPercentage';
import { GlobalTime } from '../types/GlobalTime';
import { PlayerSeekParams } from '../types/PlayerSeekParams';
import { PlayerSeekResponse } from '../types/PlayerSeekResponse';
import { PlayerSetAudioDelayParams } from '../types/PlayerSetAudioDelayParams';
import { PlayerSetAudioDelayResponse } from '../types/PlayerSetAudioDelayResponse';
import { PlayerSetAudioStreamParams } from '../types/PlayerSetAudioStreamParams';
import { PlayerSetPartymodeParams } from '../types/PlayerSetPartymodeParams';
import { PlayerSetRepeatParams } from '../types/PlayerSetRepeatParams';
import { PlayerSetShuffleParams } from '../types/PlayerSetShuffleParams';
import { PlayerSetSpeedParams } from '../types/PlayerSetSpeedParams';
import { PlayerSetSubtitleParams } from '../types/PlayerSetSubtitleParams';
import { PlayerTempo } from '../types/PlayerTempo';
import { PlayerSetTempoParams } from '../types/PlayerSetTempoParams';
import { PlayerSetVideoStreamParams } from '../types/PlayerSetVideoStreamParams';
import { PlayerSetViewModeParams } from '../types/PlayerSetViewModeParams';
import { PlayerStopParams } from '../types/PlayerStopParams';
import { PlayerZoomParams } from '../types/PlayerZoomParams';


export class KodiPlayerNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Add subtitle to the player
   * @param playerid PlayerId
   * @param subtitle string
   * @returns string
   */
  async AddSubtitle(params: PlayerAddSubtitleParams): Promise<string> {
    return this.sendMessage<string>("Player.AddSubtitle", params);
  }

  /**
   * Returns all active players
   * @returns unknown[]
   */
  async GetActivePlayers(): Promise<unknown[]> {
    return this.sendMessage<unknown[]>("Player.GetActivePlayers", {});
  }

  /**
   * Get the audio delay for the current playback
   * @returns PlayerGetAudioDelayResponse
   */
  async GetAudioDelay(): Promise<PlayerGetAudioDelayResponse> {
    return this.sendMessage<PlayerGetAudioDelayResponse>("Player.GetAudioDelay", {});
  }

  async GetItem<P extends readonly __ListItemAllKeys[]>(params: { playerid: PlayerId; properties: P}): Promise<Pick<ListItemAll, Extract<P[number], __ListItemAllKeys>>>;
  /**
   * Retrieves the currently played item
   * @param playerid PlayerId
   * @param properties ListFieldsAll (optional)
   * @returns PlayerGetItemResponse
   */
  async GetItem(params: PlayerGetItemParams): Promise<ListItemAll>;
  async GetItem(params: any) {
    return this.sendMessage<ListItemAll>("Player.GetItem", params);
  }

  /**
   * Get a list of available players
   * @param media "all" | "video" | "audio" (optional)
   * @returns unknown[]
   */
  async GetPlayers(params: PlayerGetPlayersParams): Promise<unknown[]> {
    return this.sendMessage<unknown[]>("Player.GetPlayers", params);
  }

  async GetProperties<P extends readonly __PlayerPropertyValueKeys[]>(params: { playerid: PlayerId; properties: P}): Promise<Pick<PlayerPropertyValue, Extract<P[number], __PlayerPropertyValueKeys>>>;
  /**
   * Retrieves the values of the given properties
   * @param playerid PlayerId
   * @param properties PlayerPropertyName[]
   * @returns PlayerPropertyValue
   */
  async GetProperties(params: PlayerGetPropertiesParams): Promise<PlayerPropertyValue>;
  async GetProperties(params: any) {
    return this.sendMessage<PlayerPropertyValue>("Player.GetProperties", params);
  }

  /**
   * Get view mode of video player
   * @returns PlayerGetViewModeResponse
   */
  async GetViewMode(): Promise<PlayerGetViewModeResponse> {
    return this.sendMessage<PlayerGetViewModeResponse>("Player.GetViewMode", {});
  }

  /**
   * Go to previous/next/specific item in the playlist
   * @param playerid PlayerId
   * @param to "previous" | "next" | PlaylistPosition
   * @returns string
   */
  async GoTo(params: PlayerGoToParams): Promise<string> {
    return this.sendMessage<string>("Player.GoTo", params);
  }

  /**
   * If picture is zoomed move viewport left/right/up/down otherwise skip previous/next
   * @param playerid PlayerId
   * @param direction "left" | "right" | "up" | "down"
   * @returns string
   */
  async Move(params: PlayerMoveParams): Promise<string> {
    return this.sendMessage<string>("Player.Move", params);
  }

  /**
   * Start playback of either the playlist with the given ID, a slideshow with the pictures from the given directory or a single file or an item from the database.
   * @param item PlayerOpenParamsItemOption0 | PlaylistItem | PlayerOpenParamsItemOption2 | PlayerOpenParamsItemOption3 | PlayerOpenParamsItemOption4 | PlayerOpenParamsItemOption5 | PlayerOpenParamsItemOption6 (optional)
   * @param options PlayerOpenParamsOptions (optional)
   * @returns string
   */
  async Open(params: PlayerOpenParams): Promise<string> {
    return this.sendMessage<string>("Player.Open", params);
  }

  /**
   * Pauses or unpause playback and returns the new state
   * @param playerid PlayerId
   * @param play GlobalToggle (optional)
   * @returns PlayerSpeed
   */
  async PlayPause(params: PlayerPlayPauseParams): Promise<PlayerSpeed> {
    return this.sendMessage<PlayerSpeed>("Player.PlayPause", params);
  }

  /**
   * Rotates current picture
   * @param playerid PlayerId
   * @param value "clockwise" | "counterclockwise" (optional)
   * @returns string
   */
  async Rotate(params: PlayerRotateParams): Promise<string> {
    return this.sendMessage<string>("Player.Rotate", params);
  }

  /**
   * Seek through the playing item
   * @param playerid PlayerId
   * @param value PlayerSeekParamsValueOption0 | PlayerSeekParamsValueOption1 | PlayerSeekParamsValueOption2 | PlayerSeekParamsValueOption3
   * @returns PlayerSeekResponse
   */
  async Seek(params: PlayerSeekParams): Promise<PlayerSeekResponse> {
    return this.sendMessage<PlayerSeekResponse>("Player.Seek", params);
  }

  /**
   * Set the audio delay for the current playback
   * @param playerid PlayerId
   * @param offset number | GlobalIncrementDecrement
   * @returns PlayerSetAudioDelayResponse
   */
  async SetAudioDelay(params: PlayerSetAudioDelayParams): Promise<PlayerSetAudioDelayResponse> {
    return this.sendMessage<PlayerSetAudioDelayResponse>("Player.SetAudioDelay", params);
  }

  /**
   * Set the audio stream played by the player
   * @param playerid PlayerId
   * @param stream "previous" | "next" | number
   * @returns string
   */
  async SetAudioStream(params: PlayerSetAudioStreamParams): Promise<string> {
    return this.sendMessage<string>("Player.SetAudioStream", params);
  }

  /**
   * Turn partymode on or off
   * @param playerid PlayerId
   * @param partymode GlobalToggle
   * @returns string
   */
  async SetPartymode(params: PlayerSetPartymodeParams): Promise<string> {
    return this.sendMessage<string>("Player.SetPartymode", params);
  }

  /**
   * Set the repeat mode of the player
   * @param playerid PlayerId
   * @param repeat PlayerRepeat | "cycle"
   * @returns string
   */
  async SetRepeat(params: PlayerSetRepeatParams): Promise<string> {
    return this.sendMessage<string>("Player.SetRepeat", params);
  }

  /**
   * Shuffle/Unshuffle items in the player
   * @param playerid PlayerId
   * @param shuffle GlobalToggle
   * @returns string
   */
  async SetShuffle(params: PlayerSetShuffleParams): Promise<string> {
    return this.sendMessage<string>("Player.SetShuffle", params);
  }

  /**
   * Set the speed of the current playback
   * @param playerid PlayerId
   * @param speed -32 | -16 | -8 | -4 | -2 | -1 | 0 | 1 | 2 | 4 | 8 | 16 | 32 | GlobalIncrementDecrement
   * @returns PlayerSpeed
   */
  async SetSpeed(params: PlayerSetSpeedParams): Promise<PlayerSpeed> {
    return this.sendMessage<PlayerSpeed>("Player.SetSpeed", params);
  }

  /**
   * Set the subtitle displayed by the player
   * @param playerid PlayerId
   * @param subtitle "previous" | "next" | "off" | "on" | number
   * @param enable boolean (optional)
   * @returns string
   */
  async SetSubtitle(params: PlayerSetSubtitleParams): Promise<string> {
    return this.sendMessage<string>("Player.SetSubtitle", params);
  }

  /**
   * Set the tempo of the current playback
   * @param playerid PlayerId
   * @param tempo number | GlobalIncrementDecrement
   * @returns PlayerTempo
   */
  async SetTempo(params: PlayerSetTempoParams): Promise<PlayerTempo> {
    return this.sendMessage<PlayerTempo>("Player.SetTempo", params);
  }

  /**
   * Set the video stream played by the player
   * @param playerid PlayerId
   * @param stream "previous" | "next" | number
   * @returns string
   */
  async SetVideoStream(params: PlayerSetVideoStreamParams): Promise<string> {
    return this.sendMessage<string>("Player.SetVideoStream", params);
  }

  /**
   * Set view mode of video player
   * @param viewmode PlayerCustomViewMode | PlayerViewMode
   * @returns string
   */
  async SetViewMode(params: PlayerSetViewModeParams): Promise<string> {
    return this.sendMessage<string>("Player.SetViewMode", params);
  }

  /**
   * Stops playback
   * @param playerid PlayerId
   * @returns string
   */
  async Stop(params: PlayerStopParams): Promise<string> {
    return this.sendMessage<string>("Player.Stop", params);
  }

  /**
   * Zoom current picture
   * @param playerid PlayerId
   * @param zoom "in" | "out" | number
   * @returns string
   */
  async Zoom(params: PlayerZoomParams): Promise<string> {
    return this.sendMessage<string>("Player.Zoom", params);
  }

}