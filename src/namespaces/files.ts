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
  FilesGetDirectoryParams,
  FilesGetDirectoryResponse,
  FilesGetFileDetailsParams,
  FilesGetFileDetailsResponse,
} from "../types/files"; // Adjust the import path as necessary

export class KodiFilesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Retrieves details of a specific file.
   *
   * @param fileid - ID of the file to retrieve details for.
   * @returns A promise resolving to the file details.
   */
  async GetFileDetails(fileid: string): Promise<FilesGetFileDetailsResponse> {
    const params: FilesGetFileDetailsParams = { fileid };
    return this.sendMessage("Files.GetFileDetails", params);
  }

  /**
   * Retrieves a list of file sources.
   *
   * @returns A promise resolving to a list of file sources.
   */
  async GetSources(media: FileType): Promise<FilesGetSourcesResponse> {
    return this.sendMessage("Files.GetSources", { media });
  }

  /**
   * Retrieves the contents of a specific directory.
   *
   * @param directory - Directory path to retrieve.
   * @param media - Type of media to filter by ('video', 'music', etc.).
   * @returns A promise resolving to a list of files and directories.
   */
  async GetDirectory(
    directory: string,
    media: FileType
  ): Promise<FilesGetDirectoryResponse> {
    const params: FilesGetDirectoryParams = { directory, media };
    return this.sendMessage("Files.GetDirectory", params);
  }
}
