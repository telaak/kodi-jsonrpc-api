import { ListFilterRule } from './ListFilterRule';
import { ListFilterFieldsArtists } from './ListFilterFieldsArtists';

export interface ListFilterRuleArtists extends ListFilterRule {
  field: ListFilterFieldsArtists;
}