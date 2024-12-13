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
  async Introspect(): Promise<IntrospectResponse> {
    const params: IntrospectParams = {};
    return this.sendMessage("JSONRPC.Introspect", params);
  }

  /**
   * Sends a notification to all listeners.
   *
   * @param message - The notification message.
   * @param data - Optional additional data to include with the notification.
   * @returns A promise that resolves to an object indicating the success status and a message.
   */
  async NotifyAll(message: string, data?: any): Promise<NotifyAllResponse> {
    const params: NotifyAllParams = { message, data };
    return this.sendMessage("JSONRPC.NotifyAll", params);
  }

  /**
   * Checks or sets permissions for a specific action on a resource.
   *
   * @param action - The action to check or set (e.g., "read", "write", "execute").
   * @param resource - The resource on which the action is to be performed.
   * @returns A promise that resolves to an object indicating whether the action is allowed.
   */
  async Permission(
    action: PermissionAction,
    resource: string
  ): Promise<PermissionResponse> {
    const params: PermissionParams = { action, resource };
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
   * @param key - The configuration key to set.
   * @param value - The new value to assign to the configuration key.
   * @returns A promise that resolves to an object indicating the success status and a message.
   */
  async SetConfiguration(
    key: ConfigurationKey,
    value: boolean | number | string
  ): Promise<SetConfigurationResponse> {
    const params: SetConfigurationParams = { key, value };
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

/**
 * Represents the response structure for GetConfiguration.
 */
type GetConfigurationResponse = {
  [key in ConfigurationKey]: boolean | number | string;
};

/**
 * Represents the parameters for Introspect.
 */
interface IntrospectParams {
  // No parameters required for this method.
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
  message: string;
  data?: any;
}

/**
 * Represents the response structure for NotifyAll.
 */
interface NotifyAllResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the available permission actions.
 */
type PermissionAction = "read" | "write" | "execute";

/**
 * Represents the parameters for Permission.
 */
interface PermissionParams {
  action: PermissionAction;
  resource: string;
}

/**
 * Represents the response structure for Permission.
 */
interface PermissionResponse {
  allowed: boolean;
}

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
  key: ConfigurationKey;
  value: boolean | number | string;
}

/**
 * Represents the response structure for SetConfiguration.
 */
interface SetConfigurationResponse {
  success: boolean;
  message: string;
}

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
  version: string;
  build: string;
}
