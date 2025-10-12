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
   * @returns string
   */
  async EjectOpticalDrive(): Promise<string> {
    return this.sendMessage<string>("System.EjectOpticalDrive", {});
  }

  async GetProperties<P extends readonly __SystemPropertyValueKeys[]>(params: { properties: P}): Promise<Pick<SystemPropertyValue, Extract<P[number], __SystemPropertyValueKeys>>>;
  /**
   * Retrieves the values of the given properties
   * @param properties SystemPropertyName[]
   * @returns SystemPropertyValue
   */
  async GetProperties(params: SystemGetPropertiesParams): Promise<SystemPropertyValue>;
  async GetProperties(params: any) {
    return this.sendMessage<SystemPropertyValue>("System.GetProperties", params);
  }

  /**
   * Puts the system running Kodi into hibernate mode
   * @returns string
   */
  async Hibernate(): Promise<string> {
    return this.sendMessage<string>("System.Hibernate", {});
  }

  /**
   * Reboots the system running Kodi
   * @returns string
   */
  async Reboot(): Promise<string> {
    return this.sendMessage<string>("System.Reboot", {});
  }

  /**
   * Shuts the system running Kodi down
   * @returns string
   */
  async Shutdown(): Promise<string> {
    return this.sendMessage<string>("System.Shutdown", {});
  }

  /**
   * Suspends the system running Kodi
   * @returns string
   */
  async Suspend(): Promise<string> {
    return this.sendMessage<string>("System.Suspend", {});
  }

}