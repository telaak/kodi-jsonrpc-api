// Functions Block
// These functions correspond to the Profiles methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Profiles" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiProfilesNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  ProfileDetails,
  ProfilesGetProfilesParams,
  ProfilesGetProfilesResponse,
  ProfilesLoadProfileParams,
  ProfilesLoadProfileResponse,
  ListLimits,
  ListLimitsReturned,
  ListSort,
} from "../types/profiles"; // Adjust the import path as necessary

export class KodiProfilesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves the current active profile.
   *
   * @returns A promise resolving to the details of the current profile.
   */
  async GetCurrentProfile(): Promise<ProfileDetails> {
    return this.sendMessage("Profiles.GetCurrentProfile", {});
  }

  /**
   * Retrieves all available profiles with optional filtering and pagination.
   *
   * @param properties - Optional list of properties to retrieve for each profile.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @returns A promise resolving to a list of profiles and pagination details.
   */
  async GetProfiles(
    properties?: string[],
    limits?: ListLimits,
    sort?: ListSort
  ): Promise<ProfilesGetProfilesResponse> {
    const params: ProfilesGetProfilesParams = { properties, limits, sort };
    return this.sendMessage("Profiles.GetProfiles", params);
  }

  /**
   * Loads the specified profile, optionally prompting for a password.
   *
   * @param profile - The name of the profile to load.
   * @param prompt - Whether to prompt for a password if required.
   * @param password - The password for the profile, if applicable.
   * @returns A promise resolving to a boolean indicating success.
   */
  async LoadProfile(
    profile: string,
    prompt: boolean = false,
    password: string = ""
  ): Promise<ProfilesLoadProfileResponse> {
    const params: ProfilesLoadProfileParams = { profile, prompt, password };
    return this.sendMessage("Profiles.LoadProfile", params);
  }
}
