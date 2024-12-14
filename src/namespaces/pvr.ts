import { ISendMessage } from "..";

export class KodiPVRNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // PVR Namespace Methods
  // =====================

  /**
   * Adds a new timer to the PVR system.
   *
   * @param timer - The timer object to add.
   * @returns A promise that resolves to an object indicating success, the new timer ID, and a message.
   */
  async AddTimer(timer: Timer): Promise<AddTimerResponse> {
    const params: AddTimerParams = { timer };
    return this.sendMessage("PVR.AddTimer", params);
  }

  /**
   * Deletes an existing timer from the PVR system.
   *
   * @param timerId - The unique identifier of the timer to delete.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async DeleteTimer(timerId: string): Promise<DeleteTimerResponse> {
    const params: DeleteTimerParams = { timerId };
    return this.sendMessage("PVR.DeleteTimer", params);
  }

  /**
   * Retrieves detailed information about a specific broadcast.
   *
   * @param broadcastId - The unique identifier of the broadcast.
   * @returns A promise that resolves to an object containing the broadcast details.
   */
  async GetBroadcastDetails(
    broadcastId: string
  ): Promise<GetBroadcastDetailsResponse> {
    const params: GetBroadcastDetailsParams = { broadcastId };
    return this.sendMessage("PVR.GetBroadcastDetails", params);
  }

  /**
   * Checks if a specific broadcast is playable.
   *
   * @param broadcastId - The unique identifier of the broadcast.
   * @returns A promise that resolves to an object indicating if the broadcast is playable.
   */
  async GetBroadcastIsPlayable(
    broadcastId: string
  ): Promise<GetBroadcastIsPlayableResponse> {
    const params: GetBroadcastIsPlayableParams = { broadcastId };
    return this.sendMessage("PVR.GetBroadcastIsPlayable", params);
  }

  /**
   * Retrieves broadcasts based on the provided filters.
   *
   * @param channelId - Optional channel ID to filter broadcasts.
   * @param startTime - Optional start time to filter broadcasts (ISO date string).
   * @param endTime - Optional end time to filter broadcasts (ISO date string).
   * @param type - Optional type of broadcasts to filter ("live" or "recorded").
   * @returns A promise that resolves to an object containing the broadcasts and the total count.
   */
  async GetBroadcasts(
    channelId?: string,
    startTime?: string,
    endTime?: string,
    type?: BroadcastType
  ): Promise<GetBroadcastsResponse> {
    const params: GetBroadcastsParams = { channelId, startTime, endTime, type };
    return this.sendMessage("PVR.GetBroadcasts", params);
  }

  /**
   * Retrieves detailed information about a specific channel.
   *
   * @param channelId - The unique identifier of the channel.
   * @returns A promise that resolves to an object containing the channel details.
   */
  async GetChannelDetails(
    channelId: string
  ): Promise<GetChannelDetailsResponse> {
    const params: GetChannelDetailsParams = { channelId };
    return this.sendMessage("PVR.GetChannelDetails", params);
  }

  /**
   * Retrieves detailed information about a specific channel group.
   *
   * @param groupId - The unique identifier of the channel group.
   * @returns A promise that resolves to an object containing the channel group details.
   */
  async GetChannelGroupDetails(
    groupId: string
  ): Promise<GetChannelGroupDetailsResponse> {
    const params: GetChannelGroupDetailsParams = { groupId };
    return this.sendMessage("PVR.GetChannelGroupDetails", params);
  }

  /**
   * Retrieves all available channel groups.
   *
   * @param type - Optional type of channel groups to retrieve ("tv", "radio", or "picture").
   * @returns A promise that resolves to an object containing an array of channel groups and the total count.
   */
  async GetChannelGroups(
    type?: ChannelGroupType
  ): Promise<GetChannelGroupsResponse> {
    const params: GetChannelGroupsParams = { type };
    return this.sendMessage("PVR.GetChannelGroups", params);
  }

  /**
   * Retrieves all available channels based on the provided filters.
   *
   * @param groupId - Optional group ID to filter channels.
   * @param type - Optional type of channels to retrieve ("tv", "radio", or "picture").
   * @returns A promise that resolves to an object containing an array of channels and the total count.
   */
  async GetChannels(
    groupId?: string,
    type?: ChannelType
  ): Promise<GetChannelsResponse> {
    const params: GetChannelsParams = { groupId, type };
    return this.sendMessage("PVR.GetChannels", params);
  }

  /**
   * Retrieves all connected PVR clients.
   *
   * @returns A promise that resolves to an object containing an array of PVR clients and the total count.
   */
  async GetClients(): Promise<GetClientsResponse> {
    const params: {} = {};
    return this.sendMessage("PVR.GetClients", params);
  }

  /**
   * Retrieves specified properties of the PVR system.
   *
   * @param properties - An array of property names to retrieve.
   * @returns A promise that resolves to an object containing the requested properties.
   */
  async GetProperties(
    properties: PVRProperty[]
  ): Promise<GetPropertiesResponse> {
    const params: GetPropertiesParams = { properties };
    return this.sendMessage("PVR.GetProperties", params);
  }

  /**
   * Retrieves detailed information about a specific recording.
   *
   * @param recordingId - The unique identifier of the recording.
   * @returns A promise that resolves to an object containing the recording details.
   */
  async GetRecordingDetails(
    recordingId: string
  ): Promise<GetRecordingDetailsResponse> {
    const params: GetRecordingDetailsParams = { recordingId };
    return this.sendMessage("PVR.GetRecordingDetails", params);
  }

  /**
   * Retrieves recordings based on the provided filters.
   *
   * @param status - Optional status to filter recordings ("recording", "completed", "failed", "deleted").
   * @returns A promise that resolves to an object containing an array of recordings and the total count.
   */
  async GetRecordings(
    status?: RecordingStatus
  ): Promise<GetRecordingsResponse> {
    const params: GetRecordingsParams = { status };
    return this.sendMessage("PVR.GetRecordings", params);
  }

  /**
   * Retrieves detailed information about a specific timer.
   *
   * @param timerId - The unique identifier of the timer.
   * @returns A promise that resolves to an object containing the timer details.
   */
  async GetTimerDetails(timerId: string): Promise<GetTimerDetailsResponse> {
    const params: GetTimerDetailsParams = { timerId };
    return this.sendMessage("PVR.GetTimerDetails", params);
  }

  /**
   * Retrieves timers based on the provided filters.
   *
   * @param enabled - Optional filter to retrieve only enabled or disabled timers.
   * @param repeat - Optional repeat interval to filter timers.
   * @returns A promise that resolves to an object containing an array of timers and the total count.
   */
  async GetTimers(
    enabled?: boolean,
    repeat?: TimerRepeat
  ): Promise<GetTimersResponse> {
    const params: GetTimersParams = { enabled, repeat };
    return this.sendMessage("PVR.GetTimers", params);
  }

  /**
   * Initiates recording of a specific broadcast.
   *
   * @param broadcastId - The unique identifier of the broadcast to record.
   * @param recordingPath - The file path where the recording will be saved.
   * @returns A promise that resolves to an object indicating success, the new recording ID, and a message.
   */
  async Record(
    broadcastId: string,
    recordingPath: string
  ): Promise<RecordResponse> {
    const params: RecordParams = { broadcastId, recordingPath };
    return this.sendMessage("PVR.Record", params);
  }

  /**
   * Scans for new channels or recordings.
   *
   * @param type - The type of scan to perform ("channels" or "recordings").
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async Scan(type: "channels" | "recordings"): Promise<ScanResponse> {
    const params: ScanParams = { type };
    return this.sendMessage("PVR.Scan", params);
  }

  /**
   * Toggles the enabled state of a specific timer.
   *
   * @param timerId - The unique identifier of the timer to toggle.
   * @param enabled - The desired enabled state (true to enable, false to disable).
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async ToggleTimer(
    timerId: string,
    enabled: boolean
  ): Promise<ToggleTimerResponse> {
    const params: ToggleTimerParams = { timerId, enabled };
    return this.sendMessage("PVR.ToggleTimer", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the repeat interval for a timer.
 */
type TimerRepeat = "daily" | "weekly" | "monthly" | "once";

/**
 * Represents the status of a recording.
 */
type RecordingStatus = "recording" | "completed" | "failed" | "deleted";

/**
 * Represents the type of a broadcast.
 */
type BroadcastType = "live" | "recorded";

/**
 * Represents the type of a channel group.
 */
type ChannelGroupType = "tv" | "radio" | "picture";

/**
 * Represents the type of a channel.
 */
type ChannelType = "tv" | "radio" | "picture";

/**
 * Represents the capabilities of a PVR client.
 */
type ClientCapability = "recording" | "timeshift" | "livetv" | "epg";

/**
 * Represents a PVR client.
 */
interface Client {
  id: string;
  name: string;
  host: string;
  port: number;
  capabilities: ClientCapability[];
  status: "connected" | "disconnected";
}

/**
 * Represents a channel group.
 */
interface ChannelGroup {
  id: string;
  name: string;
  type: ChannelGroupType;
}

/**
 * Represents a channel.
 */
interface Channel {
  id: string;
  name: string;
  groupId: string;
  type: ChannelType;
  iconPath?: string;
}

/**
 * Represents a broadcast.
 */
interface Broadcast {
  id: string;
  title: string;
  channelId: string;
  startTime: string; // ISO date string
  endTime: string; // ISO date string
  type: BroadcastType;
  isPlayable: boolean;
}

/**
 * Represents a recording.
 */
interface Recording {
  id: string;
  title: string;
  channelId: string;
  startTime: string; // ISO date string
  endTime: string; // ISO date string
  status: RecordingStatus;
  filePath: string;
}

/**
 * Represents a timer.
 */
interface Timer {
  id: string;
  title: string;
  channelId: string;
  startTime: string; // ISO date string
  endTime: string; // ISO date string
  repeat: TimerRepeat;
  enabled: boolean;
}

/**
 * Represents the parameters for AddTimer.
 */
interface AddTimerParams {
  timer: Timer;
}

/**
 * Represents the response structure for AddTimer.
 */
interface AddTimerResponse {
  success: boolean;
  timerId: string;
  message: string;
}

/**
 * Represents the parameters for DeleteTimer.
 */
interface DeleteTimerParams {
  timerId: string;
}

/**
 * Represents the response structure for DeleteTimer.
 */
interface DeleteTimerResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for GetBroadcastDetails.
 */
interface GetBroadcastDetailsParams {
  broadcastId: string;
}

/**
 * Represents the response structure for GetBroadcastDetails.
 */
interface GetBroadcastDetailsResponse {
  broadcast: Broadcast;
}

/**
 * Represents the parameters for GetBroadcastIsPlayable.
 */
interface GetBroadcastIsPlayableParams {
  broadcastId: string;
}

/**
 * Represents the response structure for GetBroadcastIsPlayable.
 */
interface GetBroadcastIsPlayableResponse {
  isPlayable: boolean;
}

/**
 * Represents the parameters for GetBroadcasts.
 */
interface GetBroadcastsParams {
  channelId?: string;
  startTime?: string; // ISO date string
  endTime?: string; // ISO date string
  type?: BroadcastType;
}

/**
 * Represents the response structure for GetBroadcasts.
 */
interface GetBroadcastsResponse {
  broadcasts: Broadcast[];
  total: number;
}

/**
 * Represents the parameters for GetChannelDetails.
 */
interface GetChannelDetailsParams {
  channelId: string;
}

/**
 * Represents the response structure for GetChannelDetails.
 */
interface GetChannelDetailsResponse {
  channel: Channel;
}

/**
 * Represents the parameters for GetChannelGroupDetails.
 */
interface GetChannelGroupDetailsParams {
  groupId: string;
}

/**
 * Represents the response structure for GetChannelGroupDetails.
 */
interface GetChannelGroupDetailsResponse {
  group: ChannelGroup;
}

/**
 * Represents the parameters for GetChannelGroups.
 */
interface GetChannelGroupsParams {
  type?: ChannelGroupType;
}

/**
 * Represents the response structure for GetChannelGroups.
 */
interface GetChannelGroupsResponse {
  groups: ChannelGroup[];
  total: number;
}

/**
 * Represents the parameters for GetChannels.
 */
interface GetChannelsParams {
  groupId?: string;
  type?: ChannelType;
}

/**
 * Represents the response structure for GetChannels.
 */
interface GetChannelsResponse {
  channels: Channel[];
  total: number;
}

/**
 * Represents the response structure for GetClients.
 */
interface GetClientsResponse {
  clients: Client[];
  total: number;
}

/**
 * Represents the available PVR properties that can be retrieved.
 */
type PVRProperty =
  | "recordings"
  | "timers"
  | "channels"
  | "channelGroups"
  | "broadcasts"
  | "clients";

/**
 * Represents the parameters for GetProperties.
 */
interface GetPropertiesParams {
  properties: PVRProperty[];
}

/**
 * Represents the response structure for GetProperties.
 */
type GetPropertiesResponse = {
  [key in PVRProperty]?: any; // Define more specifically if possible
};

/**
 * Represents the parameters for GetRecordingDetails.
 */
interface GetRecordingDetailsParams {
  recordingId: string;
}

/**
 * Represents the response structure for GetRecordingDetails.
 */
interface GetRecordingDetailsResponse {
  recording: Recording;
}

/**
 * Represents the parameters for GetRecordings.
 */
interface GetRecordingsParams {
  status?: RecordingStatus;
}

/**
 * Represents the response structure for GetRecordings.
 */
interface GetRecordingsResponse {
  recordings: Recording[];
  total: number;
}

/**
 * Represents the parameters for GetTimerDetails.
 */
interface GetTimerDetailsParams {
  timerId: string;
}

/**
 * Represents the response structure for GetTimerDetails.
 */
interface GetTimerDetailsResponse {
  timer: Timer;
}

/**
 * Represents the parameters for GetTimers.
 */
interface GetTimersParams {
  enabled?: boolean;
  repeat?: TimerRepeat;
}

/**
 * Represents the response structure for GetTimers.
 */
interface GetTimersResponse {
  timers: Timer[];
  total: number;
}

/**
 * Represents the parameters for Record.
 */
interface RecordParams {
  broadcastId: string;
  recordingPath: string;
}

/**
 * Represents the response structure for Record.
 */
interface RecordResponse {
  success: boolean;
  recordingId: string;
  message: string;
}

/**
 * Represents the parameters for Scan.
 */
interface ScanParams {
  type: "channels" | "recordings";
}

/**
 * Represents the response structure for Scan.
 */
interface ScanResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for ToggleTimer.
 */
interface ToggleTimerParams {
  timerId: string;
  enabled: boolean;
}

/**
 * Represents the response structure for ToggleTimer.
 */
interface ToggleTimerResponse {
  success: boolean;
  message: string;
}
