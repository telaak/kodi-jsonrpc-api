import { ListFilterRule } from './ListFilterRule';
import { ListFilterFieldsTextures } from './ListFilterFieldsTextures';

export interface ListFilterRuleTextures extends ListFilterRule {
  field: ListFilterFieldsTextures;
}