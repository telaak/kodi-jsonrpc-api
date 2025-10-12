import { AddonsExecuteAddonParamsParamsOption0 } from './AddonsExecuteAddonParamsParamsOption0';

export interface AddonsExecuteAddonParams {
  addonid: string;
  params?: AddonsExecuteAddonParamsParamsOption0 | string[] | string;
  wait?: boolean;
}