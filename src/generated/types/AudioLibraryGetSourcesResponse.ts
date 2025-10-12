import { ListLimitsReturned } from './ListLimitsReturned';
import { LibraryDetailsSource } from './LibraryDetailsSource';

export interface AudioLibraryGetSourcesResponse {
  limits: ListLimitsReturned;
  sources: LibraryDetailsSource[];
}