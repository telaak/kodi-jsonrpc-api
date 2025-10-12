import { ListFilterRule } from './ListFilterRule';
import { ListFilterFieldsAlbums } from './ListFilterFieldsAlbums';

export interface ListFilterRuleAlbums extends ListFilterRule {
  field: ListFilterFieldsAlbums;
}