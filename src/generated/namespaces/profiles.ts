import { ISendMessage } from '../../';

type __ProfilesDetailsProfileKeys = keyof ProfilesDetailsProfile;

import { ProfilesFieldsProfile } from '../types/ProfilesFieldsProfile';
import { ProfilesDetailsProfile } from '../types/ProfilesDetailsProfile';
import { ProfilesGetCurrentProfileParams } from '../types/ProfilesGetCurrentProfileParams';
import { ListLimits } from '../types/ListLimits';
import { ListSort } from '../types/ListSort';
import { ListLimitsReturned } from '../types/ListLimitsReturned';
import { ProfilesGetProfilesParams } from '../types/ProfilesGetProfilesParams';
import { ProfilesGetProfilesResponse } from '../types/ProfilesGetProfilesResponse';
import { ProfilesPassword } from '../types/ProfilesPassword';
import { ProfilesLoadProfileParams } from '../types/ProfilesLoadProfileParams';


export class KodiProfilesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  async GetCurrentProfile<P extends readonly __ProfilesDetailsProfileKeys[]>(params: { properties: P}): Promise<Pick<ProfilesDetailsProfile, Extract<P[number], __ProfilesDetailsProfileKeys>>>;
  /**
   * Retrieve the current profile
   */
  async GetCurrentProfile(params: ProfilesGetCurrentProfileParams): Promise<ProfilesDetailsProfile>;
  async GetCurrentProfile(params: any) {
    return this.sendMessage<ProfilesDetailsProfile>("Profiles.GetCurrentProfile", params);
  }

  /**
   * Retrieve all profiles
   */
  async GetProfiles(params: ProfilesGetProfilesParams): Promise<ProfilesGetProfilesResponse> {
    return this.sendMessage<ProfilesGetProfilesResponse>("Profiles.GetProfiles", params);
  }

  /**
   * Load the specified profile
   */
  async LoadProfile(params: ProfilesLoadProfileParams): Promise<string> {
    return this.sendMessage<string>("Profiles.LoadProfile", params);
  }

}