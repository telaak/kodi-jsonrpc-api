// Functions Block
// These functions correspond to the PVR methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "PVR" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiPVRNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  TimerId,
  Timer,
  BroadcastDetails,
  PVRProperty,
  PVRProperties,
  ListLimits,
  ListLimitsReturned,
  ListSort,
  PVRAddTimerParams,
  PVRAddTimerResponse,
  PVRDeleteTimerParams,
  PVRDeleteTimerResponse,
  PVRGetBroadcastDetailsParams,
  PVRGetBroadcastDetailsResponse,
  PVRGetBroadcastIsPlayableParams,
  PVRGetBroadcastIsPlayableResponse,
  PVRGetBroadcastsParams,
  PVRGetBroadcastsResponse,
  ChannelDetails,
  PVRGetChannelDetailsParams,
  PVRGetChannelDetailsResponse,
  ChannelGroupDetails,
  PVRGetChannelGroupDetailsParams,
  PVRGetChannelGroupDetailsResponse,
  ChannelGroup,
  PVRGetChannelGroupsParams,
  PVRGetChannelGroupsResponse,
  PVRGetChannelsParams,
  PVRGetChannelsResponse,
  ClientDetails,
  PVRGetClientsResponse,
  PVRGetPropertiesParams,
  PVRGetPropertiesResponse,
  RecordingDetails,
  PVRGetRecordingDetailsParams,
  PVRGetRecordingDetailsResponse,
  PVRGetRecordingsParams,
  PVRGetRecordingsResponse,
  PVRGetTimerDetailsParams,
  PVRGetTimerDetailsResponse,
  PVRGetTimersParams,
  PVRGetTimersResponse,
  PVRRecordParams,
  PVRRecordResponse,
  PVRScanParams,
  PVRScanResponse,
  PVRToggleTimerParams,
  PVRToggleTimerResponse,
} from "../types/pvr"; // Adjust the import path as necessary

export class KodiPVRNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Adds a new timer.
   *
   * @param timer - The timer object to add.
   * @returns A promise resolving to the ID of the added timer.
   */
  async AddTimer(timer: Timer): Promise<PVRAddTimerResponse> {
    const params: PVRAddTimerParams = { timer };
    return this.sendMessage("PVR.AddTimer", params);
  }

  /**
   * Deletes an existing timer.
   *
   * @param timerid - The ID of the timer to delete.
   * @returns A promise resolving to a boolean indicating success.
   */
  async DeleteTimer(timerid: TimerId): Promise<PVRDeleteTimerResponse> {
    const params: PVRDeleteTimerParams = { timerid };
    return this.sendMessage("PVR.DeleteTimer", params);
  }

  /**
   * Retrieves detailed information about a specific broadcast.
   *
   * @param broadcastid - The ID of the broadcast.
   * @returns A promise resolving to the BroadcastDetails object.
   */
  async GetBroadcastDetails(
    broadcastid: number
  ): Promise<PVRGetBroadcastDetailsResponse> {
    const params: PVRGetBroadcastDetailsParams = { broadcastid };
    return this.sendMessage("PVR.GetBroadcastDetails", params);
  }

  /**
   * Checks if a specific broadcast is playable.
   *
   * @param broadcastid - The ID of the broadcast.
   * @returns A promise resolving to a boolean indicating if the broadcast is playable.
   */
  async GetBroadcastIsPlayable(
    broadcastid: number
  ): Promise<PVRGetBroadcastIsPlayableResponse> {
    const params: PVRGetBroadcastIsPlayableParams = { broadcastid };
    return this.sendMessage("PVR.GetBroadcastIsPlayable", params);
  }

  /**
   * Retrieves a list of broadcasts with optional filtering and pagination.
   *
   * @param params - The parameters to filter and paginate broadcasts.
   * @returns A promise resolving to the list of broadcasts and pagination details.
   */
  async GetBroadcasts(
    params: PVRGetBroadcastsParams
  ): Promise<PVRGetBroadcastsResponse> {
    return this.sendMessage("PVR.GetBroadcasts", params);
  }

  /**
   * Retrieves detailed information about a specific channel.
   *
   * @param channelid - The ID of the channel.
   * @returns A promise resolving to the ChannelDetails object.
   */
  async GetChannelDetails(
    channelid: number
  ): Promise<PVRGetChannelDetailsResponse> {
    const params: PVRGetChannelDetailsParams = { channelid };
    return this.sendMessage("PVR.GetChannelDetails", params);
  }

  /**
   * Retrieves detailed information about a specific channel group.
   *
   * @param channelgroupid - The ID of the channel group.
   * @returns A promise resolving to the ChannelGroupDetails object.
   */
  async GetChannelGroupDetails(
    channelgroupid: number
  ): Promise<PVRGetChannelGroupDetailsResponse> {
    const params: PVRGetChannelGroupDetailsParams = { channelgroupid };
    return this.sendMessage("PVR.GetChannelGroupDetails", params);
  }

  /**
   * Retrieves a list of channel groups with optional filtering and pagination.
   *
   * @param params - The parameters to filter and paginate channel groups.
   * @returns A promise resolving to the list of channel groups and pagination details.
   */
  async GetChannelGroups(
    params: PVRGetChannelGroupsParams
  ): Promise<PVRGetChannelGroupsResponse> {
    return this.sendMessage("PVR.GetChannelGroups", params);
  }

  /**
   * Retrieves a list of channels with optional filtering and pagination.
   *
   * @param params - The parameters to filter and paginate channels.
   * @returns A promise resolving to the list of channels and pagination details.
   */
  async GetChannels(
    params: PVRGetChannelsParams
  ): Promise<PVRGetChannelsResponse> {
    return this.sendMessage("PVR.GetChannels", params);
  }

  /**
   * Retrieves a list of PVR clients.
   *
   * @returns A promise resolving to the list of PVR clients.
   */
  async GetClients(): Promise<PVRGetClientsResponse> {
    return this.sendMessage("PVR.GetClients", {});
  }

  /**
   * Retrieves specified properties for PVR.
   *
   * @param properties - The list of properties to retrieve.
   * @returns A promise resolving to the requested properties and their values.
   */
  async GetProperties(
    properties: PVRProperty[]
  ): Promise<PVRGetPropertiesResponse> {
    const params: PVRGetPropertiesParams = { properties };
    return this.sendMessage("PVR.GetProperties", params);
  }

  /**
   * Retrieves detailed information about a specific recording.
   *
   * @param recordingid - The ID of the recording.
   * @returns A promise resolving to the RecordingDetails object.
   */
  async GetRecordingDetails(
    recordingid: number
  ): Promise<PVRGetRecordingDetailsResponse> {
    const params: PVRGetRecordingDetailsParams = { recordingid };
    return this.sendMessage("PVR.GetRecordingDetails", params);
  }

  /**
   * Retrieves a list of recordings with optional filtering and pagination.
   *
   * @param params - The parameters to filter and paginate recordings.
   * @returns A promise resolving to the list of recordings and pagination details.
   */
  async GetRecordings(
    params: PVRGetRecordingsParams
  ): Promise<PVRGetRecordingsResponse> {
    return this.sendMessage("PVR.GetRecordings", params);
  }

  /**
   * Retrieves detailed information about a specific timer.
   *
   * @param timerid - The ID of the timer.
   * @returns A promise resolving to the Timer object.
   */
  async GetTimerDetails(timerid: TimerId): Promise<PVRGetTimerDetailsResponse> {
    const params: PVRGetTimerDetailsParams = { timerid };
    return this.sendMessage("PVR.GetTimerDetails", params);
  }

  /**
   * Retrieves a list of timers with optional filtering and pagination.
   *
   * @param params - The parameters to filter and paginate timers.
   * @returns A promise resolving to the list of timers and pagination details.
   */
  async GetTimers(params: PVRGetTimersParams): Promise<PVRGetTimersResponse> {
    return this.sendMessage("PVR.GetTimers", params);
  }

  /**
   * Initiates a recording on a specified channel.
   *
   * @param channelid - The ID of the channel to record from.
   * @param title - The title of the recording.
   * @param starttime - The start time of the recording in ISO 8601 format.
   * @param endtime - The end time of the recording in ISO 8601 format.
   * @returns A promise resolving to the details of the created recording.
   */
  async Record(
    channelid: number,
    title: string,
    starttime: string,
    endtime: string
  ): Promise<PVRRecordResponse> {
    const params: PVRRecordParams = { channelid, title, starttime, endtime };
    return this.sendMessage("PVR.Record", params);
  }

  /**
   * Initiates a scan for new recordings or channels.
   *
   * @param clientid - The ID of the PVR client to scan.
   * @param reset - Whether to reset the existing database before scanning (optional).
   * @returns A promise resolving to a boolean indicating if the scan was successful.
   */
  async Scan(
    clientid: number,
    reset: boolean = false
  ): Promise<PVRScanResponse> {
    const params: PVRScanParams = { clientid, reset };
    return this.sendMessage("PVR.Scan", params);
  }

  /**
   * Toggles the enabled state of a specific timer.
   *
   * @param timerid - The ID of the timer to toggle.
   * @returns A promise resolving to a boolean indicating if the toggle was successful.
   */
  async ToggleTimer(timerid: TimerId): Promise<PVRToggleTimerResponse> {
    const params: PVRToggleTimerParams = { timerid };
    return this.sendMessage("PVR.ToggleTimer", params);
  }
}
