import { JSONRPCIntrospectParamsFilter } from './JSONRPCIntrospectParamsFilter';

export interface JSONRPCIntrospectParams {
  getdescriptions?: boolean;
  getmetadata?: boolean;
  filterbytransport?: boolean;
  filter?: JSONRPCIntrospectParamsFilter;
}