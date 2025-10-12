import { ListFilterRule } from './ListFilterRule';
import { ListFilterFieldsEpisodes } from './ListFilterFieldsEpisodes';

export interface ListFilterRuleEpisodes extends ListFilterRule {
  field: ListFilterFieldsEpisodes;
}