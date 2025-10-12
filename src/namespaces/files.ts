// Functions Block
// These functions correspond to the Files methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "Files" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiFilesNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  FileType,
  FileSource,
  FileItem,
  FilesGetSourcesResponse,
  FilesGetDirectoryResponse,
  FilesGetFileDetailsResponse,
  FileFields,
  fileProps,
  makeFileProps,
  asFileProps,
} from "../types/files"; // Adjust the import path as necessary

export class KodiFilesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves details of a specific file.
   *
   * @param file - Full path to the file to retrieve details for.
   * @param media - Optional media type to scope the query.
   * @param properties - Optional list of properties to request (compile-time
   *   callers may provide a readonly tuple from helper factories).
   */
  // Overloads to support readonly-tuple inference for properties
  async GetFileDetails<P extends readonly FileFields[]>(
    file: string,
    media: FileType | undefined,
    properties: P
  ): Promise<FilesGetFileDetailsResponse>;
  async GetFileDetails(
    file: string,
    media?: FileType,
    properties?: readonly string[]
  ): Promise<FilesGetFileDetailsResponse> {
    const params: any = { file } as any;
    if (media !== undefined) params.media = media;
    // cast readonly tuple to plain string[] for transport
    if (properties !== undefined) params.properties = properties as unknown as string[];
    return this.sendMessage("Files.GetFileDetails", params);
  }

  /**
   * Retrieves a list of file sources.
   *
   * @param media - Media type to list sources for.
   * @param limits - Optional limits for pagination.
   */
  async GetSources(media: FileType, limits?: any): Promise<FilesGetSourcesResponse> {
    const params: any = { media };
    if (limits !== undefined) params.limits = limits;
    return this.sendMessage("Files.GetSources", params);
  }

  /**
   * Retrieves the contents of a specific directory.
   *
   * @param directory - Directory path to retrieve.
   * @param media - Optional type of media to filter by.
   * @param properties - Optional list of properties to request per item.
   * @param sort - Optional sort descriptor.
   * @param limits - Optional pagination limits.
   */
  // Overloads to support readonly-tuple inference for properties
  async GetDirectory<P extends readonly FileFields[]>(
    directory: string,
    media: FileType | undefined,
    properties: P,
    sort?: any,
    limits?: any
  ): Promise<FilesGetDirectoryResponse>;
  async GetDirectory(
    directory: string,
    media?: FileType,
    properties?: readonly string[],
    sort?: any,
    limits?: any
  ): Promise<FilesGetDirectoryResponse> {
    const params: any = { directory } as any;
    if (media !== undefined) params.media = media;
    if (properties !== undefined) params.properties = properties as unknown as string[];
    if (sort !== undefined) params.sort = sort;
    if (limits !== undefined) params.limits = limits;
    return this.sendMessage("Files.GetDirectory", params);
  }
}
