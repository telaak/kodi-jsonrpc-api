// Functions Block
// These functions correspond to the Profiles methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Profiles" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiProfilesNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";

export class KodiProfilesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // Profiles Namespace Methods
  // =====================

  /**
   * Retrieves the current active profile.
   *
   * @returns A promise that resolves to an object containing the current profile.
   */
  async GetCurrentProfile(): Promise<GetCurrentProfileResponse> {
    const params: {} = {};
    return this.sendMessage("Profiles.GetCurrentProfile", params);
  }

  /**
   * Retrieves all available profiles.
   *
   * @returns A promise that resolves to an object containing an array of profiles.
   */
  async GetProfiles(): Promise<GetProfilesResponse> {
    const params: {} = {};
    return this.sendMessage("Profiles.GetProfiles", params);
  }

  /**
   * Loads the specified profile.
   *
   * @param profileId - The unique identifier of the profile to load.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async LoadProfile(profileId: string): Promise<LoadProfileResponse> {
    const params: LoadProfileParams = { profileId };
    return this.sendMessage("Profiles.LoadProfile", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the type of a profile.
 */
type ProfileType = "admin" | "user" | "guest";

/**
 * Represents a profile object.
 */
interface Profile {
  id: string;
  name: string;
  type: ProfileType;
  settings: any; // Define more specifically if possible
}

/**
 * Represents the parameters for LoadProfile.
 */
interface LoadProfileParams {
  profileId: string;
}

/**
 * Represents the response structure for LoadProfile.
 */
interface LoadProfileResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the response structure for GetCurrentProfile.
 */
interface GetCurrentProfileResponse {
  profile: Profile;
}

/**
 * Represents the response structure for GetProfiles.
 */
interface GetProfilesResponse {
  profiles: Profile[];
}
