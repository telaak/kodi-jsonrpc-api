import { ListLimitsReturned } from './ListLimitsReturned';
import { LibraryDetailsTag } from './LibraryDetailsTag';

export interface VideoLibraryGetTagsResponse {
  limits: ListLimitsReturned;
  tags: LibraryDetailsTag[];
}