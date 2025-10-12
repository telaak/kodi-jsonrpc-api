import { ISendMessage } from '../../';

type __AudioPropertyValueKeys = keyof AudioPropertyValue;

import { AudioLibraryCleanParams } from '../types/AudioLibraryCleanParams';
import { AudioLibraryExportParams } from '../types/AudioLibraryExportParams';
import { LibraryId } from '../types/LibraryId';
import { AudioFieldsAlbum } from '../types/AudioFieldsAlbum';
import { AudioDetailsAlbum } from '../types/AudioDetailsAlbum';
import { AudioLibraryGetAlbumDetailsParams } from '../types/AudioLibraryGetAlbumDetailsParams';
import { AudioLibraryGetAlbumDetailsResponse } from '../types/AudioLibraryGetAlbumDetailsResponse';
import { ListLimits } from '../types/ListLimits';
import { ListSort } from '../types/ListSort';
import { ListLimitsReturned } from '../types/ListLimitsReturned';
import { AudioLibraryGetAlbumsParams } from '../types/AudioLibraryGetAlbumsParams';
import { AudioLibraryGetAlbumsResponse } from '../types/AudioLibraryGetAlbumsResponse';
import { AudioFieldsArtist } from '../types/AudioFieldsArtist';
import { AudioDetailsArtist } from '../types/AudioDetailsArtist';
import { AudioLibraryGetArtistDetailsParams } from '../types/AudioLibraryGetArtistDetailsParams';
import { AudioLibraryGetArtistDetailsResponse } from '../types/AudioLibraryGetArtistDetailsResponse';
import { OptionalBoolean } from '../types/OptionalBoolean';
import { AudioLibraryGetArtistsParams } from '../types/AudioLibraryGetArtistsParams';
import { AudioLibraryGetArtistsResponse } from '../types/AudioLibraryGetArtistsResponse';
import { AudioLibraryGetAvailableArtParams } from '../types/AudioLibraryGetAvailableArtParams';
import { AudioLibraryGetAvailableArtResponse } from '../types/AudioLibraryGetAvailableArtResponse';
import { AudioLibraryGetAvailableArtTypesParams } from '../types/AudioLibraryGetAvailableArtTypesParams';
import { AudioLibraryGetAvailableArtTypesResponse } from '../types/AudioLibraryGetAvailableArtTypesResponse';
import { LibraryFieldsGenre } from '../types/LibraryFieldsGenre';
import { LibraryDetailsGenre } from '../types/LibraryDetailsGenre';
import { AudioLibraryGetGenresParams } from '../types/AudioLibraryGetGenresParams';
import { AudioLibraryGetGenresResponse } from '../types/AudioLibraryGetGenresResponse';
import { AudioPropertyValue } from '../types/AudioPropertyValue';
import { AudioLibraryGetPropertiesParams } from '../types/AudioLibraryGetPropertiesParams';
import { AudioLibraryGetRecentlyAddedAlbumsParams } from '../types/AudioLibraryGetRecentlyAddedAlbumsParams';
import { AudioLibraryGetRecentlyAddedAlbumsResponse } from '../types/AudioLibraryGetRecentlyAddedAlbumsResponse';
import { ListAmount } from '../types/ListAmount';
import { AudioFieldsSong } from '../types/AudioFieldsSong';
import { AudioDetailsSong } from '../types/AudioDetailsSong';
import { AudioLibraryGetRecentlyAddedSongsParams } from '../types/AudioLibraryGetRecentlyAddedSongsParams';
import { AudioLibraryGetRecentlyAddedSongsResponse } from '../types/AudioLibraryGetRecentlyAddedSongsResponse';
import { AudioLibraryGetRecentlyPlayedAlbumsParams } from '../types/AudioLibraryGetRecentlyPlayedAlbumsParams';
import { AudioLibraryGetRecentlyPlayedAlbumsResponse } from '../types/AudioLibraryGetRecentlyPlayedAlbumsResponse';
import { AudioLibraryGetRecentlyPlayedSongsParams } from '../types/AudioLibraryGetRecentlyPlayedSongsParams';
import { AudioLibraryGetRecentlyPlayedSongsResponse } from '../types/AudioLibraryGetRecentlyPlayedSongsResponse';
import { AudioFieldsRole } from '../types/AudioFieldsRole';
import { AudioDetailsRole } from '../types/AudioDetailsRole';
import { AudioLibraryGetRolesParams } from '../types/AudioLibraryGetRolesParams';
import { AudioLibraryGetRolesResponse } from '../types/AudioLibraryGetRolesResponse';
import { AudioLibraryGetSongDetailsParams } from '../types/AudioLibraryGetSongDetailsParams';
import { AudioLibraryGetSongDetailsResponse } from '../types/AudioLibraryGetSongDetailsResponse';
import { AudioLibraryGetSongsParams } from '../types/AudioLibraryGetSongsParams';
import { AudioLibraryGetSongsResponse } from '../types/AudioLibraryGetSongsResponse';
import { LibraryFieldsSource } from '../types/LibraryFieldsSource';
import { LibraryDetailsSource } from '../types/LibraryDetailsSource';
import { AudioLibraryGetSourcesParams } from '../types/AudioLibraryGetSourcesParams';
import { AudioLibraryGetSourcesResponse } from '../types/AudioLibraryGetSourcesResponse';
import { AudioLibraryScanParams } from '../types/AudioLibraryScanParams';
import { OptionalString } from '../types/OptionalString';
import { OptionalNumber } from '../types/OptionalNumber';
import { OptionalInteger } from '../types/OptionalInteger';
import { AudioLibrarySetAlbumDetailsParams } from '../types/AudioLibrarySetAlbumDetailsParams';
import { AudioLibrarySetArtistDetailsParams } from '../types/AudioLibrarySetArtistDetailsParams';
import { AudioLibrarySetSongDetailsParams } from '../types/AudioLibrarySetSongDetailsParams';


export class KodiAudioLibraryNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Cleans the audio library from non-existent items
   */
  async Clean(params: AudioLibraryCleanParams): Promise<string> {
    return this.sendMessage("AudioLibrary.Clean", params);
  }

  /**
   * Exports all items from the audio library
   */
  async Export(params: AudioLibraryExportParams): Promise<string> {
    return this.sendMessage("AudioLibrary.Export", params);
  }

  /**
   * Retrieve details about a specific album
   */
  async GetAlbumDetails(params: AudioLibraryGetAlbumDetailsParams): Promise<AudioLibraryGetAlbumDetailsResponse> {
    return this.sendMessage("AudioLibrary.GetAlbumDetails", params);
  }

  /**
   * Retrieve all albums from specified artist (and role) or that has songs of the specified genre
   */
  async GetAlbums(params: AudioLibraryGetAlbumsParams): Promise<AudioLibraryGetAlbumsResponse> {
    return this.sendMessage("AudioLibrary.GetAlbums", params);
  }

  /**
   * Retrieve details about a specific artist
   */
  async GetArtistDetails(params: AudioLibraryGetArtistDetailsParams): Promise<AudioLibraryGetArtistDetailsResponse> {
    return this.sendMessage("AudioLibrary.GetArtistDetails", params);
  }

  /**
   * Retrieve all artists. For backward compatibility by default this implicitly does not include those that only contribute other roles, however absolutely all artists can be returned using allroles=true
   */
  async GetArtists(params: AudioLibraryGetArtistsParams): Promise<AudioLibraryGetArtistsResponse> {
    return this.sendMessage("AudioLibrary.GetArtists", params);
  }

  /**
   * Retrieve all potential art URLs for a media item by art type
   */
  async GetAvailableArt(params: AudioLibraryGetAvailableArtParams): Promise<AudioLibraryGetAvailableArtResponse> {
    return this.sendMessage("AudioLibrary.GetAvailableArt", params);
  }

  /**
   * Retrieve a list of potential art types for a media item
   */
  async GetAvailableArtTypes(params: AudioLibraryGetAvailableArtTypesParams): Promise<AudioLibraryGetAvailableArtTypesResponse> {
    return this.sendMessage("AudioLibrary.GetAvailableArtTypes", params);
  }

  /**
   * Retrieve all genres
   */
  async GetGenres(params: AudioLibraryGetGenresParams): Promise<AudioLibraryGetGenresResponse> {
    return this.sendMessage("AudioLibrary.GetGenres", params);
  }

  async GetProperties<P extends readonly __AudioPropertyValueKeys[]>(params: { properties: P}): Promise<{ item: Pick<AudioPropertyValue, Extract<P[number], __AudioPropertyValueKeys>> }>;
  /**
   * Retrieves the values of the music library properties
   */
  async GetProperties(params: AudioLibraryGetPropertiesParams): Promise<AudioPropertyValue>;
  async GetProperties(params: AudioLibraryGetPropertiesParams) {
    return this.sendMessage("AudioLibrary.GetProperties", params);
  }

  /**
   * Retrieve recently added albums
   */
  async GetRecentlyAddedAlbums(params: AudioLibraryGetRecentlyAddedAlbumsParams): Promise<AudioLibraryGetRecentlyAddedAlbumsResponse> {
    return this.sendMessage("AudioLibrary.GetRecentlyAddedAlbums", params);
  }

  /**
   * Retrieve recently added songs
   */
  async GetRecentlyAddedSongs(params: AudioLibraryGetRecentlyAddedSongsParams): Promise<AudioLibraryGetRecentlyAddedSongsResponse> {
    return this.sendMessage("AudioLibrary.GetRecentlyAddedSongs", params);
  }

  /**
   * Retrieve recently played albums
   */
  async GetRecentlyPlayedAlbums(params: AudioLibraryGetRecentlyPlayedAlbumsParams): Promise<AudioLibraryGetRecentlyPlayedAlbumsResponse> {
    return this.sendMessage("AudioLibrary.GetRecentlyPlayedAlbums", params);
  }

  /**
   * Retrieve recently played songs
   */
  async GetRecentlyPlayedSongs(params: AudioLibraryGetRecentlyPlayedSongsParams): Promise<AudioLibraryGetRecentlyPlayedSongsResponse> {
    return this.sendMessage("AudioLibrary.GetRecentlyPlayedSongs", params);
  }

  /**
   * Retrieve all contributor roles
   */
  async GetRoles(params: AudioLibraryGetRolesParams): Promise<AudioLibraryGetRolesResponse> {
    return this.sendMessage("AudioLibrary.GetRoles", params);
  }

  /**
   * Retrieve details about a specific song
   */
  async GetSongDetails(params: AudioLibraryGetSongDetailsParams): Promise<AudioLibraryGetSongDetailsResponse> {
    return this.sendMessage("AudioLibrary.GetSongDetails", params);
  }

  /**
   * Retrieve all songs from specified album, artist or genre
   */
  async GetSongs(params: AudioLibraryGetSongsParams): Promise<AudioLibraryGetSongsResponse> {
    return this.sendMessage("AudioLibrary.GetSongs", params);
  }

  /**
   * Get all music sources, including unique ID
   */
  async GetSources(params: AudioLibraryGetSourcesParams): Promise<AudioLibraryGetSourcesResponse> {
    return this.sendMessage("AudioLibrary.GetSources", params);
  }

  /**
   * Scans the audio sources for new library items
   */
  async Scan(params: AudioLibraryScanParams): Promise<string> {
    return this.sendMessage("AudioLibrary.Scan", params);
  }

  /**
   * Update the given album with the given details
   */
  async SetAlbumDetails(params: AudioLibrarySetAlbumDetailsParams): Promise<string> {
    return this.sendMessage("AudioLibrary.SetAlbumDetails", params);
  }

  /**
   * Update the given artist with the given details
   */
  async SetArtistDetails(params: AudioLibrarySetArtistDetailsParams): Promise<string> {
    return this.sendMessage("AudioLibrary.SetArtistDetails", params);
  }

  /**
   * Update the given song with the given details
   */
  async SetSongDetails(params: AudioLibrarySetSongDetailsParams): Promise<string> {
    return this.sendMessage("AudioLibrary.SetSongDetails", params);
  }

}