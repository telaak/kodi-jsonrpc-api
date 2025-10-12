import { ListItemFile } from './ListItemFile';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface FilesGetDirectoryResponse {
  files: ListItemFile[];
  limits: ListLimitsReturned;
}