import { ISendMessage } from "..";

export class KodiFavouritesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // Favourites Namespace Methods
  // =====================

  /**
   * Adds a new favourite with the specified details.
   *
   * @param name - The name of the favourite.
   * @param path - The file system path associated with the favourite.
   * @param thumbnail - Optional URL to the thumbnail image for the favourite.
   * @returns A promise that resolves to a confirmation string upon successful addition.
   */
  async AddFavourite(
    title: string,
    type: FavouriteType,
    path?: string,
    window?: string,
    windowparameter?: string,
    thumbnail?: string
  ): Promise<string> {
    const params: AddFavouriteParams = {
      title,
      type,
      path,
      window,
      windowparameter,
      thumbnail,
    };
    return this.sendMessage("Favourites.AddFavourite", params);
  }

  /**
   * Retrieves the list of all favourites.
   *
   * @returns A promise that resolves to an object containing an array of favourites.
   */
  async GetFavourites(): Promise<GetFavouritesResponse> {
    return this.sendMessage("Favourites.GetFavourites", {});
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available properties for a favourite.
 */
type FavouriteType = "media" | "window" | "script" | "androidapp" | "unknown";

/**
 * Represents the parameters for adding a favourite.
 */
type AddFavouriteParams = {
  title: string;
  type: FavouriteType;
  path?: string;
  window?: string;
  windowparameter?: string;
  thumbnail?: string;
}

/**
 * Represents a single favourite item.
 */
type Favourite  ={
  name: string;
  path: string;
  thumbnail?: string;
}

/**
 * Represents the response structure for getting favourites.
 */
type GetFavouritesResponse ={
  favourites: Favourite[];
}
