import { FavouriteType } from './FavouriteType';
import { OptionalString } from './OptionalString';

export interface FavouritesAddFavouriteParams {
  title: string;
  type: FavouriteType;
  path?: OptionalString;
  window?: OptionalString;
  windowparameter?: OptionalString;
  thumbnail?: OptionalString;
}