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
   * @param showdialogs boolean (optional)
   * @returns string
   */
  async Clean(params: AudioLibraryCleanParams): Promise<string> {
    return this.sendMessage<string>("AudioLibrary.Clean", params);
  }

  /**
   * Exports all items from the audio library
   * @param options AudioLibraryExportParamsOptionsOption0 | AudioLibraryExportParamsOptionsOption1 (optional)
   * @returns string
   */
  async Export(params: AudioLibraryExportParams): Promise<string> {
    return this.sendMessage<string>("AudioLibrary.Export", params);
  }

  /**
   * Retrieve details about a specific album
   * @param albumid LibraryId
   * @param properties AudioFieldsAlbum (optional)
   * @returns AudioLibraryGetAlbumDetailsResponse
   */
  async GetAlbumDetails(params: AudioLibraryGetAlbumDetailsParams): Promise<AudioLibraryGetAlbumDetailsResponse> {
    return this.sendMessage<AudioLibraryGetAlbumDetailsResponse>("AudioLibrary.GetAlbumDetails", params);
  }

  /**
   * Retrieve all albums from specified artist (and role) or that has songs of the specified genre
   * @param properties AudioFieldsAlbum (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @param filter AudioLibraryGetAlbumsParamsFilterOption0 | AudioLibraryGetAlbumsParamsFilterOption1 | AudioLibraryGetAlbumsParamsFilterOption2 | AudioLibraryGetAlbumsParamsFilterOption3 | AudioLibraryGetAlbumsParamsFilterOption4 | AudioLibraryGetAlbumsParamsFilterOption5 | AudioLibraryGetAlbumsParamsFilterOption6 | AudioLibraryGetAlbumsParamsFilterOption7 | ListFilterAlbums (optional)
   * @param includesingles boolean (optional)
   * @param allroles boolean (optional)
   * @returns AudioLibraryGetAlbumsResponse
   */
  async GetAlbums(params: AudioLibraryGetAlbumsParams): Promise<AudioLibraryGetAlbumsResponse> {
    return this.sendMessage<AudioLibraryGetAlbumsResponse>("AudioLibrary.GetAlbums", params);
  }

  /**
   * Retrieve details about a specific artist
   * @param artistid LibraryId
   * @param properties AudioFieldsArtist (optional)
   * @returns AudioLibraryGetArtistDetailsResponse
   */
  async GetArtistDetails(params: AudioLibraryGetArtistDetailsParams): Promise<AudioLibraryGetArtistDetailsResponse> {
    return this.sendMessage<AudioLibraryGetArtistDetailsResponse>("AudioLibrary.GetArtistDetails", params);
  }

  /**
   * Retrieve all artists. For backward compatibility by default this implicitly does not include those that only contribute other roles, however absolutely all artists can be returned using allroles=true
   * @param albumartistsonly OptionalBoolean (optional)
   * @param properties AudioFieldsArtist (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @param filter AudioLibraryGetArtistsParamsFilterOption0 | AudioLibraryGetArtistsParamsFilterOption1 | AudioLibraryGetArtistsParamsFilterOption2 | AudioLibraryGetArtistsParamsFilterOption3 | AudioLibraryGetArtistsParamsFilterOption4 | AudioLibraryGetArtistsParamsFilterOption5 | AudioLibraryGetArtistsParamsFilterOption6 | AudioLibraryGetArtistsParamsFilterOption7 | AudioLibraryGetArtistsParamsFilterOption8 | AudioLibraryGetArtistsParamsFilterOption9 | AudioLibraryGetArtistsParamsFilterOption10 | AudioLibraryGetArtistsParamsFilterOption11 | AudioLibraryGetArtistsParamsFilterOption12 | AudioLibraryGetArtistsParamsFilterOption13 | AudioLibraryGetArtistsParamsFilterOption14 | ListFilterArtists (optional)
   * @param allroles boolean (optional)
   * @returns AudioLibraryGetArtistsResponse
   */
  async GetArtists(params: AudioLibraryGetArtistsParams): Promise<AudioLibraryGetArtistsResponse> {
    return this.sendMessage<AudioLibraryGetArtistsResponse>("AudioLibrary.GetArtists", params);
  }

  /**
   * Retrieve all potential art URLs for a media item by art type
   * @param item AudioLibraryGetAvailableArtParamsItemOption0 | AudioLibraryGetAvailableArtParamsItemOption1
   * @param arttype string (optional)
   * @returns AudioLibraryGetAvailableArtResponse
   */
  async GetAvailableArt(params: AudioLibraryGetAvailableArtParams): Promise<AudioLibraryGetAvailableArtResponse> {
    return this.sendMessage<AudioLibraryGetAvailableArtResponse>("AudioLibrary.GetAvailableArt", params);
  }

  /**
   * Retrieve a list of potential art types for a media item
   * @param item AudioLibraryGetAvailableArtTypesParamsItemOption0 | AudioLibraryGetAvailableArtTypesParamsItemOption1
   * @returns AudioLibraryGetAvailableArtTypesResponse
   */
  async GetAvailableArtTypes(params: AudioLibraryGetAvailableArtTypesParams): Promise<AudioLibraryGetAvailableArtTypesResponse> {
    return this.sendMessage<AudioLibraryGetAvailableArtTypesResponse>("AudioLibrary.GetAvailableArtTypes", params);
  }

  /**
   * Retrieve all genres
   * @param properties LibraryFieldsGenre (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns AudioLibraryGetGenresResponse
   */
  async GetGenres(params: AudioLibraryGetGenresParams): Promise<AudioLibraryGetGenresResponse> {
    return this.sendMessage<AudioLibraryGetGenresResponse>("AudioLibrary.GetGenres", params);
  }

  async GetProperties<P extends readonly __AudioPropertyValueKeys[]>(params: { properties: P}): Promise<Pick<AudioPropertyValue, Extract<P[number], __AudioPropertyValueKeys>>>;
  /**
   * Retrieves the values of the music library properties
   * @param properties AudioPropertyName[]
   * @returns AudioPropertyValue
   */
  async GetProperties(params: AudioLibraryGetPropertiesParams): Promise<AudioPropertyValue>;
  async GetProperties(params: any) {
    return this.sendMessage<AudioPropertyValue>("AudioLibrary.GetProperties", params);
  }

  /**
   * Retrieve recently added albums
   * @param properties AudioFieldsAlbum (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns AudioLibraryGetRecentlyAddedAlbumsResponse
   */
  async GetRecentlyAddedAlbums(params: AudioLibraryGetRecentlyAddedAlbumsParams): Promise<AudioLibraryGetRecentlyAddedAlbumsResponse> {
    return this.sendMessage<AudioLibraryGetRecentlyAddedAlbumsResponse>("AudioLibrary.GetRecentlyAddedAlbums", params);
  }

  /**
   * Retrieve recently added songs
   * @param albumlimit ListAmount (optional)
   * @param properties AudioFieldsSong (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns AudioLibraryGetRecentlyAddedSongsResponse
   */
  async GetRecentlyAddedSongs(params: AudioLibraryGetRecentlyAddedSongsParams): Promise<AudioLibraryGetRecentlyAddedSongsResponse> {
    return this.sendMessage<AudioLibraryGetRecentlyAddedSongsResponse>("AudioLibrary.GetRecentlyAddedSongs", params);
  }

  /**
   * Retrieve recently played albums
   * @param properties AudioFieldsAlbum (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns AudioLibraryGetRecentlyPlayedAlbumsResponse
   */
  async GetRecentlyPlayedAlbums(params: AudioLibraryGetRecentlyPlayedAlbumsParams): Promise<AudioLibraryGetRecentlyPlayedAlbumsResponse> {
    return this.sendMessage<AudioLibraryGetRecentlyPlayedAlbumsResponse>("AudioLibrary.GetRecentlyPlayedAlbums", params);
  }

  /**
   * Retrieve recently played songs
   * @param properties AudioFieldsSong (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns AudioLibraryGetRecentlyPlayedSongsResponse
   */
  async GetRecentlyPlayedSongs(params: AudioLibraryGetRecentlyPlayedSongsParams): Promise<AudioLibraryGetRecentlyPlayedSongsResponse> {
    return this.sendMessage<AudioLibraryGetRecentlyPlayedSongsResponse>("AudioLibrary.GetRecentlyPlayedSongs", params);
  }

  /**
   * Retrieve all contributor roles
   * @param properties AudioFieldsRole (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns AudioLibraryGetRolesResponse
   */
  async GetRoles(params: AudioLibraryGetRolesParams): Promise<AudioLibraryGetRolesResponse> {
    return this.sendMessage<AudioLibraryGetRolesResponse>("AudioLibrary.GetRoles", params);
  }

  /**
   * Retrieve details about a specific song
   * @param songid LibraryId
   * @param properties AudioFieldsSong (optional)
   * @returns AudioLibraryGetSongDetailsResponse
   */
  async GetSongDetails(params: AudioLibraryGetSongDetailsParams): Promise<AudioLibraryGetSongDetailsResponse> {
    return this.sendMessage<AudioLibraryGetSongDetailsResponse>("AudioLibrary.GetSongDetails", params);
  }

  /**
   * Retrieve all songs from specified album, artist or genre
   * @param properties AudioFieldsSong (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @param filter AudioLibraryGetSongsParamsFilterOption0 | AudioLibraryGetSongsParamsFilterOption1 | AudioLibraryGetSongsParamsFilterOption2 | AudioLibraryGetSongsParamsFilterOption3 | AudioLibraryGetSongsParamsFilterOption4 | AudioLibraryGetSongsParamsFilterOption5 | AudioLibraryGetSongsParamsFilterOption6 | AudioLibraryGetSongsParamsFilterOption7 | AudioLibraryGetSongsParamsFilterOption8 | AudioLibraryGetSongsParamsFilterOption9 | ListFilterSongs (optional)
   * @param includesingles boolean (optional)
   * @param allroles boolean (optional)
   * @param singlesonly boolean (optional)
   * @returns AudioLibraryGetSongsResponse
   */
  async GetSongs(params: AudioLibraryGetSongsParams): Promise<AudioLibraryGetSongsResponse> {
    return this.sendMessage<AudioLibraryGetSongsResponse>("AudioLibrary.GetSongs", params);
  }

  /**
   * Get all music sources, including unique ID
   * @param properties LibraryFieldsSource (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns AudioLibraryGetSourcesResponse
   */
  async GetSources(params: AudioLibraryGetSourcesParams): Promise<AudioLibraryGetSourcesResponse> {
    return this.sendMessage<AudioLibraryGetSourcesResponse>("AudioLibrary.GetSources", params);
  }

  /**
   * Scans the audio sources for new library items
   * @param directory string (optional)
   * @param showdialogs boolean (optional)
   * @returns string
   */
  async Scan(params: AudioLibraryScanParams): Promise<string> {
    return this.sendMessage<string>("AudioLibrary.Scan", params);
  }

  /**
   * Update the given album with the given details
   * @param albumid LibraryId
   * @param title OptionalString (optional)
   * @param artist any | ArrayString (optional)
   * @param description OptionalString (optional)
   * @param genre any | ArrayString (optional)
   * @param theme any | ArrayString (optional)
   * @param mood any | ArrayString (optional)
   * @param style any | ArrayString (optional)
   * @param type OptionalString (optional)
   * @param albumlabel OptionalString (optional)
   * @param rating OptionalNumber (optional)
   * @param year OptionalInteger (optional)
   * @param userrating OptionalInteger (optional)
   * @param votes OptionalInteger (optional)
   * @param musicbrainzalbumid OptionalString (optional)
   * @param musicbrainzreleasegroupid OptionalString (optional)
   * @param sortartist OptionalString (optional)
   * @param displayartist OptionalString (optional)
   * @param musicbrainzalbumartistid any | ArrayString (optional)
   * @param art any | MediaArtworkSet (optional)
   * @param isboxset OptionalBoolean (optional)
   * @param releasedate OptionalString (optional)
   * @param originaldate OptionalString (optional)
   * @returns string
   */
  async SetAlbumDetails(params: AudioLibrarySetAlbumDetailsParams): Promise<string> {
    return this.sendMessage<string>("AudioLibrary.SetAlbumDetails", params);
  }

  /**
   * Update the given artist with the given details
   * @param artistid LibraryId
   * @param artist OptionalString (optional)
   * @param instrument any | ArrayString (optional)
   * @param style any | ArrayString (optional)
   * @param mood any | ArrayString (optional)
   * @param born OptionalString (optional)
   * @param formed OptionalString (optional)
   * @param description OptionalString (optional)
   * @param genre any | ArrayString (optional)
   * @param died OptionalString (optional)
   * @param disbanded OptionalString (optional)
   * @param yearsactive any | ArrayString (optional)
   * @param musicbrainzartistid OptionalString (optional)
   * @param sortname OptionalString (optional)
   * @param type OptionalString (optional)
   * @param gender OptionalString (optional)
   * @param disambiguation OptionalString (optional)
   * @param art any | MediaArtworkSet (optional)
   * @returns string
   */
  async SetArtistDetails(params: AudioLibrarySetArtistDetailsParams): Promise<string> {
    return this.sendMessage<string>("AudioLibrary.SetArtistDetails", params);
  }

  /**
   * Update the given song with the given details
   * @param songid LibraryId
   * @param title OptionalString (optional)
   * @param artist any | ArrayString (optional)
   * @param genre any | ArrayString (optional)
   * @param year OptionalInteger (optional)
   * @param rating OptionalNumber (optional)
   * @param track OptionalInteger (optional)
   * @param disc OptionalInteger (optional)
   * @param duration OptionalInteger (optional)
   * @param comment OptionalString (optional)
   * @param musicbrainztrackid OptionalString (optional)
   * @param musicbrainzartistid OptionalString (optional)
   * @param playcount OptionalInteger (optional)
   * @param lastplayed OptionalString (optional)
   * @param userrating OptionalInteger (optional)
   * @param votes OptionalInteger (optional)
   * @param displayartist OptionalString (optional)
   * @param sortartist OptionalString (optional)
   * @param mood OptionalString (optional)
   * @param art any | MediaArtworkSet (optional)
   * @param disctitle OptionalString (optional)
   * @param releasedate OptionalString (optional)
   * @param originaldate OptionalString (optional)
   * @param bpm OptionalInteger (optional)
   * @param songvideourl OptionalString (optional)
   * @returns string
   */
  async SetSongDetails(params: AudioLibrarySetSongDetailsParams): Promise<string> {
    return this.sendMessage<string>("AudioLibrary.SetSongDetails", params);
  }

}