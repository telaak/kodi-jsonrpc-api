import { GlobalStringNotEmpty } from './GlobalStringNotEmpty';

export interface MediaUniqueID {
  [key: string]: GlobalStringNotEmpty | undefined;
}