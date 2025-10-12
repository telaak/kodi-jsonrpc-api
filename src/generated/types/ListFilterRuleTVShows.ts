import { ListFilterRule } from './ListFilterRule';
import { ListFilterFieldsTVShows } from './ListFilterFieldsTVShows';

export interface ListFilterRuleTVShows extends ListFilterRule {
  field: ListFilterFieldsTVShows;
}