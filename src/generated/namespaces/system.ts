import { ISendMessage } from '../../';

type __SystemPropertyValueKeys = keyof SystemPropertyValue;

import { SystemPropertyValue } from '../types/SystemPropertyValue';
import { SystemGetPropertiesParams } from '../types/SystemGetPropertiesParams';


export class KodiSystemNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Ejects or closes the optical disc drive (if available)
   */
  async EjectOpticalDrive(): Promise<string> {
    return this.sendMessage("System.EjectOpticalDrive", {});
  }

  async GetProperties<P extends readonly __SystemPropertyValueKeys[]>(params: { properties: P}): Promise<{ item: Pick<SystemPropertyValue, Extract<P[number], __SystemPropertyValueKeys>> }>;
  /**
   * Retrieves the values of the given properties
   */
  async GetProperties(params: SystemGetPropertiesParams): Promise<SystemPropertyValue>;
  async GetProperties(params: SystemGetPropertiesParams) {
    return this.sendMessage("System.GetProperties", params);
  }

  /**
   * Puts the system running Kodi into hibernate mode
   */
  async Hibernate(): Promise<string> {
    return this.sendMessage("System.Hibernate", {});
  }

  /**
   * Reboots the system running Kodi
   */
  async Reboot(): Promise<string> {
    return this.sendMessage("System.Reboot", {});
  }

  /**
   * Shuts the system running Kodi down
   */
  async Shutdown(): Promise<string> {
    return this.sendMessage("System.Shutdown", {});
  }

  /**
   * Suspends the system running Kodi
   */
  async Suspend(): Promise<string> {
    return this.sendMessage("System.Suspend", {});
  }

}