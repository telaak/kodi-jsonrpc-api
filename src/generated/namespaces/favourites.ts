import { ISendMessage } from '../../';
import { FavouriteType } from '../types/FavouriteType';
import { OptionalString } from '../types/OptionalString';
import { FavouritesAddFavouriteParams } from '../types/FavouritesAddFavouriteParams';
import { FavouriteFieldsFavourite } from '../types/FavouriteFieldsFavourite';
import { FavouriteDetailsFavourite } from '../types/FavouriteDetailsFavourite';
import { ListLimitsReturned } from '../types/ListLimitsReturned';
import { FavouritesGetFavouritesParams } from '../types/FavouritesGetFavouritesParams';
import { FavouritesGetFavouritesResponse } from '../types/FavouritesGetFavouritesResponse';


export class KodiFavouritesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Add a favourite with the given details
   * @param title string
   * @param type FavouriteType
   * @param path OptionalString (optional)
   * @param window OptionalString (optional)
   * @param windowparameter OptionalString (optional)
   * @param thumbnail OptionalString (optional)
   * @returns string
   */
  async AddFavourite(params: FavouritesAddFavouriteParams): Promise<string> {
    return this.sendMessage<string>("Favourites.AddFavourite", params);
  }

  /**
   * Retrieve all favourites
   * @param type null | FavouriteType (optional)
   * @param properties FavouriteFieldsFavourite (optional)
   * @returns FavouritesGetFavouritesResponse
   */
  async GetFavourites(params: FavouritesGetFavouritesParams): Promise<FavouritesGetFavouritesResponse> {
    return this.sendMessage<FavouritesGetFavouritesResponse>("Favourites.GetFavourites", params);
  }

}