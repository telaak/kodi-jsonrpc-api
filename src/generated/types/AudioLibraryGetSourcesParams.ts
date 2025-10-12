import { LibraryFieldsSource } from './LibraryFieldsSource';
import { ListLimits } from './ListLimits';
import { ListSort } from './ListSort';

export interface AudioLibraryGetSourcesParams {
  properties?: LibraryFieldsSource;
  limits?: ListLimits;
  sort?: ListSort;
}