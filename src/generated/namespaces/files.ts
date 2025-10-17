import { ISendMessage } from '../../';
import { FilesMedia } from '../types/FilesMedia';
import { ListFieldsFiles } from '../types/ListFieldsFiles';
import { ListSort } from '../types/ListSort';
import { ListLimits } from '../types/ListLimits';
import { ListItemFile } from '../types/ListItemFile';
import { ListLimitsReturned } from '../types/ListLimitsReturned';
import { FilesGetDirectoryParams } from '../types/FilesGetDirectoryParams';
import { FilesGetDirectoryResponse } from '../types/FilesGetDirectoryResponse';
import { FilesGetFileDetailsParams } from '../types/FilesGetFileDetailsParams';
import { FilesGetFileDetailsResponse } from '../types/FilesGetFileDetailsResponse';
import { ListItemsSources } from '../types/ListItemsSources';
import { FilesGetSourcesParams } from '../types/FilesGetSourcesParams';
import { FilesGetSourcesResponse } from '../types/FilesGetSourcesResponse';
import { OptionalInteger } from '../types/OptionalInteger';
import { OptionalString } from '../types/OptionalString';
import { FilesSetFileDetailsParams } from '../types/FilesSetFileDetailsParams';


export class KodiFilesNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Get the directories and files in the given directory
   * @param directory string
   * @param media FilesMedia (optional)
   * @param properties ListFieldsFiles (optional)
   * @param sort ListSort (optional)
   * @param limits ListLimits (optional)
   * @returns FilesGetDirectoryResponse
   */
  async GetDirectory(params: FilesGetDirectoryParams): Promise<FilesGetDirectoryResponse> {
    return this.sendMessage<FilesGetDirectoryResponse>("Files.GetDirectory", params);
  }

  /**
   * Get details for a specific file
   * @param file string
   * @param media FilesMedia (optional)
   * @param properties ListFieldsFiles (optional)
   * @returns FilesGetFileDetailsResponse
   */
  async GetFileDetails(params: FilesGetFileDetailsParams): Promise<FilesGetFileDetailsResponse> {
    return this.sendMessage<FilesGetFileDetailsResponse>("Files.GetFileDetails", params);
  }

  /**
   * Get the sources of the media windows
   * @param media FilesMedia
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns FilesGetSourcesResponse
   */
  async GetSources(params: FilesGetSourcesParams): Promise<FilesGetSourcesResponse> {
    return this.sendMessage<FilesGetSourcesResponse>("Files.GetSources", params);
  }

  /**
   * Update the given specific file with the given details
   * @param file string
   * @param media FilesMedia
   * @param playcount OptionalInteger (optional)
   * @param lastplayed OptionalString (optional)
   * @param resume null | VideoResume (optional)
   * @returns string
   */
  async SetFileDetails(params: FilesSetFileDetailsParams): Promise<string> {
    return this.sendMessage<string>("Files.SetFileDetails", params);
  }

}