import { ISendMessage } from '../../';
import { XBMCGetInfoBooleansParams } from '../types/XBMCGetInfoBooleansParams';
import { XBMCGetInfoLabelsParams } from '../types/XBMCGetInfoLabelsParams';


export class KodiXBMCNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieve info booleans about Kodi and the system
   * @param booleans string[]
   * @returns Record<string, unknown>
   */
  async GetInfoBooleans(params: XBMCGetInfoBooleansParams): Promise<Record<string, unknown>> {
    return this.sendMessage<Record<string, unknown>>("XBMC.GetInfoBooleans", params);
  }

  /**
   * Retrieve info labels about Kodi and the system
   * @param labels string[]
   * @returns Record<string, unknown>
   */
  async GetInfoLabels(params: XBMCGetInfoLabelsParams): Promise<Record<string, unknown>> {
    return this.sendMessage<Record<string, unknown>>("XBMC.GetInfoLabels", params);
  }

}