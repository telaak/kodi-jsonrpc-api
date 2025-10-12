import { ItemDetailsBase } from './ItemDetailsBase';
import { LibraryId } from './LibraryId';

export interface PVRDetailsBroadcast extends ItemDetailsBase {
  broadcastid: LibraryId;
  cast?: string;
  clientid?: LibraryId;
  director?: string;
  endtime?: string;
  episodename?: string;
  episodenum?: number;
  episodepart?: number;
  firstaired?: string;
  genre?: string;
  hasrecording?: boolean;
  hasreminder?: boolean;
  hastimer?: boolean;
  hastimerrule?: boolean;
  imdbnumber?: number;
  isactive?: boolean;
  isplayable?: boolean;
  isseries?: boolean;
  originaltitle?: string;
  parentalrating?: number;
  plot?: string;
  plotoutline?: string;
  progress?: number;
  progresspercentage?: number;
  rating?: number;
  recording?: string;
  runtime?: number;
  seasonnum?: number;
  starttime?: string;
  thumbnail?: string;
  title?: string;
  wasactive?: boolean;
  writer?: string;
  year?: number;
}