// Functions Block
// These functions correspond to the Textures methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Textures" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiTexturesNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  Texture,
  TextureType,
  TextureFormat,
  TexturesGetTexturesParams,
  TexturesGetTexturesResponse,
  TexturesRemoveTextureParams,
  TexturesRemoveTextureResponse,
} from "../types/textures"; // Adjust the import path as necessary

export class KodiTexturesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves a list of textures based on the specified criteria.
   *
   * @param params - The parameters to filter and paginate the textures.
   * @returns A promise resolving to a list of textures and the total count.
   */
  // Overload: properties passed as a readonly tuple -> return narrowed Pick<> types
  async GetTextures<const P extends readonly (keyof Texture)[]>(
    params?: Omit<TexturesGetTexturesParams, "properties"> & { properties?: P }
  ): Promise<{
    textures: Pick<Texture, Extract<P[number], keyof Texture>>[];
    total: number;
  }>;

  // Fallback overload: no readonly-tuple inference
  async GetTextures(params?: TexturesGetTexturesParams): Promise<TexturesGetTexturesResponse>;

  // Implementation
  async GetTextures(params?: TexturesGetTexturesParams): Promise<any> {
    const requestParams = params || {};
    // `properties` may be a readonly tuple at compile-time; cast to runtime-friendly string[]
    const castParams = {
      ...requestParams,
      properties: (requestParams.properties as unknown) as string[] | undefined,
    };
    return this.sendMessage("Textures.GetTextures", castParams);
  }

  /**
   * Removes the specified texture from Kodi.
   *
   * @param textureid - The ID of the texture to remove.
   * @returns A promise resolving to a string, typically empty on success.
   */
  async RemoveTexture(textureid: number): Promise<TexturesRemoveTextureResponse> {
    const params: TexturesRemoveTextureParams = { textureid };
    return this.sendMessage("Textures.RemoveTexture", params);
  }
}
