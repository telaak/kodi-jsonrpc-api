import { ISendMessage } from "..";

export class KodiFilesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // Files Namespace Methods
  // =====================

  /**
   * Retrieves the contents of a specified directory.
   *
   * @param directory - The path of the directory to retrieve.
   * @param media - Optional media type to filter the directory contents.
   * @returns A promise that resolves to an object containing the list of files and pagination limits.
   */
  async GetDirectory(
    directory: string,
    media?: MediaType
  ): Promise<GetDirectoryResponse> {
    const params: GetDirectoryParams = { directory, media };
    return this.sendMessage("Files.GetDirectory", params);
  }

  /**
   * Retrieves detailed information about a specific file.
   *
   * @param file - The path of the file to retrieve details for.
   * @param media - Optional media type to provide context for the file details.
   * @param properties - Optional array of specific properties to retrieve.
   * @returns A promise that resolves to an object containing the file details.
   */
  async GetFileDetails(
    file: string,
    media?: MediaType,
    properties?: FileProperty[]
  ): Promise<GetFileDetailsResponse> {
    const params: GetFileDetailsParams = { file, media, properties };
    return this.sendMessage("Files.GetFileDetails", params);
  }

  /**
   * Retrieves all available media sources.
   *
   * @returns A promise that resolves to an object containing the list of sources and pagination limits.
   */
  async GetSources(): Promise<GetSourcesResponse> {
    return this.sendMessage("Files.GetSources", {});
  }

  /**
   * Sets or updates the details of a specific file.
   *
   * @param file - The path of the file to update.
   * @param details - An object containing the details to set or update.
   * @returns A promise that resolves to a confirmation string upon successful update.
   */
  async SetFileDetails(
    file: string,
    details: Partial<FileDetails>
  ): Promise<string> {
    const params: SetFileDetailsParams = { file, details };
    return this.sendMessage("Files.SetFileDetails", params);
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available media types.
 */
type MediaType = "unknown" | "video" | "music" | "image" | "program";

/**
 * Represents the properties that can be retrieved for a file.
 */
type FileProperty =
  | "label"
  | "thumbnail"
  | "path"
  | "type"
  | "size"
  | "mtime"
  | "is_dir"
  | "user"
  | "group"
  | "perm"
  | "duration"
  | "genre"
  | "artist"
  | "album"
  | "year"
  | "rating"
  | "resumepoint";

/**
 * Represents the parameters for the GetDirectory method.
 */
interface GetDirectoryParams {
  directory: string;
  media?: MediaType;
}

/**
 * Represents a single file or directory in the response.
 */
interface File {
  label: string;
  thumbnail: string;
  path: string;
  type: string;
  size: number;
  mtime: number;
  is_dir: boolean;
  user?: string;
  group?: string;
  perm?: string;
  duration?: number;
  genre?: string;
  artist?: string;
  album?: string;
  year?: number;
  rating?: number;
  resumepoint?: number;
}

/**
 * Represents the limits returned in responses that support pagination.
 */
interface ListLimits {
  start: number;
  end: number;
  total: number;
}

/**
 * Represents the response structure for the GetDirectory method.
 */
interface GetDirectoryResponse {
  files: File[];
  limits: ListLimits;
}

/**
 * Represents the parameters for the GetFileDetails method.
 */
interface GetFileDetailsParams {
  file: string;
  media?: MediaType;
  properties?: FileProperty[];
}

/**
 * Represents the detailed information of a file.
 */
interface FileDetails {
  label: string;
  thumbnail: string;
  path: string;
  type: string;
  size: number;
  mtime: number;
  is_dir: boolean;
  user?: string;
  group?: string;
  perm?: string;
  duration?: number;
  genre?: string;
  artist?: string;
  album?: string;
  year?: number;
  rating?: number;
  resumepoint?: number;
}

/**
 * Represents the response structure for the GetFileDetails method.
 */
interface GetFileDetailsResponse {
  filedetails: FileDetails;
}

/**
 * Represents the source of media.
 */
interface Source {
  id: string;
  label: string;
  path: string;
  type: string;
}

/**
 * Represents the response structure for the GetSources method.
 */
interface GetSourcesResponse {
  sources: Source[];
  limits: ListLimits;
}

/**
 * Represents the parameters for the SetFileDetails method.
 */
interface SetFileDetailsParams {
  file: string;
  details: Partial<FileDetails>;
}
