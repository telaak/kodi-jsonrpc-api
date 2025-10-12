import { GlobalStringNotEmpty } from './GlobalStringNotEmpty';

export interface ItemCustomProperties {
  [key: string]: GlobalStringNotEmpty | undefined;
}