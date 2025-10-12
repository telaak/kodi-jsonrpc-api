import { FavouriteDetailsFavourite } from './FavouriteDetailsFavourite';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface FavouritesGetFavouritesResponse {
  favourites?: FavouriteDetailsFavourite[];
  limits: ListLimitsReturned;
}