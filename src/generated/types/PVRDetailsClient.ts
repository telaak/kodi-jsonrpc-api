import { ItemDetailsBase } from './ItemDetailsBase';
import { LibraryId } from './LibraryId';

export interface PVRDetailsClient extends ItemDetailsBase {
  addonid?: string;
  clientid: LibraryId;
  supportschannelgroups?: boolean;
  supportschannelscan?: boolean;
  supportsepg?: boolean;
  supportsradio?: boolean;
  supportsrecordings?: boolean;
  supportstimers?: boolean;
  supportstv?: boolean;
}