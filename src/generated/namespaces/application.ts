import { ISendMessage } from '../../';

type __ApplicationPropertyValueKeys = keyof ApplicationPropertyValue;

import { ApplicationPropertyValue } from '../types/ApplicationPropertyValue';
import { ApplicationGetPropertiesParams } from '../types/ApplicationGetPropertiesParams';
import { GlobalToggle } from '../types/GlobalToggle';
import { ApplicationSetMuteParams } from '../types/ApplicationSetMuteParams';
import { ApplicationSetVolumeParams } from '../types/ApplicationSetVolumeParams';


export class KodiApplicationNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  async GetProperties<P extends readonly __ApplicationPropertyValueKeys[]>(params: { properties: P}): Promise<Pick<ApplicationPropertyValue, Extract<P[number], __ApplicationPropertyValueKeys>>>;
  /**
   * Retrieves the values of the given properties
   */
  async GetProperties(params: ApplicationGetPropertiesParams): Promise<ApplicationPropertyValue>;
  async GetProperties(params: any) {
    return this.sendMessage<ApplicationPropertyValue>("Application.GetProperties", params);
  }

  /**
   * Quit application
   */
  async Quit(): Promise<string> {
    return this.sendMessage<string>("Application.Quit", {});
  }

  /**
   * Toggle mute/unmute
   */
  async SetMute(params: ApplicationSetMuteParams): Promise<boolean> {
    return this.sendMessage<boolean>("Application.SetMute", params);
  }

  /**
   * Set the current volume
   */
  async SetVolume(params: ApplicationSetVolumeParams): Promise<number> {
    return this.sendMessage<number>("Application.SetVolume", params);
  }

}