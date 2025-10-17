import { GlobalStringNotEmpty } from './GlobalStringNotEmpty';

export interface MediaUniqueIDSet {
  [key: string]: null | GlobalStringNotEmpty | undefined;
}