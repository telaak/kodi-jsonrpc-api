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
   */
  async AddFavourite(params: FavouritesAddFavouriteParams): Promise<string> {
    return this.sendMessage<string>("Favourites.AddFavourite", params);
  }

  /**
   * Retrieve all favourites
   */
  async GetFavourites(params: FavouritesGetFavouritesParams): Promise<FavouritesGetFavouritesResponse> {
    return this.sendMessage<FavouritesGetFavouritesResponse>("Favourites.GetFavourites", params);
  }

}