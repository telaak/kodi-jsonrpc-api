// Types and Interfaces Block
// These types and interfaces are specific to the PVR methods and do not exist in koditestExports.ts

/**
 * TimerId ($ref: "PVR.TimerId")
 * Represents the unique identifier for a timer.
 */
// Library.Id is an integer in kodi.json (minimum 1, default -1). Use number here.
export type TimerId = number;

/**
 * Timer ($ref: "PVR.Timer")
 * Represents a PVR timer.
 */
export interface Timer {
  timerid: TimerId;
  broadcastid?: number;
  channelid?: number;
  clientid?: number;
  directory?: string;
  endanytime?: boolean;
  endmargin?: number;
  endtime?: string;
  epgsearchstring?: string;
  epguid?: number;
  file?: string;
  firstday?: string;
  fulltextepgsearch?: boolean;
  ismanual?: boolean;
  isradio?: boolean;
  isreadonly?: boolean;
  isreminder?: boolean;
  istimerrule?: boolean;
  lifetime?: number;
  maxrecordings?: number;
  preventduplicateepisodes?: number;
  priority?: number;
  recordinggroup?: number;
  runtime?: number;
  startanytime?: boolean;
  startmargin?: number;
  starttime?: string;
  state?: string; // PVR.TimerState enum (string)
  summary?: string;
  title?: string;
  weekdays?: Array<
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"
  >;
}

/**
 * BroadcastDetails ($ref: "PVR.BroadcastDetails")
 * Represents the details of a broadcast.
 */
export interface BroadcastDetails {
  broadcastid: number;
  channelid?: number;
  title?: string;
  description?: string;
  starttime?: string;
  endtime?: string;
  isPlayable?: boolean;
}

/**
 * ChannelDetails ($ref: "PVR.ChannelDetails")
 * Represents the details of a PVR channel.
 */
export interface ChannelDetails {
  channelid: number;
  name?: string;
  icon?: string;
  hidden?: boolean;
  thumbnail?: string;
  channeltype?: string;
  locked?: boolean;
  channel?: string;
  lastplayed?: string;
  broadcastnow?: string;
  broadcastnext?: string;
  uniqueid?: string;
  channelnumber?: number;
  subchannelnumber?: number;
  isrecording?: boolean;
  hasarchive?: boolean;
  clientid?: number;
}

/**
 * ChannelGroupDetails ($ref: "PVR.ChannelGroupDetails")
 * Represents the details of a channel group.
 */
export interface ChannelGroupDetails {
  channelgroupid: number;
  name?: string;
  hidden?: boolean;
}

/**
 * ClientDetails ($ref: "PVR.ClientDetails")
 * Represents the details of a PVR client.
 */
export interface ClientDetails {
  clientid: number;
  name?: string;
  version?: string;
  capabilities?: string[];
}

/**
 * RecordingDetails ($ref: "PVR.RecordingDetails")
 * Represents the details of a recording.
 */
export interface RecordingDetails {
  recordingid: number;
  title?: string;
  channelid?: number;
  starttime?: string;
  endtime?: string;
  filepath?: string;
}

/**
 * Broadcast ($ref: "PVR.Broadcast")
 * Represents a PVR broadcast.
 */
export interface Broadcast {
  broadcastid: number;
  channelid?: number;
  title?: string;
  description?: string;
  starttime?: string;
  endtime?: string;
}

/**
 * ChannelGroup ($ref: "PVR.ChannelGroup")
 * Represents a group of PVR channels.
 */
export interface ChannelGroup {
  channelgroupid: number;
  name?: string;
  hidden?: boolean;
}

/**
 * PVRProperty ($ref: "PVR.Property")
 * Enum for PVR property names.
 */
// Narrow the PVR property names to the Timer/Channel/Broadcast fields where possible.
export type PVRProperty =
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
 * PVRProperties ($ref: "PVR.Properties")
 * Represents a set of properties for PVR methods.
 */
export type PVRProperties = Partial<Record<PVRProperty, boolean | number | string | any>>;

/** Property name unions for PVR field sets (from kodi.json)
 * - PVR.Fields.Broadcast
 * - PVR.Fields.Channel
 * - PVR.Fields.Recording
 * - PVR.Fields.Timer
 * - PVR.Fields.Client
 */
export type PVRBroadcastProperty =
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

export const pvrBroadcastProps = [
  "title",
  "plot",
  "plotoutline",
  "starttime",
  "endtime",
  "runtime",
  "progress",
  "progresspercentage",
  "genre",
  "episodename",
  "episodenum",
  "episodepart",
  "firstaired",
  "hastimer",
  "isactive",
  "parentalrating",
  "wasactive",
  "thumbnail",
  "rating",
  "originaltitle",
  "cast",
  "director",
  "writer",
  "year",
  "imdbnumber",
  "hastimerrule",
  "hasrecording",
  "recording",
  "isseries",
  "isplayable",
  "clientid",
  "hasreminder",
  "seasonnum",
] as const;

/**
 * Typed const list of broadcast properties. Use with `makePvrBroadcastProps`.
 */
/**
 * Create a typed readonly tuple of PVRBroadcastProperty values.
 * Preserves literal types for callers so TypeScript infers narrow tuple types
 * without requiring `as const` at each call site.
 *
 * Note: at runtime the readonly tuple will be sent as a plain string[]; the
 * namespace wrapper will cast it to `string[] | undefined` before sending.
 *
 * @example
 * ```ts
 * import { makePvrBroadcastProps } from "../types/pvr";
 * const props = makePvrBroadcastProps("title", "starttime");
 * // const resp = await kodi.PVR.GetBroadcasts({ properties: props });
 * ```
 */
export function makePvrBroadcastProps<P extends readonly PVRBroadcastProperty[]>(...p: P): P {
  return p;
}
export const asPvrBroadcastProps = makePvrBroadcastProps;
/**
 * @example
 * ```ts
 * import { makePvrBroadcastProps, pvrBroadcastProps } from "../types/pvr";
 * const props = makePvrBroadcastProps("title", "starttime");
 * // const resp = await kodi.PVR.GetBroadcasts({ properties: props });
 * ```
 */

export type PVRChannelProperty =
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

export const pvrChannelProps = [
  "thumbnail",
  "channeltype",
  "hidden",
  "locked",
  "channel",
  "lastplayed",
  "broadcastnow",
  "broadcastnext",
  "uniqueid",
  "icon",
  "channelnumber",
  "subchannelnumber",
  "isrecording",
  "hasarchive",
  "clientid",
] as const;

/**
 * Create a typed readonly tuple of PVRChannelProperty values.
 * Note: runtime transport sends these as plain string[]; use the helper to
 * preserve compile-time literal tuple types.
 */
export function makePvrChannelProps<P extends readonly PVRChannelProperty[]>(...p: P): P {
  return p;
}
export const asPvrChannelProps = makePvrChannelProps;
/**
 * @example
 * ```ts
 * import { makePvrChannelProps } from "../types/pvr";
 * const props = makePvrChannelProps("thumbnail", "channelnumber");
 * ```
 */

export type PVRRecordingProperty =
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

export const pvrRecordingProps = [
  "title",
  "plot",
  "plotoutline",
  "genre",
  "playcount",
  "resume",
  "channel",
  "starttime",
  "endtime",
  "runtime",
  "lifetime",
  "icon",
  "art",
  "streamurl",
  "file",
  "directory",
  "radio",
  "isdeleted",
  "epgeventid",
  "channeluid",
  "season",
  "episode",
  "showtitle",
  "clientid",
] as const;

/**
 * Create a typed readonly tuple of PVRRecordingProperty values.
 * Preserves literal types for callers; runtime transport will convert to
 * string[] before sending.
 */
export function makePvrRecordingProps<P extends readonly PVRRecordingProperty[]>(...p: P): P {
  return p;
}
export const asPvrRecordingProps = makePvrRecordingProps;
/**
 * @example
 * ```ts
 * import { makePvrRecordingProps } from "../types/pvr";
 * const props = makePvrRecordingProps("title", "filepath");
 * ```
 */

export type PVRTimerProperty =
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

export const pvrTimerProps = [
  "title",
  "summary",
  "channelid",
  "isradio",
  "istimerrule",
  "ismanual",
  "starttime",
  "endtime",
  "runtime",
  "lifetime",
  "firstday",
  "weekdays",
  "priority",
  "startmargin",
  "endmargin",
  "state",
  "file",
  "directory",
  "preventduplicateepisodes",
  "startanytime",
  "endanytime",
  "epgsearchstring",
  "fulltextepgsearch",
  "recordinggroup",
  "maxrecordings",
  "epguid",
  "isreadonly",
  "isreminder",
  "clientid",
  "broadcastid",
] as const;

/**
 * Create a typed readonly tuple of PVRTimerProperty values.
 */
export function makePvrTimerProps<P extends readonly PVRTimerProperty[]>(...p: P): P {
  return p;
}
export const asPvrTimerProps = makePvrTimerProps;
/**
 * @example
 * ```ts
 * import { makePvrTimerProps } from "../types/pvr";
 * const props = makePvrTimerProps("title", "starttime");
 * ```
 */

export type PVRClientProperty =
  | "addonid"
  | "supportstv"
  | "supportsradio"
  | "supportsepg"
  | "supportsrecordings"
  | "supportstimers"
  | "supportschannelgroups"
  | "supportschannelscan";

export const pvrClientProps = [
  "addonid",
  "supportstv",
  "supportsradio",
  "supportsepg",
  "supportsrecordings",
  "supportstimers",
  "supportschannelgroups",
  "supportschannelscan",
] as const;

/**
 * Create a typed readonly tuple of PVRClientProperty values.
 */
export function makePvrClientProps<P extends readonly PVRClientProperty[]>(...p: P): P {
  return p;
}
export const asPvrClientProps = makePvrClientProps;
/**
 * @example
 * ```ts
 * import { makePvrClientProps } from "../types/pvr";
 * const props = makePvrClientProps("addonid", "supportsrecordings");
 * ```
 */

/**
 * PVRAddTimerParams ($ref: "PVR.AddTimer.Params")
 * Parameters for the AddTimer method.
 */
export interface PVRAddTimerParams {
  timer: Timer; // Timer object to add
}

/**
 * PVRAddTimerResponse ($ref: "PVR.AddTimer.Response")
 * Response structure for the AddTimer method.
 */
export type PVRAddTimerResponse = TimerId; // Returns the ID of the added timer

/**
 * PVRDeleteTimerParams ($ref: "PVR.DeleteTimer.Params")
 * Parameters for the DeleteTimer method.
 */
export interface PVRDeleteTimerParams {
  timerid: TimerId; // ID of the timer to delete
}

/**
 * PVRDeleteTimerResponse ($ref: "PVR.DeleteTimer.Response")
 * Response structure for the DeleteTimer method.
 */
export type PVRDeleteTimerResponse = boolean; // Returns true if deletion was successful

/**
 * PVRGetBroadcastDetailsParams ($ref: "PVR.GetBroadcastDetails.Params")
 * Parameters for the GetBroadcastDetails method.
 */
export interface PVRGetBroadcastDetailsParams {
  broadcastid: number; // ID of the broadcast
}

/**
 * PVRGetBroadcastDetailsResponse ($ref: "PVR.GetBroadcastDetails.Response")
 * Response structure for the GetBroadcastDetails method.
 */
export type PVRGetBroadcastDetailsResponse = BroadcastDetails;

/**
 * PVRGetBroadcastIsPlayableParams ($ref: "PVR.GetBroadcastIsPlayable.Params")
 * Parameters for the GetBroadcastIsPlayable method.
 */
export interface PVRGetBroadcastIsPlayableParams {
  broadcastid: number; // ID of the broadcast
}

/**
 * PVRGetBroadcastIsPlayableResponse ($ref: "PVR.GetBroadcastIsPlayable.Response")
 * Response structure for the GetBroadcastIsPlayable method.
 */
export type PVRGetBroadcastIsPlayableResponse = boolean;

/**
 * PVRGetBroadcastsParams ($ref: "PVR.GetBroadcasts.Params")
 * Parameters for the GetBroadcasts method.
 */
export interface PVRGetBroadcastsParams {
  channelid?: number; // Optional ID of the channel to filter broadcasts
  starttime?: string; // Optional start time in ISO 8601 format
  endtime?: string; // Optional end time in ISO 8601 format
  properties?: PVRBroadcastProperty[]; // Optional list of properties to retrieve
  limits?: ListLimits; // Optional pagination limits
  sort?: ListSort; // Optional sorting options
}

/**
 * PVRGetBroadcastsResponse ($ref: "PVR.GetBroadcasts.Response")
 * Response structure for the GetBroadcasts method.
 */
export interface PVRGetBroadcastsResponse {
  broadcasts: Broadcast[]; // List of retrieved broadcasts
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * PVRGetChannelDetailsParams ($ref: "PVR.GetChannelDetails.Params")
 * Parameters for the GetChannelDetails method.
 */
export interface PVRGetChannelDetailsParams {
  channelid: number; // ID of the channel
}

/**
 * PVRGetChannelDetailsResponse ($ref: "PVR.GetChannelDetails.Response")
 * Response structure for the GetChannelDetails method.
 */
export type PVRGetChannelDetailsResponse = ChannelDetails;

/**
 * PVRGetChannelGroupDetailsParams ($ref: "PVR.GetChannelGroupDetails.Params")
 * Parameters for the GetChannelGroupDetails method.
 */
export interface PVRGetChannelGroupDetailsParams {
  channelgroupid: number; // ID of the channel group
}

/**
 * PVRGetChannelGroupDetailsResponse ($ref: "PVR.GetChannelGroupDetails.Response")
 * Response structure for the GetChannelGroupDetails method.
 */
export type PVRGetChannelGroupDetailsResponse = ChannelGroupDetails;

/**
 * PVRGetChannelGroupsParams ($ref: "PVR.GetChannelGroups.Params")
 * Parameters for the GetChannelGroups method.
 */
export interface PVRGetChannelGroupsParams {
  properties?: PVRChannelProperty[]; // Optional list of properties to retrieve
  limits?: ListLimits; // Optional pagination limits
  sort?: ListSort; // Optional sorting options
}

/**
 * PVRGetChannelGroupsResponse ($ref: "PVR.GetChannelGroups.Response")
 * Response structure for the GetChannelGroups method.
 */
export interface PVRGetChannelGroupsResponse {
  channelgroups: ChannelGroup[]; // List of retrieved channel groups
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * PVRGetChannelsParams ($ref: "PVR.GetChannels.Params")
 * Parameters for the GetChannels method.
 */
export interface PVRGetChannelsParams {
  channelgroupid?: number; // Optional ID of the channel group to filter channels
  properties?: PVRChannelProperty[]; // Optional list of properties to retrieve
  limits?: ListLimits; // Optional pagination limits
  sort?: ListSort; // Optional sorting options
}

/**
 * PVRGetChannelsResponse ($ref: "PVR.GetChannels.Response")
 * Response structure for the GetChannels method.
 */
export interface PVRGetChannelsResponse {
  channels: ChannelDetails[]; // List of retrieved channels
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * PVRGetClientsResponse ($ref: "PVR.GetClients.Response")
 * Response structure for the GetClients method.
 */
export interface PVRGetClientsResponse {
  clients: ClientDetails[]; // List of retrieved PVR clients
}

/**
 * PVRGetPropertiesParams ($ref: "PVR.GetProperties.Params")
 * Parameters for the GetProperties method.
 */
export interface PVRGetPropertiesParams {
  properties?: PVRProperty[]; // List of properties to retrieve
}

/**
 * PVRGetPropertiesResponse ($ref: "PVR.GetProperties.Response")
 * Response structure for the GetProperties method.
 */
export type PVRGetPropertiesResponse = PVRProperties;

/**
 * PVRGetRecordingDetailsParams ($ref: "PVR.GetRecordingDetails.Params")
 * Parameters for the GetRecordingDetails method.
 */
export interface PVRGetRecordingDetailsParams {
  recordingid: number; // ID of the recording
}

/**
 * PVRGetRecordingDetailsResponse ($ref: "PVR.GetRecordingDetails.Response")
 * Response structure for the GetRecordingDetails method.
 */
export type PVRGetRecordingDetailsResponse = RecordingDetails;

/**
 * PVRGetRecordingsParams ($ref: "PVR.GetRecordings.Params")
 * Parameters for the GetRecordings method.
 */
export interface PVRGetRecordingsParams {
  properties?: PVRRecordingProperty[]; // Optional list of properties to retrieve
  limits?: ListLimits; // Optional pagination limits
  sort?: ListSort; // Optional sorting options
}

/**
 * PVRGetRecordingsResponse ($ref: "PVR.GetRecordings.Response")
 * Response structure for the GetRecordings method.
 */
export interface PVRGetRecordingsResponse {
  recordings: RecordingDetails[]; // List of retrieved recordings
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * PVRGetTimerDetailsParams ($ref: "PVR.GetTimerDetails.Params")
 * Parameters for the GetTimerDetails method.
 */
export interface PVRGetTimerDetailsParams {
  timerid: TimerId; // ID of the timer
}

/**
 * PVRGetTimerDetailsResponse ($ref: "PVR.GetTimerDetails.Response")
 * Response structure for the GetTimerDetails method.
 */
export type PVRGetTimerDetailsResponse = Timer;

/**
 * PVRGetTimersParams ($ref: "PVR.GetTimers.Params")
 * Parameters for the GetTimers method.
 */
export interface PVRGetTimersParams {
  properties?: PVRTimerProperty[]; // Optional list of properties to retrieve
  limits?: ListLimits; // Optional pagination limits
  sort?: ListSort; // Optional sorting options
}

/**
 * PVRGetTimersResponse ($ref: "PVR.GetTimers.Response")
 * Response structure for the GetTimers method.
 */
export interface PVRGetTimersResponse {
  timers: Timer[]; // List of retrieved timers
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * PVRRecordParams ($ref: "PVR.Record.Params")
 * Parameters for the Record method.
 */
export interface PVRRecordParams {
  channelid: number; // ID of the channel to record from
  title: string; // Title of the recording
  starttime: string; // Start time of the recording in ISO 8601 format
  endtime: string; // End time of the recording in ISO 8601 format
}

/**
 * PVRRecordResponse ($ref: "PVR.Record.Response")
 * Response structure for the Record method.
 */
export type PVRRecordResponse = RecordingDetails; // Returns details of the recording

/**
 * PVRScanParams ($ref: "PVR.Scan.Params")
 * Parameters for the Scan method.
 */
export interface PVRScanParams {
  clientid: number; // ID of the PVR client to scan
  reset?: boolean; // Whether to reset the existing database before scanning
}

/**
 * PVRScanResponse ($ref: "PVR.Scan.Response")
 * Response structure for the Scan method.
 */
export type PVRScanResponse = boolean; // Returns true if scan was successful

/**
 * PVRToggleTimerParams ($ref: "PVR.ToggleTimer.Params")
 * Parameters for the ToggleTimer method.
 */
export interface PVRToggleTimerParams {
  timerid: TimerId; // ID of the timer to toggle
}

/**
 * PVRToggleTimerResponse ($ref: "PVR.ToggleTimer.Response")
 * Response structure for the ToggleTimer method.
 */
export type PVRToggleTimerResponse = boolean; // Returns true if toggle was successful

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
