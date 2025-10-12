import { FavouriteType } from './FavouriteType';
import { FavouriteFieldsFavourite } from './FavouriteFieldsFavourite';

export interface FavouritesGetFavouritesParams {
  type?: any | FavouriteType;
  properties?: FavouriteFieldsFavourite;
}