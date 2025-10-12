import { GlobalStringNotEmpty } from './GlobalStringNotEmpty';

export interface MediaUniqueIDSet {
  [key: string]: any | GlobalStringNotEmpty | undefined;
}