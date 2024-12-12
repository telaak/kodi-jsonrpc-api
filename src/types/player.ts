// Types and Interfaces Block
// These types and interfaces are specific to the Player methods and do not exist in koditestExports.ts

import { PlaylistPosition } from "./playlist";

/**
 * PlayerId ($ref: "Player.Id")
 * Represents the unique identifier for a player.
 */
export type PlayerId = number;

/**
 * PlayerType ($ref: "Player.Type")
 * Enum for types of players.
 */
export type PlayerType = "internal" | "external" | "remote";

/**
 * PlayerRepeat ($ref: "Player.Repeat")
 * Enum for repeat modes.
 */
export type PlayerRepeat = "off" | "one" | "all";

/**
 * PlayerViewMode ($ref: "Player.ViewMode")
 * Enum for view modes.
 */
export type PlayerViewMode = "default" | "fullscreen" | "windowed";

/**
 * PlayerCustomViewMode ($ref: "Player.CustomViewMode")
 * Represents a custom view mode.
 */
export type PlayerCustomViewMode = {
  nonlinearstretch?: "increase" | "decrease" | boolean;
  pixelratio?: "increase" | "decrease" | number;
  verticalshift?: "increase" | "decrease" | number;
  zoom?: "increase" | "decrease" | number;
};

/**
 * PlayerPositionPercentage ($ref: "Player.Position.Percentage")
 * Represents a percentage position in playback.
 */
export type PlayerPositionPercentage = number;

/**
 * PlayerPositionTime ($ref: "Player.Position.Time")
 * Represents a time position in playback.
 */
export type PlayerPositionTime = {
  hours: number;
  milliseconds: number;
  minutes: number;
  seconds: number;
};

/**
 * PlayerTempo ($ref: "Player.Tempo")
 * Represents the tempo of playback.
 */
export type PlayerTempo = number;

/**
 * PlayerSpeed ($ref: "Player.Speed")
 * Represents the playback speed.
 */
export type PlayerSpeed = number;

/**
 * PlayerPropertyName ($ref: "Player.Property.Name")
 * Enum for player property names.
 */
export type PlayerPropertyName =
  | "type"
  | "partymode"
  | "speed"
  | "time"
  | "percentage"
  | "totaltime"
  | "playlistid"
  | "position"
  | "repeat"
  | "shuffled"
  | "canseek"
  | "canchangespeed"
  | "canmove"
  | "canzoom"
  | "canrotate"
  | "canshuffle"
  | "canrepeat"
  | "currentaudiostream"
  | "audiostreams"
  | "subtitleenabled"
  | "currentsubtitle"
  | "subtitles"
  | "live"
  | "currentvideostream"
  | "videostreams"
  | "cachepercentage";

/**
 * PlayerPropertyValue ($ref: "Player.Property.Value")
 * Represents the value of a player property.
 */
export type PlayerPropertyValue = any; // Replace with specific types based on kodi.json

/**
 * PlayerFieldsBroadcast ($ref: "Player.Fields.Broadcast")
 * Represents fields related to broadcast properties.
 */
export interface PlayerFieldsBroadcast {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsChannel ($ref: "Player.Fields.Channel")
 * Represents fields related to channel properties.
 */
export interface PlayerFieldsChannel {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsRecording ($ref: "Player.Fields.Recording")
 * Represents fields related to recording properties.
 */
export interface PlayerFieldsRecording {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsTimer ($ref: "Player.Fields.Timer")
 * Represents fields related to timer properties.
 */
export interface PlayerFieldsTimer {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsMovie ($ref: "Player.Fields.Movie")
 * Represents fields related to movie properties.
 */
export interface PlayerFieldsMovie {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsTVShow ($ref: "Player.Fields.TVShow")
 * Represents fields related to TV show properties.
 */
export interface PlayerFieldsTVShow {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsAll ($ref: "Player.Fields.All")
 * Represents all possible player fields.
 */
export interface PlayerFieldsAll {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsTVShow ($ref: "Player.Fields.TVShow")
 * Represents fields related to TV show properties.
 */
export interface PlayerFieldsTVShow {
  // Define properties as per kodi.json
}

/**
 * PlayerMediaItem ($ref: "Player.MediaItem")
 * Represents a media item for the player.
 */
export interface PlayerMediaItem {
  // Define properties as per kodi.json
}

/**
 * PlayerOptions ($ref: "Player.Options")
 * Represents options for the player.
 */
export interface PlayerOptions {
  playername?: string | null;
  repeat?: PlayerRepeat | null;
  resume?: boolean | PlayerPositionPercentage | PlayerPositionTime;
  shuffled?: boolean | null;
  // Add additional properties as defined in kodi.json
}

/**
 * PlayerGoTo ($ref: "Player.GoTo")
 * Represents the target for the GoTo method.
 */
export type PlayerGoTo = "previous" | "next" | PlaylistPosition;

/**
 * PlayerMoveDirection ($ref: "Player.Move.Direction")
 * Enum for move directions.
 */
export type PlayerMoveDirection = "left" | "right" | "up" | "down";

/**
 * PlayerSeekValue ($ref: "Player.Seek.Value")
 * Represents the value for the Seek method.
 */
export type PlayerSeekValue =
  | { percentage: PlayerPositionPercentage }
  | { time: PlayerPositionTime }
  | { step: "smallforward" | "smallbackward" | "bigforward" | "bigbackward" }
  | { seconds: number };

/**
 * PlayerSetSubtitleOptions ($ref: "Player.SetSubtitle.Options")
 * Represents options for setting subtitles.
 */
export interface PlayerSetSubtitleOptions {
  enable?: boolean;
}

/**
 * PlayerSetViewModeOptions ($ref: "Player.SetViewMode.Options")
 * Represents options for setting the view mode.
 */
export interface PlayerSetViewModeOptions {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsCustomViewMode ($ref: "Player.Fields.CustomViewMode")
 * Represents fields related to custom view modes.
 */
export interface PlayerFieldsCustomViewMode {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsViewMode ($ref: "Player.Fields.ViewMode")
 * Represents fields related to view modes.
 */
export interface PlayerFieldsViewMode {
  // Define properties as per kodi.json
}

/**
 * PlayerFieldsAllProperties ($ref: "Player.Fields.AllProperties")
 * Represents all possible player properties.
 */
export interface PlayerFieldsAllProperties {
  // Define properties as per kodi.json
}

/**
 * PlayerDetails ($ref: "Player.Details")
 * Represents the details of a player.
 */
export interface PlayerDetails {
  playerid: PlayerId;
  playertype: PlayerType;
  type: PlayerType;
  // Additional properties as defined in kodi.json
}

/**
 * PlayerDetailsExtended ($ref: "Player.Details.Extended")
 * Represents extended details of a player.
 */
export interface PlayerDetailsExtended extends PlayerDetails {
  // Additional extended properties as defined in kodi.json
}
