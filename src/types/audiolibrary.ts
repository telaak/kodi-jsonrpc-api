// Types and Interfaces Block
// These types and interfaces are specific to the AudioLibrary methods and do not exist in koditestExports.ts

/**
 * AlbumId ($ref: "AudioLibrary.AlbumId")
 * Represents the unique identifier for an album.
 */
export type AlbumId = string;

/**
 * AlbumDetails ($ref: "AudioLibrary.AlbumDetails")
 * Represents the details of an album.
 */
export interface AlbumDetails {
  albumid: AlbumId; // Unique identifier for the album
  title: string; // Title of the album
  artistid: number; // ID of the artist
  genre: string; // Genre of the album
  year: number; // Release year of the album
  // Additional properties can be added here as defined in kodi.json
}

/**
 * Album ($ref: "AudioLibrary.Album")
 * Represents a simplified album object.
 */
export interface Album {
  albumid: AlbumId; // Unique identifier for the album
  title: string; // Title of the album
  artist: string; // Name of the artist
  genre: string; // Genre of the album
  year: number; // Release year of the album
  // Additional properties can be added here as defined in kodi.json
}

/**
 * ArtistId ($ref: "AudioLibrary.ArtistId")
 * Represents the unique identifier for an artist.
 */
export type ArtistId = number;

/**
 * ArtistDetails ($ref: "AudioLibrary.ArtistDetails")
 * Represents the details of an artist.
 */
export interface ArtistDetails {
  artistid: ArtistId; // Unique identifier for the artist
  name: string; // Name of the artist
  biography: string; // Biography of the artist
  // Additional properties can be added here as defined in kodi.json
}

/**
 * Artist ($ref: "AudioLibrary.Artist")
 * Represents a simplified artist object.
 */
export interface Artist {
  artistid: ArtistId; // Unique identifier for the artist
  name: string; // Name of the artist
  // Additional properties can be added here as defined in kodi.json
}

/**
 * AvailableArt ($ref: "AudioLibrary.AvailableArt")
 * Represents available artwork types.
 */
export type AvailableArt =
  | "thumb"
  | "fanart"
  | "poster"
  | "banner"
  | "landscape";

/**
 * Genre ($ref: "AudioLibrary.Genre")
 * Represents a music genre.
 */
export interface Genre {
  genreid: number; // Unique identifier for the genre
  name: string; // Name of the genre
}

/**
 * SongId ($ref: "AudioLibrary.SongId")
 * Represents the unique identifier for a song.
 */
export type SongId = string;

/**
 * SongDetails ($ref: "AudioLibrary.SongDetails")
 * Represents the details of a song.
 */
export interface SongDetails {
  songid: SongId; // Unique identifier for the song
  title: string; // Title of the song
  albumid: AlbumId; // ID of the album
  artistid: ArtistId; // ID of the artist
  genre: string; // Genre of the song
  duration: number; // Duration of the song in seconds
  filepath: string; // File path of the song
  // Additional properties can be added here as defined in kodi.json
}

/**
 * Song ($ref: "AudioLibrary.Song")
 * Represents a simplified song object.
 */
export interface Song {
  songid: SongId; // Unique identifier for the song
  title: string; // Title of the song
  album: string; // Title of the album
  artist: string; // Name of the artist
  genre: string; // Genre of the song
  duration: number; // Duration of the song in seconds
  // Additional properties can be added here as defined in kodi.json
}

/**
 * AvailableArtTypesResponse ($ref: "AudioLibrary.GetAvailableArtTypes.Response")
 * Response structure for the GetAvailableArtTypes method.
 */
export type AvailableArtTypesResponse = AvailableArt[];

/**
 * GenresResponse ($ref: "AudioLibrary.GetGenres.Response")
 * Response structure for the GetGenres method.
 */
export interface GenresResponse {
  genres: Genre[]; // List of retrieved genres
}

/**
 * PropertiesResponse ($ref: "AudioLibrary.GetProperties.Response")
 * Response structure for the GetProperties method.
 */
export type PropertiesResponse = PVRProperties; // Assuming similar structure

/**
 * RecentlyAddedAlbumsResponse ($ref: "AudioLibrary.GetRecentlyAddedAlbums.Response")
 * Response structure for the GetRecentlyAddedAlbums method.
 */
export interface RecentlyAddedAlbumsResponse {
  albums: Album[]; // List of recently added albums
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyAddedSongsResponse ($ref: "AudioLibrary.GetRecentlyAddedSongs.Response")
 * Response structure for the GetRecentlyAddedSongs method.
 */
export interface RecentlyAddedSongsResponse {
  songs: Song[]; // List of recently added songs
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyPlayedAlbumsResponse ($ref: "AudioLibrary.GetRecentlyPlayedAlbums.Response")
 * Response structure for the GetRecentlyPlayedAlbums method.
 */
export interface RecentlyPlayedAlbumsResponse {
  albums: Album[]; // List of recently played albums
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyPlayedSongsResponse ($ref: "AudioLibrary.GetRecentlyPlayedSongs.Response")
 * Response structure for the GetRecentlyPlayedSongs method.
 */
export interface RecentlyPlayedSongsResponse {
  songs: Song[]; // List of recently played songs
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * Role ($ref: "AudioLibrary.Role")
 * Represents a role in the audio library.
 */
export type Role =
  | "Artist"
  | "AlbumArtist"
  | "Composer"
  | "Conductor"
  | "Lyricist";

/**
 * RolesResponse ($ref: "AudioLibrary.GetRoles.Response")
 * Response structure for the GetRoles method.
 */
export interface RolesResponse {
  roles: Role[]; // List of available roles
}

/**
 * Source ($ref: "AudioLibrary.Source")
 * Represents an audio source.
 */
export interface Source {
  path: string; // Path to the source
  label: string; // Label of the source
  scanexcludes: string[]; // Paths to exclude from scanning
}

/**
 * SongDetailsResponse ($ref: "AudioLibrary.GetSongDetails.Response")
 * Response structure for the GetSongDetails method.
 */
export type SongDetailsResponse = SongDetails;

/**
 * SongsResponse ($ref: "AudioLibrary.GetSongs.Response")
 * Response structure for the GetSongs method.
 */
export interface SongsResponse {
  songs: Song[]; // List of retrieved songs
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * SourcesResponse ($ref: "AudioLibrary.GetSources.Response")
 * Response structure for the GetSources method.
 */
export interface SourcesResponse {
  sources: Source[]; // List of audio sources
}

/**
 * PVRProperties ($ref: "PVR.Properties")
 * Represents a set of properties for PVR methods.
 */
export interface PVRProperties {
  // Define properties as per kodi.json
  [key: string]: any;
}

/**
 * ListLimits ($ref: "List.Limits")
 * Represents pagination limits.
 */
export interface ListLimits {
  start?: number; // Starting index
  end?: number; // Ending index
}

/**
 * ListLimitsReturned ($ref: "List.LimitsReturned")
 * Represents the pagination limits returned by the API.
 */
export interface ListLimitsReturned {
  start: number; // Starting index
  end: number; // Ending index
  total: number; // Total number of items available
}

/**
 * ListSort ($ref: "List.Sort")
 * Represents sorting options.
 */
export interface ListSort {
  method: string; // Field by which to sort
  order: "ascending" | "descending"; // Order of sorting
}

/**
 * SetAlbumDetailsParams ($ref: "AudioLibrary.SetAlbumDetails.Params")
 * Parameters for the SetAlbumDetails method.
 */
export interface SetAlbumDetailsParams {
  albumid: AlbumId; // ID of the album to update
  properties: Partial<AlbumDetails>; // Properties to update
}

/**
 * SetArtistDetailsParams ($ref: "AudioLibrary.SetArtistDetails.Params")
 * Parameters for the SetArtistDetails method.
 */
export interface SetArtistDetailsParams {
  artistid: ArtistId; // ID of the artist to update
  properties: Partial<ArtistDetails>; // Properties to update
}

/**
 * SetSongDetailsParams ($ref: "AudioLibrary.SetSongDetails.Params")
 * Parameters for the SetSongDetails method.
 */
export interface SetSongDetailsParams {
  songid: SongId; // ID of the song to update
  properties: Partial<SongDetails>; // Properties to update
}

/**
 * GetPropertiesResponse ($ref: "Audio.Property.Value")
 * Represents the response structure for the GetProperties method.
 */
export interface GetPropertiesResponse {
  [key: string]: any; // Dynamic properties based on requested AudioProperty
}

/**
 * AlbumsResponse ($ref: "AudioLibrary.GetAlbums.Response")
 * Response structure for the GetAlbums method.
 */
export interface AlbumsResponse {
  albums: Album[]; // List of retrieved albums
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * ArtistsResponse ($ref: "AudioLibrary.GetArtists.Response")
 * Response structure for the GetArtists method.
 */
export interface ArtistsResponse {
  artists: Artist[]; // List of retrieved artists
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * SongsResponse ($ref: "AudioLibrary.GetSongs.Response")
 * Response structure for the GetSongs method.
 */
export interface SongsResponse {
  songs: Song[]; // List of retrieved songs
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * GetArtistsFilter ($ref: "AudioLibrary.GetArtists.Params.filter")
 * Represents the filter options for the GetArtists method.
 */
export type GetArtistsFilter =
  | { genreid: string } // Deprecated
  | { songgenreid: string }
  | { roleid: string; songgenreid: string }
  | { role: string; songgenreid: string }
  | { genre: string } // Deprecated
  | { songgenre: string }
  | { roleid: string; songgenre: string }
  | { role: string; songgenre: string }
  | { albumid: string }
  | { album: string }
  | { songid: string }
  | { roleid: string; songid: string }
  | { role: string; songid: string }
  | { roleid: string } // With description
  | { role: string }
  | ListFilterArtists;

/**
 * ListFilterAlbums ($ref: "List.Filter.Albums")
 * Represents additional filter options for albums.
 */
export interface ListFilterAlbums {
  // Define specific filter properties based on kodi.json
  [key: string]: any;
}

/**
 * ListFilterArtists ($ref: "List.Filter.Artists")
 * Represents additional filter options for artists.
 */
export interface ListFilterArtists {
  // Define specific filter properties based on kodi.json
  [key: string]: any;
}

/**
 * GetAlbumsFilter ($ref: "AudioLibrary.GetAlbums.Params.filter")
 * Represents the filter options for the GetAlbums method.
 */
export type GetAlbumsFilter =
  | { genreid: string }
  | { genre: string }
  | { artistid: string }
  | { artistid: string; roleid: string }
  | { artistid: string; role: string }
  | { artist: string }
  | { artist: string; roleid: string }
  | { artist: string; role: string }
  | { albumid: string }
  | { album: string }
  | { songid: string }
  | { artistid: string; songid: string }
  | { artist: string; songid: string }
  | { roleid: string }
  | { role: string }
  | ListFilterAlbums;

/**
 * AudioProperty ($ref: "Audio.Property.Name")
 * Represents a property name relevant to AudioLibrary methods.
 * This type is a union of all possible property names that can be requested.
 */
export type AudioProperty =
  | "album"
  | "albumartist"
  | "artist"
  | "genre"
  | "title"
  | "year"
  | "track"
  | "duration"
  | "file"
  | "rating"
  | "path"
  | "musicfolders"
  | "lastscan"
  | "keeplibrary"
  | "sources"
  | "items"
  | "lastupdate"
  | "albumartists"
  | "artists"
  | "albums"
  | "songs"
  | "genres"
  | "recentlyaddedalbums"
  | "recentlyaddedsongs"
  | "recentlyplayedalbums"
  | "recentlyplayedsongs"
  | "musicdbversion"
  | "isplaying"
  | "datadir"
  | "id"
  | "name";
