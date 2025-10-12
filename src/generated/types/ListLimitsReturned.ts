import { ListAmount } from './ListAmount';

export interface ListLimitsReturned {
  end?: ListAmount;
  start?: number;
  total: number;
}