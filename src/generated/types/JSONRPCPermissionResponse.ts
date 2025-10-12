export interface JSONRPCPermissionResponse {
  controlgui: boolean;
  controlnotify: boolean;
  controlplayback: boolean;
  controlpower: boolean;
  controlpvr: boolean;
  controlsystem: boolean;
  executeaddon: boolean;
  manageaddon: boolean;
  navigate: boolean;
  readdata: boolean;
  removedata: boolean;
  updatedata: boolean;
  writefile: boolean;
}