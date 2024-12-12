// Types and Interfaces Block
// These types and interfaces are specific to the PVR methods and do not exist in koditestExports.ts

/**
 * TimerId ($ref: "PVR.TimerId")
 * Represents the unique identifier for a timer.
 */
export type TimerId = string;

/**
 * Timer ($ref: "PVR.Timer")
 * Represents a PVR timer.
 */
export interface Timer {
  timerid: TimerId; // Unique identifier for the timer
  channelid: number; // ID of the channel associated with the timer
  title: string; // Title of the program
  starttime: string; // Start time of the program in ISO 8601 format
  endtime: string; // End time of the program in ISO 8601 format
  enabled: boolean; // Whether the timer is enabled
  // Additional properties can be added here as defined in kodi.json
}

/**
 * BroadcastDetails ($ref: "PVR.BroadcastDetails")
 * Represents the details of a broadcast.
 */
export interface BroadcastDetails {
  broadcastid: number; // Unique identifier for the broadcast
  channelid: number; // ID of the channel
  title: string; // Title of the broadcast
  description: string; // Description of the broadcast
  starttime: string; // Start time of the broadcast in ISO 8601 format
  endtime: string; // End time of the broadcast in ISO 8601 format
  isPlayable: boolean; // Whether the broadcast is playable
  // Additional properties can be added here as defined in kodi.json
}

/**
 * ChannelDetails ($ref: "PVR.ChannelDetails")
 * Represents the details of a PVR channel.
 */
export interface ChannelDetails {
  channelid: number; // Unique identifier for the channel
  name: string; // Name of the channel
  icon: string; // URL to the channel's icon
  hidden: boolean; // Whether the channel is hidden
  // Additional properties can be added here as defined in kodi.json
}

/**
 * ChannelGroupDetails ($ref: "PVR.ChannelGroupDetails")
 * Represents the details of a channel group.
 */
export interface ChannelGroupDetails {
  channelgroupid: number; // Unique identifier for the channel group
  name: string; // Name of the channel group
  hidden: boolean; // Whether the channel group is hidden
  // Additional properties can be added here as defined in kodi.json
}

/**
 * ClientDetails ($ref: "PVR.ClientDetails")
 * Represents the details of a PVR client.
 */
export interface ClientDetails {
  clientid: number; // Unique identifier for the client
  name: string; // Name of the client
  version: string; // Version of the client
  capabilities: string[]; // Capabilities of the client
  // Additional properties can be added here as defined in kodi.json
}

/**
 * RecordingDetails ($ref: "PVR.RecordingDetails")
 * Represents the details of a recording.
 */
export interface RecordingDetails {
  recordingid: number; // Unique identifier for the recording
  title: string; // Title of the recording
  channelid: number; // ID of the channel
  starttime: string; // Start time of the recording in ISO 8601 format
  endtime: string; // End time of the recording in ISO 8601 format
  filepath: string; // File path of the recording
  // Additional properties can be added here as defined in kodi.json
}

/**
 * Broadcast ($ref: "PVR.Broadcast")
 * Represents a PVR broadcast.
 */
export interface Broadcast {
  broadcastid: number; // Unique identifier for the broadcast
  channelid: number; // ID of the channel
  title: string; // Title of the broadcast
  description: string; // Description of the broadcast
  starttime: string; // Start time of the broadcast in ISO 8601 format
  endtime: string; // End time of the broadcast in ISO 8601 format
  // Additional properties can be added here as defined in kodi.json
}

/**
 * ChannelGroup ($ref: "PVR.ChannelGroup")
 * Represents a group of PVR channels.
 */
export interface ChannelGroup {
  channelgroupid: number; // Unique identifier for the channel group
  name: string; // Name of the channel group
  hidden: boolean; // Whether the channel group is hidden
  // Additional properties can be added here as defined in kodi.json
}

/**
 * PVRProperty ($ref: "PVR.Property")
 * Enum for PVR property names.
 */
export type PVRProperty =
  | "timerid"
  | "channelid"
  | "title"
  | "starttime"
  | "endtime"
  | "enabled"
  | "broadcastid"
  | "description"
  | "isPlayable"
  | "name"
  | "icon"
  | "hidden"
  | "clientid"
  | "version"
  | "capabilities"
  | "recordingid"
  | "filepath";

/**
 * PVRProperties ($ref: "PVR.Properties")
 * Represents a set of properties for PVR methods.
 */
export interface PVRProperties {
  // Define properties as per kodi.json
  [key: string]: any;
}

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
  properties?: PVRProperty[]; // Optional list of properties to retrieve
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
  properties?: PVRProperty[]; // Optional list of properties to retrieve
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
  properties?: PVRProperty[]; // Optional list of properties to retrieve
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
  properties: PVRProperty[]; // List of properties to retrieve
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
  properties?: PVRProperty[]; // Optional list of properties to retrieve
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
  properties?: PVRProperty[]; // Optional list of properties to retrieve
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
