// Types and Interfaces Block
// These types and interfaces are specific to the Favourites methods and do not exist in koditestExports.ts

/**
 * FavouriteType ($ref: "Favourites.Type")
 * Enum for types of favourites.
 */
export type FavouriteType = "media" | "window" | "script" | "androidapp" | "unknown";

/**
 * Favourite.Details.Favourite ($ref: "Favourite.Details.Favourite")
 * Represents detailed information about a favourite.
 */
export interface Favourite {
  path?: string;
  thumbnail?: string;
  title: string;
  type: FavouriteType;
  window?: string;
  windowparameter?: string;
}

/**
 * Fields available for Favourite.Details.Favourite
 */
export type FavouriteFields = "window" | "windowparameter" | "thumbnail" | "path";

/**
 * Params for Favourites.GetFavourites
 */
export interface FavouritesGetFavouritesParams {
  type?: FavouriteType | null;
  properties?: FavouriteFields[];
}

/**
 * FavouritesGetFavouritesResponse ($ref: "Favourites.GetFavourites.Response")
 */
export interface FavouritesGetFavouritesResponse {
  favourites: Favourite[];
  limits: { total: number; start: number; end: number };
}

export interface FavouritesAddFavouriteParams {
  title: string;
  type: FavouriteType;
  path?: string | null;
  window?: string | null;
  windowparameter?: string | null;
  thumbnail?: string | null;
}

// AddFavourite returns a plain string per kodi.json - use primitive string where needed

// --- Helpers: typed const and factories for Favourite fields ---

/**
 * Readonly list of available Favourite fields.
 * Use this to reference available fields or to pick subsets when calling
 * `GetFavourites` with a properties list.
 */
export const favouriteFields = ["window", "windowparameter", "thumbnail", "path"] as const;

/**
 * Create a typed readonly tuple of FavouriteFields.
 * Preserves literal types for callers so TypeScript infers narrow tuple types
 * without requiring `as const` at each call site.
 *
 * Note: at runtime the readonly tuple is cast to `string[]` before sending
 * the RPC payload because the transport expects a plain array of strings.
 */
export function makeFavouriteFields<const P extends readonly FavouriteFields[]>(...p: P) {
  return p;
}

/** Alias for makeFavouriteFields to match helper naming patterns */
export const asFavouriteFields = makeFavouriteFields;
