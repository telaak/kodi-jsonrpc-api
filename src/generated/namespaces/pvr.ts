import { ISendMessage } from '../../';

type __PVRPropertyValueKeys = keyof PVRPropertyValue;

import { LibraryId } from '../types/LibraryId';
import { PVRAddTimerParams } from '../types/PVRAddTimerParams';
import { PVRDeleteTimerParams } from '../types/PVRDeleteTimerParams';
import { PVRFieldsBroadcast } from '../types/PVRFieldsBroadcast';
import { PVRDetailsBroadcast } from '../types/PVRDetailsBroadcast';
import { PVRGetBroadcastDetailsParams } from '../types/PVRGetBroadcastDetailsParams';
import { PVRGetBroadcastDetailsResponse } from '../types/PVRGetBroadcastDetailsResponse';
import { PVRGetBroadcastIsPlayableParams } from '../types/PVRGetBroadcastIsPlayableParams';
import { ListLimits } from '../types/ListLimits';
import { ListLimitsReturned } from '../types/ListLimitsReturned';
import { PVRGetBroadcastsParams } from '../types/PVRGetBroadcastsParams';
import { PVRGetBroadcastsResponse } from '../types/PVRGetBroadcastsResponse';
import { PVRFieldsChannel } from '../types/PVRFieldsChannel';
import { PVRDetailsChannel } from '../types/PVRDetailsChannel';
import { PVRGetChannelDetailsParams } from '../types/PVRGetChannelDetailsParams';
import { PVRGetChannelDetailsResponse } from '../types/PVRGetChannelDetailsResponse';
import { PVRChannelGroupId } from '../types/PVRChannelGroupId';
import { PVRDetailsChannelGroupExtended } from '../types/PVRDetailsChannelGroupExtended';
import { PVRGetChannelGroupDetailsParams } from '../types/PVRGetChannelGroupDetailsParams';
import { PVRGetChannelGroupDetailsResponse } from '../types/PVRGetChannelGroupDetailsResponse';
import { PVRChannelType } from '../types/PVRChannelType';
import { PVRDetailsChannelGroup } from '../types/PVRDetailsChannelGroup';
import { PVRGetChannelGroupsParams } from '../types/PVRGetChannelGroupsParams';
import { PVRGetChannelGroupsResponse } from '../types/PVRGetChannelGroupsResponse';
import { ListSort } from '../types/ListSort';
import { PVRGetChannelsParams } from '../types/PVRGetChannelsParams';
import { PVRGetChannelsResponse } from '../types/PVRGetChannelsResponse';
import { PVRDetailsClient } from '../types/PVRDetailsClient';
import { PVRGetClientsParams } from '../types/PVRGetClientsParams';
import { PVRGetClientsResponse } from '../types/PVRGetClientsResponse';
import { PVRPropertyValue } from '../types/PVRPropertyValue';
import { PVRGetPropertiesParams } from '../types/PVRGetPropertiesParams';
import { PVRFieldsRecording } from '../types/PVRFieldsRecording';
import { PVRDetailsRecording } from '../types/PVRDetailsRecording';
import { PVRGetRecordingDetailsParams } from '../types/PVRGetRecordingDetailsParams';
import { PVRGetRecordingDetailsResponse } from '../types/PVRGetRecordingDetailsResponse';
import { PVRGetRecordingsParams } from '../types/PVRGetRecordingsParams';
import { PVRGetRecordingsResponse } from '../types/PVRGetRecordingsResponse';
import { PVRFieldsTimer } from '../types/PVRFieldsTimer';
import { PVRDetailsTimer } from '../types/PVRDetailsTimer';
import { PVRGetTimerDetailsParams } from '../types/PVRGetTimerDetailsParams';
import { PVRGetTimerDetailsResponse } from '../types/PVRGetTimerDetailsResponse';
import { PVRGetTimersParams } from '../types/PVRGetTimersParams';
import { PVRGetTimersResponse } from '../types/PVRGetTimersResponse';
import { GlobalToggle } from '../types/GlobalToggle';
import { PVRRecordParams } from '../types/PVRRecordParams';
import { PVRScanParams } from '../types/PVRScanParams';
import { PVRToggleTimerParams } from '../types/PVRToggleTimerParams';


export class KodiPVRNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Adds a timer to record the given show one times or a timer rule to record all showings of the given show or adds a reminder timer or reminder timer rule
   */
  async AddTimer(params: PVRAddTimerParams): Promise<string> {
    return this.sendMessage<string>("PVR.AddTimer", params);
  }

  /**
   * Deletes a onetime timer or a timer rule
   */
  async DeleteTimer(params: PVRDeleteTimerParams): Promise<string> {
    return this.sendMessage<string>("PVR.DeleteTimer", params);
  }

  /**
   * Retrieves the details of a specific broadcast
   */
  async GetBroadcastDetails(params: PVRGetBroadcastDetailsParams): Promise<PVRGetBroadcastDetailsResponse> {
    return this.sendMessage<PVRGetBroadcastDetailsResponse>("PVR.GetBroadcastDetails", params);
  }

  /**
   * Retrieves whether or not a broadcast is playable
   */
  async GetBroadcastIsPlayable(params: PVRGetBroadcastIsPlayableParams): Promise<boolean> {
    return this.sendMessage<boolean>("PVR.GetBroadcastIsPlayable", params);
  }

  /**
   * Retrieves the program of a specific channel
   */
  async GetBroadcasts(params: PVRGetBroadcastsParams): Promise<PVRGetBroadcastsResponse> {
    return this.sendMessage<PVRGetBroadcastsResponse>("PVR.GetBroadcasts", params);
  }

  /**
   * Retrieves the details of a specific channel
   */
  async GetChannelDetails(params: PVRGetChannelDetailsParams): Promise<PVRGetChannelDetailsResponse> {
    return this.sendMessage<PVRGetChannelDetailsResponse>("PVR.GetChannelDetails", params);
  }

  /**
   * Retrieves the details of a specific channel group
   */
  async GetChannelGroupDetails(params: PVRGetChannelGroupDetailsParams): Promise<PVRGetChannelGroupDetailsResponse> {
    return this.sendMessage<PVRGetChannelGroupDetailsResponse>("PVR.GetChannelGroupDetails", params);
  }

  /**
   * Retrieves the channel groups for the specified type
   */
  async GetChannelGroups(params: PVRGetChannelGroupsParams): Promise<PVRGetChannelGroupsResponse> {
    return this.sendMessage<PVRGetChannelGroupsResponse>("PVR.GetChannelGroups", params);
  }

  /**
   * Retrieves the channel list
   */
  async GetChannels(params: PVRGetChannelsParams): Promise<PVRGetChannelsResponse> {
    return this.sendMessage<PVRGetChannelsResponse>("PVR.GetChannels", params);
  }

  /**
   * Retrieves the enabled PVR clients and their capabilities
   */
  async GetClients(params: PVRGetClientsParams): Promise<PVRGetClientsResponse> {
    return this.sendMessage<PVRGetClientsResponse>("PVR.GetClients", params);
  }

  async GetProperties<P extends readonly __PVRPropertyValueKeys[]>(params: { properties: P}): Promise<Pick<PVRPropertyValue, Extract<P[number], __PVRPropertyValueKeys>>>;
  /**
   * Retrieves the values of the given properties
   */
  async GetProperties(params: PVRGetPropertiesParams): Promise<PVRPropertyValue>;
  async GetProperties(params: any) {
    return this.sendMessage<PVRPropertyValue>("PVR.GetProperties", params);
  }

  /**
   * Retrieves the details of a specific recording
   */
  async GetRecordingDetails(params: PVRGetRecordingDetailsParams): Promise<PVRGetRecordingDetailsResponse> {
    return this.sendMessage<PVRGetRecordingDetailsResponse>("PVR.GetRecordingDetails", params);
  }

  /**
   * Retrieves the recordings
   */
  async GetRecordings(params: PVRGetRecordingsParams): Promise<PVRGetRecordingsResponse> {
    return this.sendMessage<PVRGetRecordingsResponse>("PVR.GetRecordings", params);
  }

  /**
   * Retrieves the details of a specific timer
   */
  async GetTimerDetails(params: PVRGetTimerDetailsParams): Promise<PVRGetTimerDetailsResponse> {
    return this.sendMessage<PVRGetTimerDetailsResponse>("PVR.GetTimerDetails", params);
  }

  /**
   * Retrieves the timers
   */
  async GetTimers(params: PVRGetTimersParams): Promise<PVRGetTimersResponse> {
    return this.sendMessage<PVRGetTimersResponse>("PVR.GetTimers", params);
  }

  /**
   * Toggle recording of a channel
   */
  async Record(params: PVRRecordParams): Promise<string> {
    return this.sendMessage<string>("PVR.Record", params);
  }

  /**
   * Starts a channel scan
   */
  async Scan(params: PVRScanParams): Promise<string> {
    return this.sendMessage<string>("PVR.Scan", params);
  }

  /**
   * Creates or deletes a onetime timer or timer rule for a given show. If it exists, it will be deleted. If it does not exist, it will be created
   */
  async ToggleTimer(params: PVRToggleTimerParams): Promise<string> {
    return this.sendMessage<string>("PVR.ToggleTimer", params);
  }

}