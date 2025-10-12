import { ISendMessage } from '../../';
import { Configuration } from '../types/Configuration';
import { JSONRPCIntrospectParams } from '../types/JSONRPCIntrospectParams';
import { JSONRPCNotifyAllParams } from '../types/JSONRPCNotifyAllParams';
import { JSONRPCPermissionResponse } from '../types/JSONRPCPermissionResponse';
import { JSONRPCSetConfigurationParams } from '../types/JSONRPCSetConfigurationParams';
import { JSONRPCVersionResponse } from '../types/JSONRPCVersionResponse';


export class KodiJSONRPCNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Get client-specific configurations
   */
  async GetConfiguration(): Promise<Configuration> {
    return this.sendMessage("JSONRPC.GetConfiguration", {});
  }

  /**
   * Enumerates all actions and descriptions
   */
  async Introspect(params: JSONRPCIntrospectParams): Promise<Record<string, unknown>> {
    return this.sendMessage("JSONRPC.Introspect", params);
  }

  /**
   * Notify all other connected clients
   */
  async NotifyAll(params: JSONRPCNotifyAllParams): Promise<any> {
    return this.sendMessage("JSONRPC.NotifyAll", params);
  }

  /**
   * Retrieve the clients permissions
   */
  async Permission(): Promise<JSONRPCPermissionResponse> {
    return this.sendMessage("JSONRPC.Permission", {});
  }

  /**
   * Ping responder
   */
  async Ping(): Promise<string> {
    return this.sendMessage("JSONRPC.Ping", {});
  }

  /**
   * Change the client-specific configuration
   */
  async SetConfiguration(params: JSONRPCSetConfigurationParams): Promise<Configuration> {
    return this.sendMessage("JSONRPC.SetConfiguration", params);
  }

  /**
   * Retrieve the JSON-RPC protocol version.
   */
  async Version(): Promise<JSONRPCVersionResponse> {
    return this.sendMessage("JSONRPC.Version", {});
  }

}