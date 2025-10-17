import { FavouriteType } from './FavouriteType';
import { FavouriteFieldsFavourite } from './FavouriteFieldsFavourite';

export interface FavouritesGetFavouritesParams {
  type?: null | FavouriteType;
  properties?: FavouriteFieldsFavourite;
}