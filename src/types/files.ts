// Types and Interfaces Block
// These types and interfaces are specific to the Files methods and mirror
// the kodi.json schema for Files.* methods.

/**
 * FileType ($ref: "Files.Media")
 * Enum for types of media files.
 */
export type FileType = "video" | "music" | "pictures" | "files" | "programs";

/**
 * FileSource ($ref: "List.Items.Sources" / "Files.Source")
 * Represents a source item returned by Files.GetSources.
 */
export interface FileSource {
  // per schema this includes at least `file` (path). Additional fields from
  // Item.Details.Base may also be present depending on Kodi version.
  file: string;
  [key: string]: any;
}

/**
 * FileItem ($ref: "List.Item.File")
 * Maps to kodi.json's List.Item.File (which extends List.Item.Base).
 */
export interface FileItem {
  file: string; // full path
  filetype: "file" | "directory";
  lastmodified?: string;
  mimetype?: string;
  size?: number;
  // allow additional properties from List.Item.Base
  [key: string]: any;
}

/**
 * Fields available for List.Item.File (List.Fields.Files)
 * This is a curated subset matching kodi.json's List.Fields.Files enum for
 * files. Callers can pass these to request specific properties for file
 * entries.
 */
export type FileFields =
  | "title"
  | "artist"
  | "albumartist"
  | "genre"
  | "year"
  | "rating"
  | "album"
  | "track"
  | "duration"
  | "comment"
  | "lyrics"
  | "playcount"
  | "fanart"
  | "director"
  | "trailer"
  | "tagline"
  | "plot"
  | "plotoutline"
  | "originaltitle"
  | "lastplayed"
  | "writer"
  | "studio"
  | "mpaa"
  | "cast"
  | "country"
  | "imdbnumber"
  | "premiered"
  | "runtime"
  | "streamdetails"
  | "resume";

/**
 * Typed const list of available file properties (List.Fields.Files) exported
 * as a convenience and for use with `makeFileProps`.
 */
export const fileProps = [
  "title",
  "artist",
  "albumartist",
  "genre",
  "year",
  "rating",
  "album",
  "track",
  "duration",
  "comment",
  "lyrics",
  "playcount",
  "fanart",
  "director",
  "trailer",
  "tagline",
  "plot",
  "plotoutline",
  "originaltitle",
  "lastplayed",
  "writer",
  "studio",
  "mpaa",
  "cast",
  "country",
  "imdbnumber",
  "premiered",
  "runtime",
  "streamdetails",
  "resume",
] as const;

/**
 * Create a typed readonly tuple of FileFields.
 * Preserves literal types for callers so TypeScript infers narrow tuple types
 * without requiring `as const` at each call site.
 *
 * Note: at runtime the readonly tuple is sent as a plain string[] in the
 * JSON-RPC payload; namespace wrappers cast it accordingly.
 */
export function makeFileProps<const P extends readonly FileFields[]>(...p: P) {
  return p;
}

/** Alias for makeFileProps */
export const asFileProps = makeFileProps;

/**
 * FilesGetSourcesResponse ($ref: "Files.GetSources.Response")
 */
export interface FilesGetSourcesResponse {
  limits: ListLimitsReturned;
  sources: FileSource[];
}

/**
 * FilesGetDirectoryParams ($ref: "Files.GetDirectory.Params")
 * Note: `media`, `properties`, `sort` and `limits` are optional per schema
 * (defaults are applied by Kodi when omitted).
 */
export interface FilesGetDirectoryParams {
  directory: string;
  media?: FileType;
  properties?: string[];
  sort?: ListSort;
  limits?: ListLimits;
}

/**
 * FilesGetDirectoryResponse ($ref: "Files.GetDirectory.Response")
 */
export interface FilesGetDirectoryResponse {
  files: FileItem[];
  limits: ListLimitsReturned;
}

/**
 * FilesGetFileDetailsResponse ($ref: "Files.GetFileDetails.Response")
 */
export interface FilesGetFileDetailsResponse {
  filedetails: FileItem;
}

/**
 * ListLimits ($ref: "List.Limits")
 */
export interface ListLimits {
  start?: number;
  end?: number;
}

/**
 * ListLimitsReturned ($ref: "List.LimitsReturned")
 */
export interface ListLimitsReturned {
  start: number;
  end: number;
  total: number;
}

/**
 * ListSort ($ref: "List.Sort")
 */
export interface ListSort {
  method: string;
  order: "ascending" | "descending";
}
