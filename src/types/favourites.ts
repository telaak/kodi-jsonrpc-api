// Types and Interfaces Block
// These types and interfaces are specific to the Favourites methods and do not exist in koditestExports.ts

/**
 * FavouriteType ($ref: "Favourites.Type")
 * Enum for types of favourites.
 */
export type FavouriteType = "video" | "music" | "pictures" | "programs";

/**
 * Favourite ($ref: "Favourites.Favourite")
 * Represents a favourite item.
 */
export interface Favourite {
  favouriteid: string; // Unique identifier for the favourite
  name: string; // Name of the favourite
  type: FavouriteType; // Type of the favourite
  itemid: string; // ID of the item
}

/**
 * FavouritesGetFavouritesResponse ($ref: "Favourites.GetFavourites.Response")
 * Response structure for the GetFavourites method.
 */
export interface FavouritesGetFavouritesResponse {
  favourites: Favourite[]; // List of favourites
}

/**
 * FavouritesAddFavouriteParams ($ref: "Favourites.AddFavourite.Params")
 * Parameters for the AddFavourite method.
 */
export interface FavouritesAddFavouriteParams {
  title: string; // Title of the favourite
  type: FavouriteType; // Type of the favourite
  path?: string; // Required for media, script, and androidapp favourites types
  window?: string; // Required for window favourite type
  windowparameter?: string; // Optional window parameter
  thumbnail?: string; // Optional thumbnail URL
}

/**
 * FavouritesAddFavouriteResponse ($ref: "Favourites.AddFavourite.Response")
 * Response structure for the AddFavourite method.
 */
export type FavouritesAddFavouriteResponse = string; // Typically empty on success
