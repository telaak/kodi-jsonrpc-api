import { ListFilterRule } from './ListFilterRule';
import { ListFilterFieldsSongs } from './ListFilterFieldsSongs';

export interface ListFilterRuleSongs extends ListFilterRule {
  field: ListFilterFieldsSongs;
}