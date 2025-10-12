import { ListLimitsReturned } from './ListLimitsReturned';
import { ListItemsSources } from './ListItemsSources';

export interface FilesGetSourcesResponse {
  limits: ListLimitsReturned;
  sources: ListItemsSources;
}