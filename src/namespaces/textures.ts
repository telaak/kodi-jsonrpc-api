import { ISendMessage } from "..";

export class KodiTexturesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // Textures Namespace Methods
  // =====================

  /**
   * Retrieves a list of textures based on the provided filters.
   *
   * @param category - Optional category to filter textures by type.
   * @param resolution - Optional resolution to filter textures.
   * @returns A promise that resolves to an object containing an array of textures.
   */
  async GetTextures(
    properties: TextureProperties
  ): Promise<GetTexturesResponse> {
    const params: GetTexturesParams = { properties };
    return this.sendMessage("Textures.GetTextures", params);
  }

  /**
   * Removes a texture with the specified ID.
   *
   * @param textureid - The ID of the texture to remove.
   * @returns A promise that resolves to an object indicating the success status and a message.
   */
  async RemoveTexture(textureid: number): Promise<RemoveTextureResponse> {
    const params: RemoveTextureParams = { textureid };
    return this.sendMessage("Textures.RemoveTexture", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available texture categories.
 */
type TextureCategory = "Diffuse" | "Specular" | "Normal" | "Ambient";

/**
 * Represents a texture object.
 */
interface Texture {
  id: string;
  name: string;
  filePath: string;
  category: TextureCategory;
  resolution: string;
  createdAt: string; // ISO date string
}

type TextureProperties =
  | "url"
  | "cachedurl"
  | "lasthashcheck"
  | "imagehash"
  | "sizes";

/**
 * Represents the parameters for GetTextures.
 */
interface GetTexturesParams {
  properties: TextureProperties;
}

/**
 * Represents the response structure for GetTextures.
 */
interface GetTexturesResponse {
  textures: Texture[];
}

/**
 * Represents the parameters for RemoveTexture.
 */
interface RemoveTextureParams {
  textureid: number;
}

/**
 * Represents the response structure for RemoveTexture.
 */
interface RemoveTextureResponse {
  success: boolean;
  message: string;
}
