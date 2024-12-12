// Types and Interfaces Block
// These types and interfaces are specific to the Files methods and do not exist in koditestExports.ts

/**
 * FileType ($ref: "Files.Media")
 * Enum for types of media files.
 */
export type FileType = "video" | "music" | "pictures" | "files" | "programs";

/**
 * FileSource ($ref: "Files.Source")
 * Represents a file source.
 */
export interface FileSource {
  id: string; // Unique identifier for the source
  name: string; // Name of the source
  path: string; // Path to the source
}

/**
 * FileItem ($ref: "Files.Item")
 * Represents a file or directory item.
 */
export interface FileItem {
  fileid: string; // Unique identifier for the file
  name: string; // Name of the file or directory
  path: string; // Full path to the file or directory
  type: FileType; // Type of the file
  size: number; // Size of the file in bytes
  date: string; // Last modified date
}

/**
 * FilesGetSourcesResponse ($ref: "Files.GetSources.Response")
 * Response structure for the GetSources method.
 */
export interface FilesGetSourcesResponse {
  sources: FileSource[]; // List of file sources
}

/**
 * FilesGetDirectoryParams ($ref: "Files.GetDirectory.Params")
 * Parameters for the GetDirectory method.
 */
export interface FilesGetDirectoryParams {
  directory: string; // Directory path to retrieve
  media: FileType; // Type of media ('video', 'music', etc.)
}

/**
 * FilesGetDirectoryResponse ($ref: "Files.GetDirectory.Response")
 * Response structure for the GetDirectory method.
 */
export interface FilesGetDirectoryResponse {
  files: FileItem[]; // List of files and directories
}

/**
 * FilesGetFileDetailsParams ($ref: "Files.GetFileDetails.Params")
 * Parameters for the GetFileDetails method.
 */
export interface FilesGetFileDetailsParams {
  fileid: string; // ID of the file to retrieve details for
}

/**
 * FilesGetFileDetailsResponse ($ref: "Files.GetFileDetails.Response")
 * Response structure for the GetFileDetails method.
 */
export interface FilesGetFileDetailsResponse {
  details: FileItem; // Details of the specified file
}
