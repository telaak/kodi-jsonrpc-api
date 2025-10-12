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
   */
  async GetDirectory(params: FilesGetDirectoryParams): Promise<FilesGetDirectoryResponse> {
    return this.sendMessage("Files.GetDirectory", params);
  }

  /**
   * Get details for a specific file
   */
  async GetFileDetails(params: FilesGetFileDetailsParams): Promise<FilesGetFileDetailsResponse> {
    return this.sendMessage("Files.GetFileDetails", params);
  }

  /**
   * Get the sources of the media windows
   */
  async GetSources(params: FilesGetSourcesParams): Promise<FilesGetSourcesResponse> {
    return this.sendMessage("Files.GetSources", params);
  }

  /**
   * Update the given specific file with the given details
   */
  async SetFileDetails(params: FilesSetFileDetailsParams): Promise<string> {
    return this.sendMessage("Files.SetFileDetails", params);
  }

}