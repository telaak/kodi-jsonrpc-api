import { ISendMessage } from '../../';
import { VideoLibraryCleanParams } from '../types/VideoLibraryCleanParams';
import { VideoLibraryExportParams } from '../types/VideoLibraryExportParams';
import { VideoLibraryGetAvailableArtParams } from '../types/VideoLibraryGetAvailableArtParams';
import { VideoLibraryGetAvailableArtResponse } from '../types/VideoLibraryGetAvailableArtResponse';
import { VideoLibraryGetAvailableArtTypesParams } from '../types/VideoLibraryGetAvailableArtTypesParams';
import { VideoLibraryGetAvailableArtTypesResponse } from '../types/VideoLibraryGetAvailableArtTypesResponse';
import { LibraryId } from '../types/LibraryId';
import { VideoFieldsEpisode } from '../types/VideoFieldsEpisode';
import { VideoDetailsEpisode } from '../types/VideoDetailsEpisode';
import { VideoLibraryGetEpisodeDetailsParams } from '../types/VideoLibraryGetEpisodeDetailsParams';
import { VideoLibraryGetEpisodeDetailsResponse } from '../types/VideoLibraryGetEpisodeDetailsResponse';
import { ListLimits } from '../types/ListLimits';
import { ListSort } from '../types/ListSort';
import { ListLimitsReturned } from '../types/ListLimitsReturned';
import { VideoLibraryGetEpisodesParams } from '../types/VideoLibraryGetEpisodesParams';
import { VideoLibraryGetEpisodesResponse } from '../types/VideoLibraryGetEpisodesResponse';
import { LibraryFieldsGenre } from '../types/LibraryFieldsGenre';
import { LibraryDetailsGenre } from '../types/LibraryDetailsGenre';
import { VideoLibraryGetGenresParams } from '../types/VideoLibraryGetGenresParams';
import { VideoLibraryGetGenresResponse } from '../types/VideoLibraryGetGenresResponse';
import { VideoFieldsTVShow } from '../types/VideoFieldsTVShow';
import { VideoDetailsTVShow } from '../types/VideoDetailsTVShow';
import { VideoLibraryGetInProgressTVShowsParams } from '../types/VideoLibraryGetInProgressTVShowsParams';
import { VideoLibraryGetInProgressTVShowsResponse } from '../types/VideoLibraryGetInProgressTVShowsResponse';
import { VideoFieldsMovie } from '../types/VideoFieldsMovie';
import { VideoDetailsMovie } from '../types/VideoDetailsMovie';
import { VideoLibraryGetMovieDetailsParams } from '../types/VideoLibraryGetMovieDetailsParams';
import { VideoLibraryGetMovieDetailsResponse } from '../types/VideoLibraryGetMovieDetailsResponse';
import { VideoFieldsMovieSet } from '../types/VideoFieldsMovieSet';
import { VideoDetailsMovieSetExtended } from '../types/VideoDetailsMovieSetExtended';
import { VideoLibraryGetMovieSetDetailsParams } from '../types/VideoLibraryGetMovieSetDetailsParams';
import { VideoLibraryGetMovieSetDetailsResponse } from '../types/VideoLibraryGetMovieSetDetailsResponse';
import { VideoDetailsMovieSet } from '../types/VideoDetailsMovieSet';
import { VideoLibraryGetMovieSetsParams } from '../types/VideoLibraryGetMovieSetsParams';
import { VideoLibraryGetMovieSetsResponse } from '../types/VideoLibraryGetMovieSetsResponse';
import { VideoLibraryGetMoviesParams } from '../types/VideoLibraryGetMoviesParams';
import { VideoLibraryGetMoviesResponse } from '../types/VideoLibraryGetMoviesResponse';
import { VideoFieldsMusicVideo } from '../types/VideoFieldsMusicVideo';
import { VideoDetailsMusicVideo } from '../types/VideoDetailsMusicVideo';
import { VideoLibraryGetMusicVideoDetailsParams } from '../types/VideoLibraryGetMusicVideoDetailsParams';
import { VideoLibraryGetMusicVideoDetailsResponse } from '../types/VideoLibraryGetMusicVideoDetailsResponse';
import { VideoLibraryGetMusicVideosParams } from '../types/VideoLibraryGetMusicVideosParams';
import { VideoLibraryGetMusicVideosResponse } from '../types/VideoLibraryGetMusicVideosResponse';
import { VideoLibraryGetRecentlyAddedEpisodesParams } from '../types/VideoLibraryGetRecentlyAddedEpisodesParams';
import { VideoLibraryGetRecentlyAddedEpisodesResponse } from '../types/VideoLibraryGetRecentlyAddedEpisodesResponse';
import { VideoLibraryGetRecentlyAddedMoviesParams } from '../types/VideoLibraryGetRecentlyAddedMoviesParams';
import { VideoLibraryGetRecentlyAddedMoviesResponse } from '../types/VideoLibraryGetRecentlyAddedMoviesResponse';
import { VideoLibraryGetRecentlyAddedMusicVideosParams } from '../types/VideoLibraryGetRecentlyAddedMusicVideosParams';
import { VideoLibraryGetRecentlyAddedMusicVideosResponse } from '../types/VideoLibraryGetRecentlyAddedMusicVideosResponse';
import { VideoFieldsSeason } from '../types/VideoFieldsSeason';
import { VideoDetailsSeason } from '../types/VideoDetailsSeason';
import { VideoLibraryGetSeasonDetailsParams } from '../types/VideoLibraryGetSeasonDetailsParams';
import { VideoLibraryGetSeasonDetailsResponse } from '../types/VideoLibraryGetSeasonDetailsResponse';
import { VideoLibraryGetSeasonsParams } from '../types/VideoLibraryGetSeasonsParams';
import { VideoLibraryGetSeasonsResponse } from '../types/VideoLibraryGetSeasonsResponse';
import { VideoLibraryGetTVShowDetailsParams } from '../types/VideoLibraryGetTVShowDetailsParams';
import { VideoLibraryGetTVShowDetailsResponse } from '../types/VideoLibraryGetTVShowDetailsResponse';
import { VideoLibraryGetTVShowsParams } from '../types/VideoLibraryGetTVShowsParams';
import { VideoLibraryGetTVShowsResponse } from '../types/VideoLibraryGetTVShowsResponse';
import { LibraryFieldsTag } from '../types/LibraryFieldsTag';
import { LibraryDetailsTag } from '../types/LibraryDetailsTag';
import { VideoLibraryGetTagsParams } from '../types/VideoLibraryGetTagsParams';
import { VideoLibraryGetTagsResponse } from '../types/VideoLibraryGetTagsResponse';
import { VideoLibraryRefreshEpisodeParams } from '../types/VideoLibraryRefreshEpisodeParams';
import { VideoLibraryRefreshMovieParams } from '../types/VideoLibraryRefreshMovieParams';
import { VideoLibraryRefreshMusicVideoParams } from '../types/VideoLibraryRefreshMusicVideoParams';
import { VideoLibraryRefreshTVShowParams } from '../types/VideoLibraryRefreshTVShowParams';
import { VideoLibraryRemoveEpisodeParams } from '../types/VideoLibraryRemoveEpisodeParams';
import { VideoLibraryRemoveMovieParams } from '../types/VideoLibraryRemoveMovieParams';
import { VideoLibraryRemoveMusicVideoParams } from '../types/VideoLibraryRemoveMusicVideoParams';
import { VideoLibraryRemoveTVShowParams } from '../types/VideoLibraryRemoveTVShowParams';
import { VideoLibraryScanParams } from '../types/VideoLibraryScanParams';
import { OptionalString } from '../types/OptionalString';
import { OptionalInteger } from '../types/OptionalInteger';
import { OptionalNumber } from '../types/OptionalNumber';
import { VideoRatingsSet } from '../types/VideoRatingsSet';
import { VideoLibrarySetEpisodeDetailsParams } from '../types/VideoLibrarySetEpisodeDetailsParams';
import { VideoLibrarySetMovieDetailsParams } from '../types/VideoLibrarySetMovieDetailsParams';
import { VideoLibrarySetMovieSetDetailsParams } from '../types/VideoLibrarySetMovieSetDetailsParams';
import { VideoLibrarySetMusicVideoDetailsParams } from '../types/VideoLibrarySetMusicVideoDetailsParams';
import { VideoLibrarySetSeasonDetailsParams } from '../types/VideoLibrarySetSeasonDetailsParams';
import { VideoLibrarySetTVShowDetailsParams } from '../types/VideoLibrarySetTVShowDetailsParams';


export class KodiVideoLibraryNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Cleans the video library for non-existent items
   * @param showdialogs boolean (optional)
   * @param content "video" | "movies" | "tvshows" | "musicvideos" (optional)
   * @param directory string (optional)
   * @returns string
   */
  async Clean(params: VideoLibraryCleanParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.Clean", params);
  }

  /**
   * Exports all items from the video library
   * @param options VideoLibraryExportParamsOptionsOption0 | VideoLibraryExportParamsOptionsOption1 (optional)
   * @returns string
   */
  async Export(params: VideoLibraryExportParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.Export", params);
  }

  /**
   * Retrieve all potential art URLs for a media item by art type
   * @param item VideoLibraryGetAvailableArtParamsItemOption0 | VideoLibraryGetAvailableArtParamsItemOption1 | VideoLibraryGetAvailableArtParamsItemOption2 | VideoLibraryGetAvailableArtParamsItemOption3 | VideoLibraryGetAvailableArtParamsItemOption4 | VideoLibraryGetAvailableArtParamsItemOption5
   * @param arttype string (optional)
   * @returns VideoLibraryGetAvailableArtResponse
   */
  async GetAvailableArt(params: VideoLibraryGetAvailableArtParams): Promise<VideoLibraryGetAvailableArtResponse> {
    return this.sendMessage<VideoLibraryGetAvailableArtResponse>("VideoLibrary.GetAvailableArt", params);
  }

  /**
   * Retrieve a list of potential art types for a media item
   * @param item VideoLibraryGetAvailableArtTypesParamsItemOption0 | VideoLibraryGetAvailableArtTypesParamsItemOption1 | VideoLibraryGetAvailableArtTypesParamsItemOption2 | VideoLibraryGetAvailableArtTypesParamsItemOption3 | VideoLibraryGetAvailableArtTypesParamsItemOption4 | VideoLibraryGetAvailableArtTypesParamsItemOption5
   * @returns VideoLibraryGetAvailableArtTypesResponse
   */
  async GetAvailableArtTypes(params: VideoLibraryGetAvailableArtTypesParams): Promise<VideoLibraryGetAvailableArtTypesResponse> {
    return this.sendMessage<VideoLibraryGetAvailableArtTypesResponse>("VideoLibrary.GetAvailableArtTypes", params);
  }

  /**
   * Retrieve details about a specific tv show episode
   * @param episodeid LibraryId
   * @param properties VideoFieldsEpisode (optional)
   * @returns VideoLibraryGetEpisodeDetailsResponse
   */
  async GetEpisodeDetails(params: VideoLibraryGetEpisodeDetailsParams): Promise<VideoLibraryGetEpisodeDetailsResponse> {
    return this.sendMessage<VideoLibraryGetEpisodeDetailsResponse>("VideoLibrary.GetEpisodeDetails", params);
  }

  /**
   * Retrieve all tv show episodes
   * @param tvshowid LibraryId (optional)
   * @param season number (optional)
   * @param properties VideoFieldsEpisode (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @param filter VideoLibraryGetEpisodesParamsFilterOption0 | VideoLibraryGetEpisodesParamsFilterOption1 | VideoLibraryGetEpisodesParamsFilterOption2 | VideoLibraryGetEpisodesParamsFilterOption3 | VideoLibraryGetEpisodesParamsFilterOption4 | ListFilterEpisodes (optional)
   * @returns VideoLibraryGetEpisodesResponse
   */
  async GetEpisodes(params: VideoLibraryGetEpisodesParams): Promise<VideoLibraryGetEpisodesResponse> {
    return this.sendMessage<VideoLibraryGetEpisodesResponse>("VideoLibrary.GetEpisodes", params);
  }

  /**
   * Retrieve all genres
   * @param type "movie" | "tvshow" | "musicvideo"
   * @param properties LibraryFieldsGenre (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns VideoLibraryGetGenresResponse
   */
  async GetGenres(params: VideoLibraryGetGenresParams): Promise<VideoLibraryGetGenresResponse> {
    return this.sendMessage<VideoLibraryGetGenresResponse>("VideoLibrary.GetGenres", params);
  }

  /**
   * Retrieve all in progress tvshows
   * @param properties VideoFieldsTVShow (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns VideoLibraryGetInProgressTVShowsResponse
   */
  async GetInProgressTVShows(params: VideoLibraryGetInProgressTVShowsParams): Promise<VideoLibraryGetInProgressTVShowsResponse> {
    return this.sendMessage<VideoLibraryGetInProgressTVShowsResponse>("VideoLibrary.GetInProgressTVShows", params);
  }

  /**
   * Retrieve details about a specific movie
   * @param movieid LibraryId
   * @param properties VideoFieldsMovie (optional)
   * @returns VideoLibraryGetMovieDetailsResponse
   */
  async GetMovieDetails(params: VideoLibraryGetMovieDetailsParams): Promise<VideoLibraryGetMovieDetailsResponse> {
    return this.sendMessage<VideoLibraryGetMovieDetailsResponse>("VideoLibrary.GetMovieDetails", params);
  }

  /**
   * Retrieve details about a specific movie set
   * @param setid LibraryId
   * @param properties VideoFieldsMovieSet (optional)
   * @param movies VideoLibraryGetMovieSetDetailsParamsMovies (optional)
   * @returns VideoLibraryGetMovieSetDetailsResponse
   */
  async GetMovieSetDetails(params: VideoLibraryGetMovieSetDetailsParams): Promise<VideoLibraryGetMovieSetDetailsResponse> {
    return this.sendMessage<VideoLibraryGetMovieSetDetailsResponse>("VideoLibrary.GetMovieSetDetails", params);
  }

  /**
   * Retrieve all movie sets
   * @param properties VideoFieldsMovieSet (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns VideoLibraryGetMovieSetsResponse
   */
  async GetMovieSets(params: VideoLibraryGetMovieSetsParams): Promise<VideoLibraryGetMovieSetsResponse> {
    return this.sendMessage<VideoLibraryGetMovieSetsResponse>("VideoLibrary.GetMovieSets", params);
  }

  /**
   * Retrieve all movies
   * @param properties VideoFieldsMovie (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @param filter VideoLibraryGetMoviesParamsFilterOption0 | VideoLibraryGetMoviesParamsFilterOption1 | VideoLibraryGetMoviesParamsFilterOption2 | VideoLibraryGetMoviesParamsFilterOption3 | VideoLibraryGetMoviesParamsFilterOption4 | VideoLibraryGetMoviesParamsFilterOption5 | VideoLibraryGetMoviesParamsFilterOption6 | VideoLibraryGetMoviesParamsFilterOption7 | VideoLibraryGetMoviesParamsFilterOption8 | VideoLibraryGetMoviesParamsFilterOption9 | ListFilterMovies (optional)
   * @returns VideoLibraryGetMoviesResponse
   */
  async GetMovies(params: VideoLibraryGetMoviesParams): Promise<VideoLibraryGetMoviesResponse> {
    return this.sendMessage<VideoLibraryGetMoviesResponse>("VideoLibrary.GetMovies", params);
  }

  /**
   * Retrieve details about a specific music video
   * @param musicvideoid LibraryId
   * @param properties VideoFieldsMusicVideo (optional)
   * @returns VideoLibraryGetMusicVideoDetailsResponse
   */
  async GetMusicVideoDetails(params: VideoLibraryGetMusicVideoDetailsParams): Promise<VideoLibraryGetMusicVideoDetailsResponse> {
    return this.sendMessage<VideoLibraryGetMusicVideoDetailsResponse>("VideoLibrary.GetMusicVideoDetails", params);
  }

  /**
   * Retrieve all music videos
   * @param properties VideoFieldsMusicVideo (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @param filter VideoLibraryGetMusicVideosParamsFilterOption0 | VideoLibraryGetMusicVideosParamsFilterOption1 | VideoLibraryGetMusicVideosParamsFilterOption2 | VideoLibraryGetMusicVideosParamsFilterOption3 | VideoLibraryGetMusicVideosParamsFilterOption4 | VideoLibraryGetMusicVideosParamsFilterOption5 | VideoLibraryGetMusicVideosParamsFilterOption6 | ListFilterMusicVideos (optional)
   * @returns VideoLibraryGetMusicVideosResponse
   */
  async GetMusicVideos(params: VideoLibraryGetMusicVideosParams): Promise<VideoLibraryGetMusicVideosResponse> {
    return this.sendMessage<VideoLibraryGetMusicVideosResponse>("VideoLibrary.GetMusicVideos", params);
  }

  /**
   * Retrieve all recently added tv episodes
   * @param properties VideoFieldsEpisode (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns VideoLibraryGetRecentlyAddedEpisodesResponse
   */
  async GetRecentlyAddedEpisodes(params: VideoLibraryGetRecentlyAddedEpisodesParams): Promise<VideoLibraryGetRecentlyAddedEpisodesResponse> {
    return this.sendMessage<VideoLibraryGetRecentlyAddedEpisodesResponse>("VideoLibrary.GetRecentlyAddedEpisodes", params);
  }

  /**
   * Retrieve all recently added movies
   * @param properties VideoFieldsMovie (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns VideoLibraryGetRecentlyAddedMoviesResponse
   */
  async GetRecentlyAddedMovies(params: VideoLibraryGetRecentlyAddedMoviesParams): Promise<VideoLibraryGetRecentlyAddedMoviesResponse> {
    return this.sendMessage<VideoLibraryGetRecentlyAddedMoviesResponse>("VideoLibrary.GetRecentlyAddedMovies", params);
  }

  /**
   * Retrieve all recently added music videos
   * @param properties VideoFieldsMusicVideo (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns VideoLibraryGetRecentlyAddedMusicVideosResponse
   */
  async GetRecentlyAddedMusicVideos(params: VideoLibraryGetRecentlyAddedMusicVideosParams): Promise<VideoLibraryGetRecentlyAddedMusicVideosResponse> {
    return this.sendMessage<VideoLibraryGetRecentlyAddedMusicVideosResponse>("VideoLibrary.GetRecentlyAddedMusicVideos", params);
  }

  /**
   * Retrieve details about a specific tv show season
   * @param seasonid LibraryId
   * @param properties VideoFieldsSeason (optional)
   * @returns VideoLibraryGetSeasonDetailsResponse
   */
  async GetSeasonDetails(params: VideoLibraryGetSeasonDetailsParams): Promise<VideoLibraryGetSeasonDetailsResponse> {
    return this.sendMessage<VideoLibraryGetSeasonDetailsResponse>("VideoLibrary.GetSeasonDetails", params);
  }

  /**
   * Retrieve all tv seasons
   * @param tvshowid LibraryId (optional)
   * @param properties VideoFieldsSeason (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns VideoLibraryGetSeasonsResponse
   */
  async GetSeasons(params: VideoLibraryGetSeasonsParams): Promise<VideoLibraryGetSeasonsResponse> {
    return this.sendMessage<VideoLibraryGetSeasonsResponse>("VideoLibrary.GetSeasons", params);
  }

  /**
   * Retrieve details about a specific tv show
   * @param tvshowid LibraryId
   * @param properties VideoFieldsTVShow (optional)
   * @returns VideoLibraryGetTVShowDetailsResponse
   */
  async GetTVShowDetails(params: VideoLibraryGetTVShowDetailsParams): Promise<VideoLibraryGetTVShowDetailsResponse> {
    return this.sendMessage<VideoLibraryGetTVShowDetailsResponse>("VideoLibrary.GetTVShowDetails", params);
  }

  /**
   * Retrieve all tv shows
   * @param properties VideoFieldsTVShow (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @param filter VideoLibraryGetTVShowsParamsFilterOption0 | VideoLibraryGetTVShowsParamsFilterOption1 | VideoLibraryGetTVShowsParamsFilterOption2 | VideoLibraryGetTVShowsParamsFilterOption3 | VideoLibraryGetTVShowsParamsFilterOption4 | VideoLibraryGetTVShowsParamsFilterOption5 | ListFilterTVShows (optional)
   * @returns VideoLibraryGetTVShowsResponse
   */
  async GetTVShows(params: VideoLibraryGetTVShowsParams): Promise<VideoLibraryGetTVShowsResponse> {
    return this.sendMessage<VideoLibraryGetTVShowsResponse>("VideoLibrary.GetTVShows", params);
  }

  /**
   * Retrieve all tags
   * @param type "movie" | "tvshow" | "musicvideo"
   * @param properties LibraryFieldsTag (optional)
   * @param limits ListLimits (optional)
   * @param sort ListSort (optional)
   * @returns VideoLibraryGetTagsResponse
   */
  async GetTags(params: VideoLibraryGetTagsParams): Promise<VideoLibraryGetTagsResponse> {
    return this.sendMessage<VideoLibraryGetTagsResponse>("VideoLibrary.GetTags", params);
  }

  /**
   * Refresh the given episode in the library
   * @param episodeid LibraryId
   * @param ignorenfo boolean (optional)
   * @param title string (optional)
   * @returns string
   */
  async RefreshEpisode(params: VideoLibraryRefreshEpisodeParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.RefreshEpisode", params);
  }

  /**
   * Refresh the given movie in the library
   * @param movieid LibraryId
   * @param ignorenfo boolean (optional)
   * @param title string (optional)
   * @returns string
   */
  async RefreshMovie(params: VideoLibraryRefreshMovieParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.RefreshMovie", params);
  }

  /**
   * Refresh the given music video in the library
   * @param musicvideoid LibraryId
   * @param ignorenfo boolean (optional)
   * @param title string (optional)
   * @returns string
   */
  async RefreshMusicVideo(params: VideoLibraryRefreshMusicVideoParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.RefreshMusicVideo", params);
  }

  /**
   * Refresh the given tv show in the library
   * @param tvshowid LibraryId
   * @param ignorenfo boolean (optional)
   * @param refreshepisodes boolean (optional)
   * @param title string (optional)
   * @returns string
   */
  async RefreshTVShow(params: VideoLibraryRefreshTVShowParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.RefreshTVShow", params);
  }

  /**
   * Removes the given episode from the library
   * @param episodeid LibraryId
   * @returns string
   */
  async RemoveEpisode(params: VideoLibraryRemoveEpisodeParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.RemoveEpisode", params);
  }

  /**
   * Removes the given movie from the library
   * @param movieid LibraryId
   * @returns string
   */
  async RemoveMovie(params: VideoLibraryRemoveMovieParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.RemoveMovie", params);
  }

  /**
   * Removes the given music video from the library
   * @param musicvideoid LibraryId
   * @returns string
   */
  async RemoveMusicVideo(params: VideoLibraryRemoveMusicVideoParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.RemoveMusicVideo", params);
  }

  /**
   * Removes the given tv show from the library
   * @param tvshowid LibraryId
   * @returns string
   */
  async RemoveTVShow(params: VideoLibraryRemoveTVShowParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.RemoveTVShow", params);
  }

  /**
   * Scans the video sources for new library items
   * @param directory string (optional)
   * @param showdialogs boolean (optional)
   * @returns string
   */
  async Scan(params: VideoLibraryScanParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.Scan", params);
  }

  /**
   * Update the given episode with the given details
   * @param episodeid LibraryId
   * @param title OptionalString (optional)
   * @param playcount OptionalInteger (optional)
   * @param runtime OptionalInteger (optional)
   * @param director any | ArrayString (optional)
   * @param plot OptionalString (optional)
   * @param rating OptionalNumber (optional)
   * @param votes OptionalString (optional)
   * @param lastplayed OptionalString (optional)
   * @param writer any | ArrayString (optional)
   * @param firstaired OptionalString (optional)
   * @param productioncode OptionalString (optional)
   * @param season OptionalInteger (optional)
   * @param episode OptionalInteger (optional)
   * @param originaltitle OptionalString (optional)
   * @param thumbnail OptionalString (optional)
   * @param fanart OptionalString (optional)
   * @param art any | MediaArtworkSet (optional)
   * @param resume any | VideoResume (optional)
   * @param userrating OptionalInteger (optional)
   * @param ratings VideoRatingsSet (optional)
   * @param dateadded OptionalString (optional)
   * @param uniqueid any | MediaUniqueIDSet (optional)
   * @returns string
   */
  async SetEpisodeDetails(params: VideoLibrarySetEpisodeDetailsParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.SetEpisodeDetails", params);
  }

  /**
   * Update the given movie with the given details
   * @param movieid LibraryId
   * @param title OptionalString (optional)
   * @param playcount OptionalInteger (optional)
   * @param runtime OptionalInteger (optional)
   * @param director any | ArrayString (optional)
   * @param studio any | ArrayString (optional)
   * @param year OptionalInteger (optional)
   * @param plot OptionalString (optional)
   * @param genre any | ArrayString (optional)
   * @param rating OptionalNumber (optional)
   * @param mpaa OptionalString (optional)
   * @param imdbnumber OptionalString (optional)
   * @param votes OptionalString (optional)
   * @param lastplayed OptionalString (optional)
   * @param originaltitle OptionalString (optional)
   * @param trailer OptionalString (optional)
   * @param tagline OptionalString (optional)
   * @param plotoutline OptionalString (optional)
   * @param writer any | ArrayString (optional)
   * @param country any | ArrayString (optional)
   * @param top250 OptionalInteger (optional)
   * @param sorttitle OptionalString (optional)
   * @param set OptionalString (optional)
   * @param showlink any | ArrayString (optional)
   * @param thumbnail OptionalString (optional)
   * @param fanart OptionalString (optional)
   * @param tag any | ArrayString (optional)
   * @param art any | MediaArtworkSet (optional)
   * @param resume any | VideoResume (optional)
   * @param userrating OptionalInteger (optional)
   * @param ratings VideoRatingsSet (optional)
   * @param dateadded OptionalString (optional)
   * @param premiered OptionalString (optional)
   * @param uniqueid any | MediaUniqueIDSet (optional)
   * @returns string
   */
  async SetMovieDetails(params: VideoLibrarySetMovieDetailsParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.SetMovieDetails", params);
  }

  /**
   * Update the given movie set with the given details
   * @param setid LibraryId
   * @param title OptionalString (optional)
   * @param art any | MediaArtworkSet (optional)
   * @param plot OptionalString (optional)
   * @returns string
   */
  async SetMovieSetDetails(params: VideoLibrarySetMovieSetDetailsParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.SetMovieSetDetails", params);
  }

  /**
   * Update the given music video with the given details
   * @param musicvideoid LibraryId
   * @param title OptionalString (optional)
   * @param playcount OptionalInteger (optional)
   * @param runtime OptionalInteger (optional)
   * @param director any | ArrayString (optional)
   * @param studio any | ArrayString (optional)
   * @param year OptionalInteger (optional)
   * @param plot OptionalString (optional)
   * @param album OptionalString (optional)
   * @param artist any | ArrayString (optional)
   * @param genre any | ArrayString (optional)
   * @param track OptionalInteger (optional)
   * @param lastplayed OptionalString (optional)
   * @param thumbnail OptionalString (optional)
   * @param fanart OptionalString (optional)
   * @param tag any | ArrayString (optional)
   * @param art any | MediaArtworkSet (optional)
   * @param resume any | VideoResume (optional)
   * @param rating OptionalNumber (optional)
   * @param userrating OptionalInteger (optional)
   * @param dateadded OptionalString (optional)
   * @param premiered OptionalString (optional)
   * @param uniqueid any | MediaUniqueIDSet (optional)
   * @returns string
   */
  async SetMusicVideoDetails(params: VideoLibrarySetMusicVideoDetailsParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.SetMusicVideoDetails", params);
  }

  /**
   * Update the given season with the given details
   * @param seasonid LibraryId
   * @param art any | MediaArtworkSet (optional)
   * @param userrating OptionalInteger (optional)
   * @param title OptionalString (optional)
   * @returns string
   */
  async SetSeasonDetails(params: VideoLibrarySetSeasonDetailsParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.SetSeasonDetails", params);
  }

  /**
   * Update the given tvshow with the given details
   * @param tvshowid LibraryId
   * @param title OptionalString (optional)
   * @param playcount OptionalInteger (optional)
   * @param studio any | ArrayString (optional)
   * @param plot OptionalString (optional)
   * @param genre any | ArrayString (optional)
   * @param rating OptionalNumber (optional)
   * @param mpaa OptionalString (optional)
   * @param imdbnumber OptionalString (optional)
   * @param premiered OptionalString (optional)
   * @param votes OptionalString (optional)
   * @param lastplayed OptionalString (optional)
   * @param originaltitle OptionalString (optional)
   * @param sorttitle OptionalString (optional)
   * @param episodeguide OptionalString (optional)
   * @param thumbnail OptionalString (optional)
   * @param fanart OptionalString (optional)
   * @param tag any | ArrayString (optional)
   * @param art any | MediaArtworkSet (optional)
   * @param userrating OptionalInteger (optional)
   * @param ratings VideoRatingsSet (optional)
   * @param dateadded OptionalString (optional)
   * @param runtime OptionalInteger (optional)
   * @param status OptionalString (optional)
   * @param uniqueid any | MediaUniqueIDSet (optional)
   * @returns string
   */
  async SetTVShowDetails(params: VideoLibrarySetTVShowDetailsParams): Promise<string> {
    return this.sendMessage<string>("VideoLibrary.SetTVShowDetails", params);
  }

}