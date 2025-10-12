import { ListItemAll } from './ListItemAll';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface PlaylistGetItemsResponse {
  items: ListItemAll[];
  limits: ListLimitsReturned;
}