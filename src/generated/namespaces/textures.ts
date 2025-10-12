import { ISendMessage } from '../../';
import { TexturesFieldsTexture } from '../types/TexturesFieldsTexture';
import { ListFilterTextures } from '../types/ListFilterTextures';
import { TexturesDetailsTexture } from '../types/TexturesDetailsTexture';
import { TexturesGetTexturesParams } from '../types/TexturesGetTexturesParams';
import { TexturesGetTexturesResponse } from '../types/TexturesGetTexturesResponse';
import { LibraryId } from '../types/LibraryId';
import { TexturesRemoveTextureParams } from '../types/TexturesRemoveTextureParams';


export class KodiTexturesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieve all textures
   * @param properties TexturesFieldsTexture (optional)
   * @param filter ListFilterTextures (optional)
   * @returns TexturesGetTexturesResponse
   */
  async GetTextures(params: TexturesGetTexturesParams): Promise<TexturesGetTexturesResponse> {
    return this.sendMessage<TexturesGetTexturesResponse>("Textures.GetTextures", params);
  }

  /**
   * Remove the specified texture
   * @param textureid LibraryId
   * @returns string
   */
  async RemoveTexture(params: TexturesRemoveTextureParams): Promise<string> {
    return this.sendMessage<string>("Textures.RemoveTexture", params);
  }

}