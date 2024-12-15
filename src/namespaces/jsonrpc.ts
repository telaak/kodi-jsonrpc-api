import { ISendMessage } from "..";

export class KodiJSONRPCNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // JSONRPC Namespace Methods
  // =====================

  /**
   * Retrieves the current system configuration.
   *
   * @returns A promise that resolves to an object containing the system configuration.
   */
  async GetConfiguration(): Promise<GetConfigurationResponse> {
    const params: GetConfigurationParams = {};
    return this.sendMessage("JSONRPC.GetConfiguration", params);
  }

  /**
   * Retrieves information about the JSON-RPC API.
   *
   * @returns A promise that resolves to an object containing API version and available methods.
   */
  async Introspect(
    filter: IntrospectFilter,
    getdescriptions = true,
    getmetadata = false,
    filterbytransport = true
  ): Promise<IntrospectResponse> {
    const params: IntrospectParams = {
      filter,
      getdescriptions,
      getmetadata,
      filterbytransport,
    };
    return this.sendMessage("JSONRPC.Introspect", params);
  }

  /**
   * Sends a notification to all listeners.
   *
   * @param sender - Sender name/ID
   * @param message - The notification message.
   * @param data - Optional additional data to include with the notification.
   * @returns A promise that resolves to an object indicating the success status and a message.
   */
  async NotifyAll(sender: string, message: string, data?: any): Promise<any> {
    const params: NotifyAllParams = { sender, message, data };
    return this.sendMessage("JSONRPC.NotifyAll", params);
  }

  /**
   * Retrieve the client's permissions
   *
   * @returns A promise that resolves to an object indicating whether the action is allowed.
   */
  async Permission(): Promise<PermissionResponse> {
    const params: PermissionParams = {};
    return this.sendMessage("JSONRPC.Permission", params);
  }

  /**
   * Sends a ping to the JSON-RPC server to check connectivity.
   *
   * @returns A promise that resolves to an object containing a pong response.
   */
  async Ping(): Promise<string> {
    const params: PingParams = {};
    return this.sendMessage("JSONRPC.Ping", params);
  }

  /**
   * Updates a specific system configuration setting.
   *
   * @param notifications @type JSONRPCNotifications
   * @returns A promise that resolves to an object indicating the success status and a message.
   */
  async SetConfiguration(
    notifications: Partial<JSONRPCNotifications>
  ): Promise<SetConfigurationResponse> {
    const params: SetConfigurationParams = { notifications };
    return this.sendMessage("JSONRPC.SetConfiguration", params);
  }

  /**
   * Retrieves the current version of the system.
   *
   * @returns A promise that resolves to an object containing the version and build information.
   */
  async Version(): Promise<VersionResponse> {
    const params: VersionParams = {};
    return this.sendMessage("JSONRPC.Version", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available configuration keys.
 */
type ConfigurationKey = "volume" | "brightness" | "theme" | "language";

/**
 * Represents the parameters for GetConfiguration.
 */
interface GetConfigurationParams {
  // No parameters required for this method.
}

type IntrospectFilter = {
  getreferences: boolean;
  id: string;
  type: "method" | "namespace" | "type" | "notification";
};

/**
 * Represents the response structure for GetConfiguration.
 */
type GetConfigurationResponse = {
  notifications: JSONRPCNotifications;
};

type JSONRPCNotifications = {
  Application: boolean;
  AudioLibrary: boolean;
  GUI: boolean;
  Info: boolean;
  Input: boolean;
  Other: boolean;
  PVR: boolean;
  Player: boolean;
  Playlist: boolean;
  Sources: boolean;
  System: boolean;
  VideoLibrary: boolean;
};

/**
 * Represents the parameters for Introspect.
 */
interface IntrospectParams {
  filter: IntrospectFilter;
  getdescriptions?: boolean;
  getmetadata?: boolean;
  filterbytransport?: boolean;
}

/**
 * Represents the response structure for Introspect.
 */
interface IntrospectResponse {
  apiVersion: string;
  methods: string[];
}

/**
 * Represents the parameters for NotifyAll.
 */
interface NotifyAllParams {
  sender: string;
  message: string;
  data?: any;
}

/**
 * Represents the available permission actions.
 */
type PermissionAction = "read" | "write" | "execute";

/**
 * Represents the parameters for Permission.
 */
interface PermissionParams {}

/**
 * Represents the response structure for Permission.
 */
type PermissionResponse = JSONRPCNotifications;

type JSONPermissions = {
  ControlGUI: boolean;
  ControlNotify: boolean;
  ControlPVR: boolean;
  ControlPlayback: boolean;
  ControlPower: boolean;
  ControlSystem: boolean;
  ExecuteAddon: boolean;
  ManageAddon: boolean;
  Navigate: boolean;
  ReadData: boolean;
  RemoveData: boolean;
  UpdateData: boolean;
  WriteFile: boolean;
};

/**
 * Represents the parameters for Ping.
 */
interface PingParams {
  // No parameters required for this method.
}

/**
 * Represents the parameters for SetConfiguration.
 */
interface SetConfigurationParams {
  notifications: Partial<JSONRPCNotifications>;
}

/**
 * Represents the response structure for SetConfiguration.
 */
type SetConfigurationResponse = {
  notifications: JSONRPCNotifications;
};

/**
 * Represents the parameters for Version.
 */
interface VersionParams {
  // No parameters required for this method.
}

/**
 * Represents the response structure for Version.
 */
interface VersionResponse {
  version: {
    major: number;
    minor: number;
    patch: number;
  };
}
