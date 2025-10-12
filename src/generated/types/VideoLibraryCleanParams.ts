export interface VideoLibraryCleanParams {
  showdialogs?: boolean;
  content?: "video" | "movies" | "tvshows" | "musicvideos";
  directory?: string;
}