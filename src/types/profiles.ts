// Types and Interfaces Block
// These types and interfaces are specific to the Profiles methods and do not exist in koditestExports.ts

/**
 * ProfileDetails ($ref: "Profiles.Details.Profile")
 * Represents the details of a user profile.
 */
export interface ProfileDetails {
  // Item.Details.Base provides `label` — keep that shape and add profile-specific fields
  label?: string;
  lockmode?: number; // Lock mode as defined in kodi.json
  thumbnail?: string; // URL to the profile's thumbnail image
}

/**
 * ProfilesGetProfilesParams ($ref: "Profiles.GetProfiles.Params")
 * Parameters for the GetProfiles method.
 */
export interface ProfilesGetProfilesParams {
  properties?: ProfilesPropertyName[]; // Optional list of properties to retrieve for each profile (Profiles.Fields.Profile)
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
  password?: { encryption?: "none" | "md5"; value?: string } | string; // Accept either the Profiles.Password object or raw string
}

/** Property names available on Profiles.Fields.Profile */
export type ProfilesPropertyName = "thumbnail" | "lockmode";

/** Typed const list of available profile properties */
export const profilesProps = ["thumbnail", "lockmode"] as const;

/**
 * Create a readonly tuple of profile property names preserving literal types.
 *
 * Example:
 *   const p = makeProfilesProps("thumbnail", "lockmode");
 *   // p is typed as readonly ["thumbnail","lockmode"]
 *
 * @example
 * ```ts
 * import { makeProfilesProps, profilesProps } from "../types/profiles";
 * const props = makeProfilesProps("thumbnail");
 * // const resp = await kodi.Profiles.GetProfiles({ properties: props });
 * ```
 */
export function makeProfilesProps<P extends readonly ProfilesPropertyName[]>(
  ...props: P
): P {
  return props;
}

/** Alias for makeProfilesProps */
export const asProfilesProps = makeProfilesProps;

/**
 * ProfilesLoadProfileResponse ($ref: "Profiles.LoadProfile.Response")
 * Response structure for the LoadProfile method.
 */
export interface ProfilesLoadProfileResponse {
  // The Kodi API returns a string on success per kodi.json; this type kept for compatibility but namespace will return string
  success?: boolean;
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
