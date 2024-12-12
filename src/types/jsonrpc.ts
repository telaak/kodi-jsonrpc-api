// Types and Interfaces Block
// These types and interfaces are specific to the JSONRPC methods and do not exist in koditestExports.ts

/**
 * Configuration ($ref: "Configuration")
 * Represents client-specific configurations.
 */
export interface Configuration {
  notifications?: Notifications;
  // Add additional configuration properties as defined in kodi.json
}

/**
 * Notifications ($ref: "Notifications")
 * Represents notification settings.
 */
export interface Notifications {
  application?: boolean | null;
  audiolibrary?: boolean | null;
  gui?: boolean | null;
  input?: boolean | null;
  other?: boolean | null;
  player?: boolean | null;
  playlist?: boolean | null;
  system?: boolean | null;
  videolibrary?: boolean | null;
}

/**
 * Filter ($ref: "JSONRPC.Introspect.Filter")
 * Represents the filter parameters for the Introspect method.
 */
export interface IntrospectFilter {
  getreferences?: boolean;
  id: string;
  type: IntrospectType;
}

/**
 * IntrospectType ($ref: "JSONRPC.Introspect.Filter.Type")
 * Enum for introspect filter types.
 */
export type IntrospectType = "method" | "namespace" | "type" | "notification";

/**
 * IntrospectParams ($ref: "JSONRPC.Introspect.Params")
 * Parameters for the Introspect method.
 */
export interface IntrospectParams {
  getdescriptions?: boolean;
  getmetadata?: boolean;
  filterbytransport?: boolean;
  filter?: IntrospectFilter;
}

/**
 * IntrospectResponse ($ref: "JSONRPC.Introspect.Response")
 * Response structure for the Introspect method.
 */
export interface IntrospectResponse {
  // Define properties as per kodi.json
  [key: string]: any;
}

/**
 * NotifyAllParams ($ref: "JSONRPC.NotifyAll.Params")
 * Parameters for the NotifyAll method.
 */
export interface NotifyAllParams {
  sender: string;
  message: string;
  data?: any;
}

/**
 * PermissionResponse ($ref: "JSONRPC.Permission.Response")
 * Response structure for the Permission method.
 */
export interface PermissionResponse {
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

/**
 * VersionResponse ($ref: "JSONRPC.Version.Response")
 * Response structure for the Version method.
 */
export interface VersionResponse {
  version: {
    major: number;
    minor: number;
    patch: number;
  };
}

/**
 * SetConfigurationParams ($ref: "JSONRPC.SetConfiguration.Params")
 * Parameters for the SetConfiguration method.
 */
export interface SetConfigurationParams {
  notifications: Notifications;
}

/**
 * PlayerSpeed ($ref: "Player.Speed")
 * Represents the playback speed.
 */
export type PlayerSpeed = number;

/**
 * GlobalToggle ($ref: "Global.Toggle")
 * Represents a toggle action.
 */
export type GlobalToggle = "toggle";

/**
 * IncrementDecrement ($ref: "Global.IncrementDecrement")
 * Represents increment or decrement actions.
 */
export type IncrementDecrement = "increment" | "decrement";
