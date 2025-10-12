import { ListFilterRule } from './ListFilterRule';
import { ListFilterFieldsMovies } from './ListFilterFieldsMovies';

export interface ListFilterRuleMovies extends ListFilterRule {
  field: ListFilterFieldsMovies;
}