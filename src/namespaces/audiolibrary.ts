// Functions Block
// These functions correspond to the AudioLibrary methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "AudioLibrary" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiAudioLibraryNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  AlbumId,
  AlbumDetails,
  Album,
  ArtistId,
  ArtistDetails,
  Artist,
  AvailableArt,
  Genre,
  SongId,
  SongDetails,
  Song,
  AvailableArtTypesResponse,
  GenresResponse,
  PropertiesResponse,
  RecentlyAddedAlbumsResponse,
  RecentlyAddedSongsResponse,
  RecentlyPlayedAlbumsResponse,
  RecentlyPlayedSongsResponse,
  Role,
  RolesResponse,
  Source,
  SongDetailsResponse,
  SongsResponse,
  SourcesResponse,
  PVRProperties,
  ListLimits,
  ListLimitsReturned,
  ListSort,
  SetAlbumDetailsParams,
  SetArtistDetailsParams,
  SetSongDetailsParams,
  AlbumsResponse,
  ArtistsResponse,
  GetAlbumsFilter,
  GetArtistsFilter,
  GetPropertiesResponse,
  AudioProperty,
} from "../types/audiolibrary"; // Adjust the import path as necessary

export class KodiAudioLibraryNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Cleans the audio library by removing entries for missing files.
   *
   * @returns A promise resolving to a boolean indicating success.
   */
  async Clean(): Promise<boolean> {
    return this.sendMessage("AudioLibrary.Clean", {});
  }

  /**
   * Exports the audio library to a specified file.
   *
   * @param file - The file path to export the library to.
   * @returns A promise resolving to a string message upon success.
   */
  async Export(file: string): Promise<string> {
    const params = { file };
    return this.sendMessage("AudioLibrary.Export", params);
  }

  /**
   * Retrieves detailed information about a specific album.
   *
   * @param albumid - The ID of the album.
   * @returns A promise resolving to the AlbumDetails object.
   */
  async GetAlbumDetails(albumid: AlbumId): Promise<AlbumDetails> {
    const params = { albumid };
    return this.sendMessage("AudioLibrary.GetAlbumDetails", params);
  }

  /**
   * Retrieves detailed information about a specific artist.
   *
   * @param artistid - The ID of the artist.
   * @returns A promise resolving to the ArtistDetails object.
   */
  async GetArtistDetails(artistid: ArtistId): Promise<ArtistDetails> {
    const params = { artistid };
    return this.sendMessage("AudioLibrary.GetArtistDetails", params);
  }

  /**
   * Retrieves available artwork types.
   *
   * @returns A promise resolving to an array of available artwork types.
   */
  async GetAvailableArt(): Promise<AvailableArt[]> {
    return this.sendMessage("AudioLibrary.GetAvailableArt", {});
  }

  /**
   * Retrieves available artwork types.
   *
   * @returns A promise resolving to an array of available artwork types.
   */
  async GetAvailableArtTypes(): Promise<AvailableArtTypesResponse> {
    return this.sendMessage("AudioLibrary.GetAvailableArtTypes", {});
  }

  /**
   * Retrieves a list of music genres.
   *
   * @returns A promise resolving to the list of genres.
   */
  async GetGenres(): Promise<GenresResponse> {
    return this.sendMessage("AudioLibrary.GetGenres", {});
  }

  /**
   * Retrieves a list of recently added albums.
   *
   * @param limits - Optional pagination limits.
   * @returns A promise resolving to the list of recently added albums and pagination details.
   */
  async GetRecentlyAddedAlbums(
    limits?: ListLimits
  ): Promise<RecentlyAddedAlbumsResponse> {
    const params = { limits };
    return this.sendMessage("AudioLibrary.GetRecentlyAddedAlbums", params);
  }

  /**
   * Retrieves a list of recently added songs.
   *
   * @param limits - Optional pagination limits.
   * @returns A promise resolving to the list of recently added songs and pagination details.
   */
  async GetRecentlyAddedSongs(
    limits?: ListLimits
  ): Promise<RecentlyAddedSongsResponse> {
    const params = { limits };
    return this.sendMessage("AudioLibrary.GetRecentlyAddedSongs", params);
  }

  /**
   * Retrieves a list of recently played albums.
   *
   * @param limits - Optional pagination limits.
   * @returns A promise resolving to the list of recently played albums and pagination details.
   */
  async GetRecentlyPlayedAlbums(
    limits?: ListLimits
  ): Promise<RecentlyPlayedAlbumsResponse> {
    const params = { limits };
    return this.sendMessage("AudioLibrary.GetRecentlyPlayedAlbums", params);
  }

  /**
   * Retrieves a list of recently played songs.
   *
   * @param limits - Optional pagination limits.
   * @returns A promise resolving to the list of recently played songs and pagination details.
   */
  async GetRecentlyPlayedSongs(
    limits?: ListLimits
  ): Promise<RecentlyPlayedSongsResponse> {
    const params = { limits };
    return this.sendMessage("AudioLibrary.GetRecentlyPlayedSongs", params);
  }

  /**
   * Retrieves a list of available roles in the audio library.
   *
   * @returns A promise resolving to the list of roles.
   */
  async GetRoles(): Promise<RolesResponse> {
    return this.sendMessage("AudioLibrary.GetRoles", {});
  }

  /**
   * Retrieves detailed information about a specific song.
   *
   * @param songid - The ID of the song.
   * @returns A promise resolving to the SongDetails object.
   */
  async GetSongDetails(songid: SongId): Promise<SongDetails> {
    const params = { songid };
    return this.sendMessage("AudioLibrary.GetSongDetails", params);
  }

  /**
   * Retrieves a list of albums with optional filtering and pagination.
   *
   * @param properties - Optional list of properties to retrieve for each album.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @param filter - Optional filter criteria.
   * @returns A promise resolving to the list of albums and pagination details.
   */
  async GetAlbums(
    properties?: AudioProperty[],
    limits?: ListLimits,
    sort?: ListSort,
    filter?: GetAlbumsFilter
  ): Promise<AlbumsResponse> {
    const params = { properties, limits, sort, filter };
    return this.sendMessage("AudioLibrary.GetAlbums", params);
  }

  /**
   * Retrieves a list of artists with optional filtering and pagination.
   *
   * @param properties - Optional list of properties to retrieve for each artist.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @param filter - Optional filter criteria.
   * @returns A promise resolving to the list of artists and pagination details.
   */
  async GetArtists(
    properties?: AudioProperty[],
    limits?: ListLimits,
    sort?: ListSort,
    filter?: GetArtistsFilter
  ): Promise<ArtistsResponse> {
    const params = { properties, limits, sort, filter };
    return this.sendMessage("AudioLibrary.GetArtists", params);
  }

  /**
   * Retrieves specified properties from the audio library.
   *
   * @param properties - The list of properties to retrieve.
   * @returns A promise resolving to the requested properties and their values.
   */
  async GetProperties(
    properties: AudioProperty[]
  ): Promise<GetPropertiesResponse> {
    const params = { properties };
    return this.sendMessage("AudioLibrary.GetProperties", params);
  }

  /**
   * Retrieves a list of songs with optional filtering and pagination.
   *
   * @param properties - Optional list of properties to retrieve for each song.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @param filter - Optional filter criteria.
   * @param includesingles - Whether to include single songs.
   * @param allroles - Whether to include all roles when filtering by artist.
   * @param singlesonly - Whether to include only single songs.
   * @returns A promise resolving to the list of songs and pagination details.
   */
  async GetSongs(
    properties?: AudioProperty[],
    limits?: ListLimits,
    sort?: ListSort,
    filter?: any, // Define a specific type if available
    includesingles?: boolean,
    allroles?: boolean,
    singlesonly?: boolean
  ): Promise<SongsResponse> {
    const params = {
      properties,
      limits,
      sort,
      filter,
      includesingles,
      allroles,
      singlesonly,
    };
    return this.sendMessage("AudioLibrary.GetSongs", params);
  }

  /**
   * Retrieves a list of audio sources.
   *
   * @returns A promise resolving to the list of audio sources.
   */
  async GetSources(): Promise<SourcesResponse> {
    return this.sendMessage("AudioLibrary.GetSources", {});
  }

  /**
   * Refreshes the details of a specific album.
   *
   * @param albumid - The ID of the album to refresh.
   * @returns A promise resolving to a boolean indicating success.
   */
  async RefreshAlbum(albumid: AlbumId): Promise<boolean> {
    const params = { albumid };
    return this.sendMessage("AudioLibrary.RefreshAlbum", params);
  }

  /**
   * Refreshes the details of a specific artist.
   *
   * @param artistid - The ID of the artist to refresh.
   * @returns A promise resolving to a boolean indicating success.
   */
  async RefreshArtist(artistid: ArtistId): Promise<boolean> {
    const params = { artistid };
    return this.sendMessage("AudioLibrary.RefreshArtist", params);
  }

  /**
   * Scans the audio library for new additions.
   *
   * @returns A promise resolving to a boolean indicating if the scan was successful.
   */
  async Scan(): Promise<boolean> {
    return this.sendMessage("AudioLibrary.Scan", {});
  }

  /**
   * Updates the details of a specific album.
   *
   * @param albumid - The ID of the album to update.
   * @param properties - The properties to update.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetAlbumDetails(
    albumid: AlbumId,
    properties: Partial<AlbumDetails>
  ): Promise<boolean> {
    const params: SetAlbumDetailsParams = { albumid, properties };
    return this.sendMessage("AudioLibrary.SetAlbumDetails", params);
  }

  /**
   * Updates the details of a specific artist.
   *
   * @param artistid - The ID of the artist to update.
   * @param properties - The properties to update.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetArtistDetails(
    artistid: ArtistId,
    properties: Partial<ArtistDetails>
  ): Promise<boolean> {
    const params: SetArtistDetailsParams = { artistid, properties };
    return this.sendMessage("AudioLibrary.SetArtistDetails", params);
  }

  /**
   * Updates the details of a specific song.
   *
   * @param songid - The ID of the song to update.
   * @param properties - The properties to update.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetSongDetails(
    songid: SongId,
    properties: Partial<SongDetails>
  ): Promise<boolean> {
    const params: SetSongDetailsParams = { songid, properties };
    return this.sendMessage("AudioLibrary.SetSongDetails", params);
  }
}
