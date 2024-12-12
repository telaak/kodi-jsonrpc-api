// Functions Block
// These functions correspond to the System methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "System" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiSystemNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import { SystemPropertyName, SystemPropertyValue } from "../types/system"; // Adjust the import path as necessary

export class KodiSystemNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Ejects or closes the optical disc drive (if available).
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async EjectOpticalDrive(): Promise<string> {
    return this.sendMessage("System.EjectOpticalDrive", {});
  }

  /**
   * Retrieves the values of the given system properties.
   *
   * @param properties - An array of system property names to retrieve.
   * @returns A promise resolving to an object containing the requested system properties and their values.
   */
  async GetProperties(
    properties: SystemPropertyName[]
  ): Promise<SystemPropertyValue> {
    const params = { properties };
    const response = await this.sendMessage("System.GetProperties", params);
    return response as SystemPropertyValue;
  }

  /**
   * Puts the system running Kodi into hibernate mode.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Hibernate(): Promise<string> {
    return this.sendMessage("System.Hibernate", {});
  }

  /**
   * Reboots the system running Kodi.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Reboot(): Promise<string> {
    return this.sendMessage("System.Reboot", {});
  }

  /**
   * Shuts the system running Kodi down.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async ShutDown(): Promise<string> {
    return this.sendMessage("System.ShutDown", {});
  }

  /**
   * Suspends the system running Kodi.
   *
   * @returns A promise resolving to a string, typically empty on success.
   */
  async Suspend(): Promise<string> {
    return this.sendMessage("System.Suspend", {});
  }
}
