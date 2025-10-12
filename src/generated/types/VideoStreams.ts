import { VideoStreamsAudioItem } from './VideoStreamsAudioItem';
import { VideoStreamsSubtitleItem } from './VideoStreamsSubtitleItem';
import { VideoStreamsVideoItem } from './VideoStreamsVideoItem';

export interface VideoStreams {
  audio?: VideoStreamsAudioItem[];
  subtitle?: VideoStreamsSubtitleItem[];
  video?: VideoStreamsVideoItem[];
}