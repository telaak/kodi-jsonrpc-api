import { ItemDetailsBase } from './ItemDetailsBase';
import { MediaArtwork } from './MediaArtwork';
import { LibraryId } from './LibraryId';
import { VideoResume } from './VideoResume';

export interface PVRDetailsRecording extends ItemDetailsBase {
  art?: MediaArtwork;
  channel?: string;
  channeluid?: number;
  clientid?: LibraryId;
  directory?: string;
  endtime?: string;
  epgeventid?: number;
  episode?: number;
  file?: string;
  genre?: string;
  icon?: string;
  isdeleted?: boolean;
  lifetime?: number;
  playcount?: number;
  plot?: string;
  plotoutline?: string;
  radio?: boolean;
  recordingid: LibraryId;
  resume?: VideoResume;
  runtime?: number;
  season?: number;
  showtitle?: string;
  starttime?: string;
  streamurl?: string;
  title?: string;
}