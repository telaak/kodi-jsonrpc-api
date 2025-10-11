/**
 * number ($ref: "Player.Id")
 * Represents the unique identifier for a player.
 */
/**
 * PlayerMediaItem ($ref: "Player.MediaItem")
 * Represents a media item for the player.
 */
/**
 * PlayerGetItem (player-specific mapping of `List.Item.All`)
 * This type is the shape returned by `Player.GetItem` (it extends the
 * shared `ListItemCommon` with player/list-specific extras and `streamdetails`).
 */

/**
 * PlayerMediaType ($ref: "Player.Type")
 * Enum for media types that a player handles.
 */
export type PlayerMediaType = "video" | "audio" | "picture";

/**
 * PlayerPlayertype ($ref: "Player playertype")
 * Enum for the transport/type reported for a player instance (response field "playertype").
 */
export type PlayerPlayertype = "internal" | "external" | "remote";
export type PlayerRepeat = "off" | "one" | "all";

/**
 * PlayerViewMode ($ref: "Player.ViewMode")
 * Enum for view modes.
 */
/**
 * PlayerViewMode ($ref: "Player.ViewMode")
 */
export type PlayerViewMode =
  | "normal"
  | "zoom"
  | "stretch4x3"
  | "widezoom"
  | "stretch16x9"
  | "original"
  | "stretch16x9nonlin"
  | "zoom120width"
  | "zoom110width";

/**
 * PlayerCustomViewMode ($ref: "Player.CustomViewMode")
 * Represents a custom view mode.
 */
export type PlayerCustomViewMode = {
  nonlinearstretch?: "increase" | "decrease" | boolean | null;
  pixelratio?: "increase" | "decrease" | number | null;
  verticalshift?: "increase" | "decrease" | number | null;
  zoom?: "increase" | "decrease" | number | null;
};

/**
 * PlayerPositionPercentage ($ref: "Player.Position.Percentage")
 * Represents a percentage position in playback.
 */
// PlayerPositionPercentage was a simple alias for number; use number directly where needed.

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
// PlayerTempo was a simple alias for number; use number directly where needed.

/**
 * PlayerSpeed ($ref: "Player.Speed")
 * Represents the playback speed.
 */
// PlayerSpeed was a simple alias for number; use number directly where needed.

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
  | "string"
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

/**
 * PlayerAudioStream ($ref: "Player.Audio.Stream")
 */
import { PlayerAudioStream, PlayerVideoStream, PlayerSubtitle, CastMember, Contributor, CustomProperties, MediaUniqueID, MediaStreamDetails } from "./media";

// Shared media types are imported from ./media

/**
 * PlayerPropertyValue ($ref: "Player.Property.Value")
 * Concrete mapping of player property values from kodi.json
 */
export interface PlayerPropertyValueObject {
  audiostreams?: PlayerAudioStream[];
  cachepercentage?: number;
  canchangespeed?: boolean;
  canmove?: boolean;
  canrepeat?: boolean;
  canrotate?: boolean;
  canseek?: boolean;
  canshuffle?: boolean;
  canzoom?: boolean;
  currentaudiostream?: PlayerAudioStream;
  currentsubtitle?: PlayerSubtitle;
  currentvideostream?: PlayerVideoStream;
  live?: boolean;
  partymode?: boolean;
  percentage?: number;
  string?: number | string;
  position?: number;
  repeat?: PlayerRepeat;
  shuffled?: boolean;
  speed?: number;
  subtitleenabled?: boolean;
  subtitles?: PlayerSubtitle[];
  time?: PlayerPositionTime;
  totaltime?: PlayerPositionTime;
  type?: PlayerMediaType;
  videostreams?: PlayerVideoStream[];
}

// keep backward-compatible alias used elsewhere
export type PlayerPropertyValue = PlayerPropertyValueObject;

// Removed unused PlayerFields* placeholder interfaces to reduce noise.

/**
 * PlayerFieldsBroadcast ($ref: "PVR.Fields.Broadcast")
 */
export type PlayerFieldsBroadcast =
  | "title"
  | "plot"
  | "plotoutline"
  | "starttime"
  | "endtime"
  | "runtime"
  | "progress"
  | "progresspercentage"
  | "genre"
  | "episodename"
  | "episodenum"
  | "episodepart"
  | "firstaired"
  | "hastimer"
  | "isactive"
  | "parentalrating"
  | "wasactive"
  | "thumbnail"
  | "rating"
  | "originaltitle"
  | "cast"
  | "director"
  | "writer"
  | "year"
  | "imdbnumber"
  | "hastimerrule"
  | "hasrecording"
  | "recording"
  | "isseries"
  | "isplayable"
  | "clientid"
  | "hasreminder"
  | "seasonnum";

/**
 * PlayerFieldsChannel ($ref: "PVR.Fields.Channel")
 */
export type PlayerFieldsChannel =
  | "thumbnail"
  | "channeltype"
  | "hidden"
  | "locked"
  | "channel"
  | "lastplayed"
  | "broadcastnow"
  | "broadcastnext"
  | "uniqueid"
  | "icon"
  | "channelnumber"
  | "subchannelnumber"
  | "isrecording"
  | "hasarchive"
  | "clientid";

/**
 * PlayerFieldsRecording ($ref: "PVR.Fields.Recording")
 */
export type PlayerFieldsRecording =
  | "title"
  | "plot"
  | "plotoutline"
  | "genre"
  | "playcount"
  | "resume"
  | "channel"
  | "starttime"
  | "endtime"
  | "runtime"
  | "lifetime"
  | "icon"
  | "art"
  | "streamurl"
  | "file"
  | "directory"
  | "radio"
  | "isdeleted"
  | "epgeventid"
  | "channeluid"
  | "season"
  | "episode"
  | "showtitle"
  | "clientid";

/**
 * PlayerFieldsTimer ($ref: "PVR.Fields.Timer")
 */
export type PlayerFieldsTimer =
  | "title"
  | "summary"
  | "channelid"
  | "isradio"
  | "istimerrule"
  | "ismanual"
  | "starttime"
  | "endtime"
  | "runtime"
  | "lifetime"
  | "firstday"
  | "weekdays"
  | "priority"
  | "startmargin"
  | "endmargin"
  | "state"
  | "file"
  | "directory"
  | "preventduplicateepisodes"
  | "startanytime"
  | "endanytime"
  | "epgsearchstring"
  | "fulltextepgsearch"
  | "recordinggroup"
  | "maxrecordings"
  | "epguid"
  | "isreadonly"
  | "isreminder"
  | "clientid"
  | "broadcastid";

/**
 * PlayerFieldsMovie ($ref: "Video.Fields.Movie")
 * (subset of video movie fields — include the common ones)
 */
export type PlayerFieldsMovie =
  | "title"
  | "genre"
  | "year"
  | "rating"
  | "director"
  | "trailer"
  | "tagline"
  | "plot"
  | "plotoutline"
  | "originaltitle"
  | "lastplayed"
  | "playcount"
  | "writer"
  | "studio"
  | "mpaa"
  | "cast"
  | "country"
  | "imdbnumber"
  | "runtime"
  | "set"
  | "showlink"
  | "streamdetails"
  | "top250"
  | "votes"
  | "fanart"
  | "thumbnail"
  | "file"
  | "sorttitle"
  | "resume"
  | "setid";

/**
 * PlayerFieldsTVShow ($ref: "Video.Fields.TVShow")
 */
export type PlayerFieldsTVShow =
  | "title"
  | "genre"
  | "year"
  | "rating"
  | "file"
  | "path"
  | "director"
  | "duration"
  | "plot"
  | "studio"
  | "mpaa"
  | "tagline"
  | "trailer"
  | "originaltitle"
  | "production"
  | "set"
  | "sorttitle"
  | "theme"
  | "writer"
  | "premiered"
  | "runtime"
  | "episodeguide"
  | "fanart"
  | "thumbnail"
  | "ratingimage"
  | "lastplayed"
  | "playcount";

/**
 * PlayerFieldsAll ($ref: "List.Fields.All")
 */
export type PlayerFieldsAll =
  | "title"
  | "artist"
  | "albumartist"
  | "genre"
  | "year"
  | "rating"
  | "album"
  | "track"
  | "duration"
  | "comment"
  | "lyrics"
  | "musicbrainztrackid"
  | "musicbrainzartistid"
  | "musicbrainzalbumid"
  | "musicbrainzalbumartistid"
  | "playcount"
  | "fanart"
  | "director"
  | "trailer"
  | "tagline"
  | "plot"
  | "plotoutline"
  | "originaltitle"
  | "lastplayed"
  | "writer"
  | "studio"
  | "mpaa"
  | "cast"
  | "country"
  | "imdbnumber"
  | "premiered"
  | "productioncode"
  | "runtime"
  | "set"
  | "showlink"
  | "streamdetails"
  | "top250"
  | "votes"
  | "firstaired"
  | "season"
  | "episode";

/**
 * PlayerFieldsCustomViewMode ($ref: "Player.CustomViewMode")
 */
export type PlayerFieldsCustomViewMode =
  | "nonlinearstretch"
  | "pixelratio"
  | "verticalshift"
  | "zoom";

/**
 * PlayerFieldsViewMode
 */
export type PlayerFieldsViewMode =
  | "nonlinearstretch"
  | "pixelratio"
  | "verticalshift"
  | "viewmode"
  | "zoom";

/**
 * PlayerFieldsAllProperties maps to available Player property names
 */
export type PlayerFieldsAllProperties = PlayerPropertyName;

/**
 * PlayerMediaItem ($ref: "Player.MediaItem")
 * Represents a media item for the player.
 */
/**
 * ListItemAll (maps to List.Item.All in kodi.json)
 * Combines properties from Video/Audio details plus List.Item.All extras.
 */
/**
 * ListItemCommon contains the common properties shared by list items
 * (drawn from List.Item.Base -> Video.Details.File and Audio.Details.Media).
 */
/**
 * ListItemCommon contains the common properties shared by list items
 * (drawn from List.Item.Base -> Video.Details.File and Audio.Details.Media).
 *
 * This includes frequently-requested fields such as `art`, `dateadded`, and
 * `resume` which are commonly present for video items.
 */
export interface ListItemCommon {
  /** Map of art roles (poster, fanart, thumbnail, etc.) to URLs. */
  art?: import("./media").Art;

  /** Date/time when the item was added to the library (string). */
  dateadded?: string;

  /** Resume position information (position and total seconds). */
  resume?: import("./media").VideoResume;

  album?: string;
  albumartist?: string[];
  albumartistid?: number[];
  albumid?: number;
  albumlabel?: string;
  albumreleasetype?: string;
  albumstatus?: string;
  bitrate?: number;
  bpm?: number;
  cast?: CastMember[];
  channels?: number;
  comment?: string;
  compilation?: boolean;
  contributors?: Contributor[];
  country?: string[];
  customproperties?: CustomProperties;
  description?: string;
  disc?: number;
  disctitle?: string;
  displaycomposer?: string;
  displayconductor?: string;
  displaylyricist?: string;
  displayorchestra?: string;
  duration?: number;
  dynpath?: string;
  episode?: number;
  episodeguide?: string;
  firstaired?: string;
  id?: number;
  imdbnumber?: string;
  isboxset?: boolean;
  lyrics?: string;
  mediapath?: string;
  mood?: string[];
  mpaa?: string;
  musicbrainzartistid?: string[];
  musicbrainztrackid?: string;
  originaldate?: string;
  originaltitle?: string;
  plotoutline?: string;
  premiered?: string;
  productioncode?: string;
  releasedate?: string;
  releasetype?: string;
  samplerate?: number;
  season?: number;
  set?: string;
  setid?: number;
  showlink?: string[];
  showtitle?: string;
  songvideourl?: string;
  sorttitle?: string;
  specialsortepisode?: number;
  specialsortseason?: number;
  studio?: string[];
  style?: string[];
  tag?: string[];
  tagline?: string;
  theme?: string[];
  top250?: number;
  totaldiscs?: number;
  track?: number;
  trailer?: string;
  tvshowid?: number;
  type?:
    | "unknown"
    | "movie"
    | "episode"
    | "musicvideo"
    | "song"
    | "picture"
    | "channel"
    | "recording";
  uniqueid?: MediaUniqueID | MediaUniqueID[] | Record<string, MediaUniqueID>;
  /** Numeric rating value (may be null). */
  rating?: number | null;
  /** User rating if present. */
  userrating?: number;
  /** Provider ratings blob (unstructured). */
  ratings?: unknown;
  votes?: string;
  watchedepisodes?: number;
  writer?: string[];
}

/**
 * ListItemAll extends the common fields with List.Item.All extras and
 * player/GetItem-specific properties such as channel info, file/path and
 * library-level streamdetails.
 */
export interface PlayerGetItem extends ListItemCommon {
  // List.Item.All extras
  channel?: string;
  channelnumber?: number;
  channeltype?: string;
  endtime?: string;
  hidden?: boolean;
  locked?: boolean;
  starttime?: string;
  subchannelnumber?: number;

  // Video/Audio specific (include file/path specific properties commonly used)
  file?: string;
  path?: string;
  title?: string;
  fanart?: string;
  thumbnail?: string;
  /**
   * Library-level stream details (audio/video/subtitle streams) when requested
   * via properties such as `streamdetails`.
   */
  streamdetails?: MediaStreamDetails;

  // allow additional fields not enumerated above (keeps compatibility)
  [key: string]: unknown;
}

export type PlayerMediaItem = PlayerGetItem;

/** Helper type: given a readonly tuple of keys, produce the Pick result type for GetItem. */
export type ItemFor<P extends readonly (keyof PlayerGetItem)[]> = Pick<
  PlayerGetItem,
  Extract<P[number], keyof PlayerGetItem>
>;

/** Common property groups exported as typed consts for use with GetItem */
export const commonProps = [
  "title",
  "file",
  "resume",
  "streamdetails",
] as const;

export const movieProps = [
  "title",
  "plot",
  "cast",
  "streamdetails",
  "resume",
] as const;

export const tvShowProps = [
  "title",
  "plot",
  "episode",
  "season",
  "streamdetails",
] as const;

export const audioProps = ["title", "album", "artist", "duration"] as const;

// exported as const tuples so callers get literal types and GetItem infers return types
export type CommonProps = typeof commonProps;
export type MovieProps = typeof movieProps;
export type TvShowProps = typeof tvShowProps;
export type AudioProps = typeof audioProps;

/**
 * Build a typed readonly tuple of property keys. Use with literal args so the
 * resulting tuple type is preserved for strong typing (e.g. with GetItem).
 */
export function makeProps<P extends readonly (keyof PlayerGetItem)[]>(
  ...props: P
): P {
  return props;
}

/** Alias for makeProps */
export const asProps = makeProps;
/**
 * Note: these helpers return readonly tuples which help TypeScript preserve
 * literal types for stronger inference. Namespace wrappers will typically
 * convert them to plain string[] when sending requests.
 */

/** Getter helpers that return the exported consts (preserve literal types). */
export function getCommonProps(): CommonProps {
  return commonProps;
}

export function getMovieProps(): MovieProps {
  return movieProps;
}

export function getTvShowProps(): TvShowProps {
  return tvShowProps;
}

export function getAudioProps(): AudioProps {
  return audioProps;
}

/**
 * PlayerOptions ($ref: "Player.Options")
 * Represents options for the player.
 */
export interface PlayerOptions {
  playername?: string | null;
  repeat?: PlayerRepeat | null;
  resume?: boolean | number | PlayerPositionTime;
  shuffled?: boolean | null;
  // Add additional properties as defined in kodi.json
}

/**
 * PlayerOpen item variants ($ref: Player.Open item)
 */
export type PlayerOpenPlaylist = {
  string: number; // Playlist.Id
  position?: number; // Playlist.Position
};

export type PlayerOpenPlaylistItem =
  | { file: string }
  | { directory: string; media?: string; recursive?: boolean }
  | { movieid: number }
  | { episodeid: number }
  | { musicvideoid: number }
  | { artistid: number }
  | { albumid: number }
  | { songid: number }
  | { genreid: number }
  | { recordingid: number };

export type PlayerOpenPath = {
  path: string;
  random?: boolean; // deprecated
  recursive?: boolean;
};

export type PlayerOpenPartyMode = {
  partymode?: "music" | "video" | string; // string allows smartplaylist path
};

export type PlayerOpenBroadcast = { broadcastid: number };
export type PlayerOpenChannel = { channelid: number };
export type PlayerOpenRecording = { recordingid: number };

export type PlayerOpenItem =
  | PlayerOpenPlaylist
  | PlayerOpenPlaylistItem
  | PlayerOpenPath
  | PlayerOpenPartyMode
  | PlayerOpenBroadcast
  | PlayerOpenChannel
  | PlayerOpenRecording;

/**
 * PlayerGoTo ($ref: "Player.GoTo")
 * Represents the target for the GoTo method.
 */
export type PlayerGoTo = "previous" | "next" | number;

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
  | { percentage: number }
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
  // The viewmode param accepts either a named view mode or a custom view mode object.
  // For custom view mode, each property can be an 'increase'|'decrease' string or a number/boolean/null as appropriate.
  nonlinearstretch?: "increase" | "decrease" | boolean | null;
  pixelratio?: "increase" | "decrease" | number | null;
  verticalshift?: "increase" | "decrease" | number | null;
  zoom?: "increase" | "decrease" | number | null;
}

// PlayerFieldsCustomViewMode, PlayerFieldsViewMode, PlayerFieldsAllProperties
// removed; re-add specific interfaces later as needed.

/**
 * PlayerDetails ($ref: "Player.Details")
 * Represents the details of a player.
 */
export interface PlayerDetails {
  number: number;
  playertype: PlayerPlayertype;
  type: PlayerMediaType;
  // Additional properties as defined in kodi.json
}

/**
 * PlayerDetailsExtended ($ref: "Player.Details.Extended")
 * Represents extended details of a player.
 */
export interface PlayerDetailsExtended extends PlayerDetails {
  // Additional extended properties as defined in kodi.json
}
