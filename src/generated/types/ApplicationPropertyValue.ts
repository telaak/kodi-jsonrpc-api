import { ArrayString } from './ArrayString';
import { ApplicationPropertyValueVersion } from './ApplicationPropertyValueVersion';

export interface ApplicationPropertyValue {
  language?: string;
  muted?: boolean;
  name?: string;
  sorttokens?: ArrayString;
  version?: ApplicationPropertyValueVersion;
  volume?: number;
}