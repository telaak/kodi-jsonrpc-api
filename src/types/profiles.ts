// Types and Interfaces Block
// These types and interfaces are specific to the Profiles methods and do not exist in koditestExports.ts

/**
 * ProfileDetails ($ref: "Profiles.Details.Profile")
 * Represents the details of a user profile.
 */
export interface ProfileDetails {
  id: string; // Unique identifier for the profile
  name: string; // Name of the profile
  thumbnail: string; // URL to the profile's thumbnail image
  theme: string; // Theme applied to the profile
  // Additional properties can be added here as defined in kodi.json
}

/**
 * ProfilesGetProfilesParams ($ref: "Profiles.GetProfiles.Params")
 * Parameters for the GetProfiles method.
 */
export interface ProfilesGetProfilesParams {
  properties?: string[]; // Optional list of properties to retrieve for each profile
  limits?: ListLimits; // Optional limits for pagination
  sort?: ListSort; // Optional sorting options
}

/**
 * ProfilesGetProfilesResponse ($ref: "Profiles.GetProfiles.Response")
 * Response structure for the GetProfiles method.
 */
export interface ProfilesGetProfilesResponse {
  limits: ListLimitsReturned; // Pagination limits returned by the API
  profiles: ProfileDetails[]; // List of retrieved profiles
}

/**
 * ProfilesLoadProfileParams ($ref: "Profiles.LoadProfile.Params")
 * Parameters for the LoadProfile method.
 */
export interface ProfilesLoadProfileParams {
  profile: string; // Name of the profile to load
  prompt?: boolean; // Whether to prompt for a password if required
  password?: string; // Password for the profile, if applicable
}

/**
 * ProfilesLoadProfileResponse ($ref: "Profiles.LoadProfile.Response")
 * Response structure for the LoadProfile method.
 */
export interface ProfilesLoadProfileResponse {
  success: boolean; // Indicates whether the profile was loaded successfully
}

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
