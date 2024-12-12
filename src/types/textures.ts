// Types and Interfaces Block
// These types and interfaces are specific to the Textures methods and do not exist in koditestExports.ts

/**
 * Texture ($ref: "Textures.Texture")
 * Represents a texture item.
 */
export interface Texture {
  textureid: string; // Unique identifier for the texture
  name: string; // Name of the texture
  type: TextureType; // Type of the texture
  format: TextureFormat; // Format of the texture
  url: string; // URL to the texture image
  size: number; // Size of the texture in bytes
  dateAdded: string; // Date when the texture was added
}

/**
 * TextureType ($ref: "Textures.TextureType")
 * Enum for types of textures.
 */
export type TextureType =
  | "background"
  | "icon"
  | "banner"
  | "thumbnail"
  | "profile"
  | "custom";

/**
 * TextureFormat ($ref: "Textures.TextureFormat")
 * Enum for texture formats.
 */
export type TextureFormat = "PNG" | "JPEG" | "BMP" | "TGA" | "GIF" | "TIFF";

/**
 * TexturesGetTexturesParams ($ref: "Textures.GetTextures.Params")
 * Parameters for the GetTextures method.
 */
export interface TexturesGetTexturesParams {
  properties?: TextureFields[]; // Optional list of properties to retrieve for each texture
  filter?: TextureFilter; // Optional filter criteria
  limit?: number; // Optional limit on the number of textures to retrieve
  offset?: number; // Optional offset for pagination
}

/**
 * TexturesGetTexturesResponse ($ref: "Textures.GetTextures.Response")
 * Response structure for the GetTextures method.
 */
export interface TexturesGetTexturesResponse {
  textures: Texture[]; // List of retrieved textures
  total: number; // Total number of textures available
}

/**
 * TexturesRemoveTextureParams ($ref: "Textures.RemoveTexture.Params")
 * Parameters for the RemoveTexture method.
 */
export interface TexturesRemoveTextureParams {
  textureid: string; // ID of the texture to remove
}

/**
 * TexturesRemoveTextureResponse ($ref: "Textures.RemoveTexture.Response")
 * Response structure for the RemoveTexture method.
 */
export type TexturesRemoveTextureResponse = string; // Typically empty on success

/**
 * TextureFields ($ref: "Textures.Fields.Texture")
 * Enum for texture fields that can be retrieved.
 */
export type TextureFields =
  | "textureid"
  | "name"
  | "type"
  | "format"
  | "url"
  | "size"
  | "dateAdded";

/**
 * TextureFilter ($ref: "Textures.Filter")
 * Interface for filtering textures.
 */
export interface TextureFilter {
  type?: TextureType; // Filter by texture type
  format?: TextureFormat; // Filter by texture format
  nameContains?: string; // Filter textures containing a specific name
}
