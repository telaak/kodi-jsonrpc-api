import { VideoDetailsItem } from './VideoDetailsItem';
import { ArrayString } from './ArrayString';
import { VideoResume } from './VideoResume';
import { VideoStreams } from './VideoStreams';

export interface VideoDetailsFile extends VideoDetailsItem {
  director?: ArrayString;
  resume?: VideoResume;
  runtime?: number;
  streamdetails?: VideoStreams;
}