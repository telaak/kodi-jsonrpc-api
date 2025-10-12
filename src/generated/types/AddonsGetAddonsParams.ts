import { AddonTypes } from './AddonTypes';
import { AddonContent } from './AddonContent';
import { AddonFields } from './AddonFields';
import { ListLimits } from './ListLimits';

export interface AddonsGetAddonsParams {
  type?: AddonTypes;
  content?: AddonContent;
  enabled?: boolean | "all";
  properties?: AddonFields;
  limits?: ListLimits;
  installed?: boolean | "all";
}