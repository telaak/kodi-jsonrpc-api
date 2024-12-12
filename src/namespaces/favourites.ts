// Functions Block
// These functions correspond to the Favourites methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Favourites" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiFavouritesNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  FavouriteType,
  Favourite,
  FavouritesGetFavouritesResponse,
  FavouritesAddFavouriteParams,
  FavouritesAddFavouriteResponse,
} from "../types/favourites"; // Adjust the import path as necessary

export class KodiFavouritesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Adds an item to the favourites.
   *
   * @param title - The title of the favourite.
   * @param type - The type of the favourite (e.g., 'video', 'music').
   * @param path - Optional path for media, script, and androidapp favourites types.
   * @param window - Optional window name for window favourite type.
   * @param windowparameter - Optional window parameter.
   * @param thumbnail - Optional thumbnail URL for the favourite.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async AddFavourite(
    title: string,
    type: FavouriteType,
    path?: string,
    window?: string,
    windowparameter?: string,
    thumbnail?: string
  ): Promise<FavouritesAddFavouriteResponse> {
    const params: FavouritesAddFavouriteParams = {
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
   * Retrieves all favourites.
   *
   * @returns A promise resolving to a list of favourites.
   */
  async GetFavourites(): Promise<FavouritesGetFavouritesResponse> {
    return this.sendMessage("Favourites.GetFavourites", {});
  }
}
