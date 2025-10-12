export interface ApplicationPropertyValueVersion {
  major: number;
  minor: number;
  revision?: string | number;
  tag: "prealpha" | "alpha" | "beta" | "releasecandidate" | "stable";
  tagversion?: string;
}