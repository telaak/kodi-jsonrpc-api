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
   */
  async AddSubtitle(params: PlayerAddSubtitleParams): Promise<string> {
    return this.sendMessage<string>("Player.AddSubtitle", params);
  }

  /**
   * Returns all active players
   */
  async GetActivePlayers(): Promise<unknown[]> {
    return this.sendMessage<unknown[]>("Player.GetActivePlayers", {});
  }

  /**
   * Get the audio delay for the current playback
   */
  async GetAudioDelay(): Promise<PlayerGetAudioDelayResponse> {
    return this.sendMessage<PlayerGetAudioDelayResponse>("Player.GetAudioDelay", {});
  }

  async GetItem<P extends readonly __ListItemAllKeys[]>(params: { playerid: PlayerId; properties: P}): Promise<Pick<ListItemAll, Extract<P[number], __ListItemAllKeys>>>;
  /**
   * Retrieves the currently played item
   */
  async GetItem(params: PlayerGetItemParams): Promise<ListItemAll>;
  async GetItem(params: any) {
    return this.sendMessage<ListItemAll>("Player.GetItem", params);
  }

  /**
   * Get a list of available players
   */
  async GetPlayers(params: PlayerGetPlayersParams): Promise<unknown[]> {
    return this.sendMessage<unknown[]>("Player.GetPlayers", params);
  }

  async GetProperties<P extends readonly __PlayerPropertyValueKeys[]>(params: { playerid: PlayerId; properties: P}): Promise<Pick<PlayerPropertyValue, Extract<P[number], __PlayerPropertyValueKeys>>>;
  /**
   * Retrieves the values of the given properties
   */
  async GetProperties(params: PlayerGetPropertiesParams): Promise<PlayerPropertyValue>;
  async GetProperties(params: any) {
    return this.sendMessage<PlayerPropertyValue>("Player.GetProperties", params);
  }

  /**
   * Get view mode of video player
   */
  async GetViewMode(): Promise<PlayerGetViewModeResponse> {
    return this.sendMessage<PlayerGetViewModeResponse>("Player.GetViewMode", {});
  }

  /**
   * Go to previous/next/specific item in the playlist
   */
  async GoTo(params: PlayerGoToParams): Promise<string> {
    return this.sendMessage<string>("Player.GoTo", params);
  }

  /**
   * If picture is zoomed move viewport left/right/up/down otherwise skip previous/next
   */
  async Move(params: PlayerMoveParams): Promise<string> {
    return this.sendMessage<string>("Player.Move", params);
  }

  /**
   * Start playback of either the playlist with the given ID, a slideshow with the pictures from the given directory or a single file or an item from the database.
   */
  async Open(params: PlayerOpenParams): Promise<string> {
    return this.sendMessage<string>("Player.Open", params);
  }

  /**
   * Pauses or unpause playback and returns the new state
   */
  async PlayPause(params: PlayerPlayPauseParams): Promise<PlayerSpeed> {
    return this.sendMessage<PlayerSpeed>("Player.PlayPause", params);
  }

  /**
   * Rotates current picture
   */
  async Rotate(params: PlayerRotateParams): Promise<string> {
    return this.sendMessage<string>("Player.Rotate", params);
  }

  /**
   * Seek through the playing item
   */
  async Seek(params: PlayerSeekParams): Promise<PlayerSeekResponse> {
    return this.sendMessage<PlayerSeekResponse>("Player.Seek", params);
  }

  /**
   * Set the audio delay for the current playback
   */
  async SetAudioDelay(params: PlayerSetAudioDelayParams): Promise<PlayerSetAudioDelayResponse> {
    return this.sendMessage<PlayerSetAudioDelayResponse>("Player.SetAudioDelay", params);
  }

  /**
   * Set the audio stream played by the player
   */
  async SetAudioStream(params: PlayerSetAudioStreamParams): Promise<string> {
    return this.sendMessage<string>("Player.SetAudioStream", params);
  }

  /**
   * Turn partymode on or off
   */
  async SetPartymode(params: PlayerSetPartymodeParams): Promise<string> {
    return this.sendMessage<string>("Player.SetPartymode", params);
  }

  /**
   * Set the repeat mode of the player
   */
  async SetRepeat(params: PlayerSetRepeatParams): Promise<string> {
    return this.sendMessage<string>("Player.SetRepeat", params);
  }

  /**
   * Shuffle/Unshuffle items in the player
   */
  async SetShuffle(params: PlayerSetShuffleParams): Promise<string> {
    return this.sendMessage<string>("Player.SetShuffle", params);
  }

  /**
   * Set the speed of the current playback
   */
  async SetSpeed(params: PlayerSetSpeedParams): Promise<PlayerSpeed> {
    return this.sendMessage<PlayerSpeed>("Player.SetSpeed", params);
  }

  /**
   * Set the subtitle displayed by the player
   */
  async SetSubtitle(params: PlayerSetSubtitleParams): Promise<string> {
    return this.sendMessage<string>("Player.SetSubtitle", params);
  }

  /**
   * Set the tempo of the current playback
   */
  async SetTempo(params: PlayerSetTempoParams): Promise<PlayerTempo> {
    return this.sendMessage<PlayerTempo>("Player.SetTempo", params);
  }

  /**
   * Set the video stream played by the player
   */
  async SetVideoStream(params: PlayerSetVideoStreamParams): Promise<string> {
    return this.sendMessage<string>("Player.SetVideoStream", params);
  }

  /**
   * Set view mode of video player
   */
  async SetViewMode(params: PlayerSetViewModeParams): Promise<string> {
    return this.sendMessage<string>("Player.SetViewMode", params);
  }

  /**
   * Stops playback
   */
  async Stop(params: PlayerStopParams): Promise<string> {
    return this.sendMessage<string>("Player.Stop", params);
  }

  /**
   * Zoom current picture
   */
  async Zoom(params: PlayerZoomParams): Promise<string> {
    return this.sendMessage<string>("Player.Zoom", params);
  }

}