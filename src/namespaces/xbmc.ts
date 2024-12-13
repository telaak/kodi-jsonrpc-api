import { ISendMessage } from "..";

export class KodiXBMCNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // XBMC Namespace Methods
  // =====================

  /**
   * Retrieves the specified boolean information from XBMC.
   *
   * @param information - An array of information keys to retrieve boolean values for.
   * @returns A promise that resolves to an object containing the requested boolean information.
   */
  async GetInfoBooleans(
    information: InfoBoolean[]
  ): Promise<GetInfoBooleansResponse> {
    const params: GetInfoBooleansParams = { information };
    return this.sendMessage("XBMC.GetInfoBooleans", params);
  }

  /**
   * Retrieves the specified label information from XBMC.
   *
   * @param information - An array of information keys to retrieve label values for.
   * @returns A promise that resolves to an object containing the requested label information.
   */
  async GetInfoLabels(
    information: InfoLabel[]
  ): Promise<GetInfoLabelsResponse> {
    const params: GetInfoLabelsParams = { information };
    return this.sendMessage("XBMC.GetInfoLabels", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available information boolean keys.
 */
type InfoBoolean = "fullscreen" | "mute" | "pause" | "onScreensaver";

/**
 * Represents the available information label keys.
 */
type InfoLabel = "currenttime" | "totaltime" | "percentage" | "version";

/**
 * Represents the parameters for GetInfoBooleans.
 */
interface GetInfoBooleansParams {
  information: InfoBoolean[];
}

/**
 * Represents the response structure for GetInfoBooleans.
 */
type GetInfoBooleansResponse = {
  [key in InfoBoolean]: boolean;
};

/**
 * Represents the parameters for GetInfoLabels.
 */
interface GetInfoLabelsParams {
  information: InfoLabel[];
}

/**
 * Represents the response structure for GetInfoLabels.
 */
type GetInfoLabelsResponse = {
  [key in InfoLabel]: string;
};
