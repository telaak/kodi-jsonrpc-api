// Functions Block
// These functions correspond to the XBMC methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "XBMC" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiXBMCNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import { GetInfoBooleansResponse, GetInfoLabelsResponse } from "../types/xbmc"; // Adjust the import path as necessary

export class KodiXBMCNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves the specified info booleans about Kodi and the system.
   *
   * @param booleans - An array of info boolean names to retrieve.
   * @returns A promise resolving to an object containing the requested info booleans and their states.
   */
  async GetInfoBooleans(booleans: string[]): Promise<GetInfoBooleansResponse> {
    const params = { booleans };
    const response = await this.sendMessage("XBMC.GetInfoBooleans", params);
    return response as GetInfoBooleansResponse;
  }

  /**
   * Retrieves the specified info labels about Kodi and the system.
   *
   * @param labels - An array of info label names to retrieve.
   * @returns A promise resolving to an object containing the requested info labels and their values.
   */
  async GetInfoLabels(labels: string[]): Promise<GetInfoLabelsResponse> {
    const params = { labels };
    const response = await this.sendMessage("XBMC.GetInfoLabels", params);
    return response as GetInfoLabelsResponse;
  }
}
