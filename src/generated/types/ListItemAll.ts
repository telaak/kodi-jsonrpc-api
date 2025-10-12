import { ListItemBase } from './ListItemBase';
import { PVRChannelType } from './PVRChannelType';

export interface ListItemAll extends ListItemBase {
  channel?: string;
  channelnumber?: number;
  channeltype?: PVRChannelType;
  endtime?: string;
  hidden?: boolean;
  locked?: boolean;
  starttime?: string;
  subchannelnumber?: number;
}