import { ItemDetailsBase } from './ItemDetailsBase';
import { AddonDetailsDependenciesItem } from './AddonDetailsDependenciesItem';
import { AddonDetailsExtrainfoItem } from './AddonDetailsExtrainfoItem';
import { AddonTypes } from './AddonTypes';

export interface AddonDetails extends ItemDetailsBase {
  addonid: string;
  author?: string;
  broken?: boolean | string;
  dependencies?: AddonDetailsDependenciesItem[];
  deprecated?: boolean | string;
  description?: string;
  disclaimer?: string;
  enabled?: boolean;
  extrainfo?: AddonDetailsExtrainfoItem[];
  fanart?: string;
  installed?: boolean;
  name?: string;
  path?: string;
  rating?: number;
  summary?: string;
  thumbnail?: string;
  type: AddonTypes;
  version?: string;
}