import { ListFilterOperators } from './ListFilterOperators';

export interface ListFilterRule {
  operator: ListFilterOperators;
  value: string | string[];
}