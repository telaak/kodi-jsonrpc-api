import { PVRDetailsClient } from './PVRDetailsClient';
import { ListLimitsReturned } from './ListLimitsReturned';

export interface PVRGetClientsResponse {
  clients: PVRDetailsClient[];
  limits: ListLimitsReturned;
}