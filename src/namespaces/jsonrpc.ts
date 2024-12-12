// Functions Block
// These functions correspond to the JSONRPC methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "JSONRPC" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiJSONRPCNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  Configuration,
  Notifications,
  IntrospectFilter,
  IntrospectType,
  IntrospectParams,
  IntrospectResponse,
  NotifyAllParams,
  PermissionResponse,
  VersionResponse,
  SetConfigurationParams,
  PlayerSpeed,
  GlobalToggle,
  IncrementDecrement,
} from "../types/jsonrpc"; // Adjust the import path as necessary

export class KodiJSONRPCNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves client-specific configurations.
   *
   * @returns A promise resolving to the Configuration object.
   */
  async GetConfiguration(): Promise<Configuration> {
    return this.sendMessage("JSONRPC.GetConfiguration", {});
  }

  /**
   * Enumerates all actions and descriptions based on the provided filters.
   *
   * @param params - The parameters to filter the introspection.
   * @returns A promise resolving to the introspection details.
   */
  async Introspect(params: IntrospectParams): Promise<IntrospectResponse> {
    return this.sendMessage("JSONRPC.Introspect", params);
  }

  /**
   * Notifies all other connected clients with a message.
   *
   * @param sender - The name of the sender.
   * @param message - The message to send.
   * @param data - Optional data to include with the message.
   * @returns A promise resolving to any response from the clients.
   */
  async NotifyAll(sender: string, message: string, data?: any): Promise<any> {
    const params: NotifyAllParams = { sender, message, data };
    return this.sendMessage("JSONRPC.NotifyAll", params);
  }

  /**
   * Retrieves the client's permissions.
   *
   * @returns A promise resolving to the PermissionResponse object.
   */
  async Permission(): Promise<PermissionResponse> {
    return this.sendMessage("JSONRPC.Permission", {});
  }

  /**
   * Pings the JSON-RPC responder.
   *
   * @returns A promise resolving to a string response.
   */
  async Ping(): Promise<string> {
    return this.sendMessage("JSONRPC.Ping", {});
  }

  /**
   * Changes the client-specific configuration.
   *
   * @param notifications - The notifications settings to apply.
   * @returns A promise resolving to the updated Configuration object.
   */
  async SetConfiguration(notifications: Notifications): Promise<Configuration> {
    const params: SetConfigurationParams = { notifications };
    return this.sendMessage("JSONRPC.SetConfiguration", params);
  }

  /**
   * Retrieves the JSON-RPC protocol version.
   *
   * @returns A promise resolving to the VersionResponse object.
   */
  async Version(): Promise<VersionResponse> {
    return this.sendMessage("JSONRPC.Version", {});
  }
}
