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
   */
  async Clean(params: VideoLibraryCleanParams): Promise<string> {
    return this.sendMessage("VideoLibrary.Clean", params);
  }

  /**
   * Exports all items from the video library
   */
  async Export(params: VideoLibraryExportParams): Promise<string> {
    return this.sendMessage("VideoLibrary.Export", params);
  }

  /**
   * Retrieve all potential art URLs for a media item by art type
   */
  async GetAvailableArt(params: VideoLibraryGetAvailableArtParams): Promise<VideoLibraryGetAvailableArtResponse> {
    return this.sendMessage("VideoLibrary.GetAvailableArt", params);
  }

  /**
   * Retrieve a list of potential art types for a media item
   */
  async GetAvailableArtTypes(params: VideoLibraryGetAvailableArtTypesParams): Promise<VideoLibraryGetAvailableArtTypesResponse> {
    return this.sendMessage("VideoLibrary.GetAvailableArtTypes", params);
  }

  /**
   * Retrieve details about a specific tv show episode
   */
  async GetEpisodeDetails(params: VideoLibraryGetEpisodeDetailsParams): Promise<VideoLibraryGetEpisodeDetailsResponse> {
    return this.sendMessage("VideoLibrary.GetEpisodeDetails", params);
  }

  /**
   * Retrieve all tv show episodes
   */
  async GetEpisodes(params: VideoLibraryGetEpisodesParams): Promise<VideoLibraryGetEpisodesResponse> {
    return this.sendMessage("VideoLibrary.GetEpisodes", params);
  }

  /**
   * Retrieve all genres
   */
  async GetGenres(params: VideoLibraryGetGenresParams): Promise<VideoLibraryGetGenresResponse> {
    return this.sendMessage("VideoLibrary.GetGenres", params);
  }

  /**
   * Retrieve all in progress tvshows
   */
  async GetInProgressTVShows(params: VideoLibraryGetInProgressTVShowsParams): Promise<VideoLibraryGetInProgressTVShowsResponse> {
    return this.sendMessage("VideoLibrary.GetInProgressTVShows", params);
  }

  /**
   * Retrieve details about a specific movie
   */
  async GetMovieDetails(params: VideoLibraryGetMovieDetailsParams): Promise<VideoLibraryGetMovieDetailsResponse> {
    return this.sendMessage("VideoLibrary.GetMovieDetails", params);
  }

  /**
   * Retrieve details about a specific movie set
   */
  async GetMovieSetDetails(params: VideoLibraryGetMovieSetDetailsParams): Promise<VideoLibraryGetMovieSetDetailsResponse> {
    return this.sendMessage("VideoLibrary.GetMovieSetDetails", params);
  }

  /**
   * Retrieve all movie sets
   */
  async GetMovieSets(params: VideoLibraryGetMovieSetsParams): Promise<VideoLibraryGetMovieSetsResponse> {
    return this.sendMessage("VideoLibrary.GetMovieSets", params);
  }

  /**
   * Retrieve all movies
   */
  async GetMovies(params: VideoLibraryGetMoviesParams): Promise<VideoLibraryGetMoviesResponse> {
    return this.sendMessage("VideoLibrary.GetMovies", params);
  }

  /**
   * Retrieve details about a specific music video
   */
  async GetMusicVideoDetails(params: VideoLibraryGetMusicVideoDetailsParams): Promise<VideoLibraryGetMusicVideoDetailsResponse> {
    return this.sendMessage("VideoLibrary.GetMusicVideoDetails", params);
  }

  /**
   * Retrieve all music videos
   */
  async GetMusicVideos(params: VideoLibraryGetMusicVideosParams): Promise<VideoLibraryGetMusicVideosResponse> {
    return this.sendMessage("VideoLibrary.GetMusicVideos", params);
  }

  /**
   * Retrieve all recently added tv episodes
   */
  async GetRecentlyAddedEpisodes(params: VideoLibraryGetRecentlyAddedEpisodesParams): Promise<VideoLibraryGetRecentlyAddedEpisodesResponse> {
    return this.sendMessage("VideoLibrary.GetRecentlyAddedEpisodes", params);
  }

  /**
   * Retrieve all recently added movies
   */
  async GetRecentlyAddedMovies(params: VideoLibraryGetRecentlyAddedMoviesParams): Promise<VideoLibraryGetRecentlyAddedMoviesResponse> {
    return this.sendMessage("VideoLibrary.GetRecentlyAddedMovies", params);
  }

  /**
   * Retrieve all recently added music videos
   */
  async GetRecentlyAddedMusicVideos(params: VideoLibraryGetRecentlyAddedMusicVideosParams): Promise<VideoLibraryGetRecentlyAddedMusicVideosResponse> {
    return this.sendMessage("VideoLibrary.GetRecentlyAddedMusicVideos", params);
  }

  /**
   * Retrieve details about a specific tv show season
   */
  async GetSeasonDetails(params: VideoLibraryGetSeasonDetailsParams): Promise<VideoLibraryGetSeasonDetailsResponse> {
    return this.sendMessage("VideoLibrary.GetSeasonDetails", params);
  }

  /**
   * Retrieve all tv seasons
   */
  async GetSeasons(params: VideoLibraryGetSeasonsParams): Promise<VideoLibraryGetSeasonsResponse> {
    return this.sendMessage("VideoLibrary.GetSeasons", params);
  }

  /**
   * Retrieve details about a specific tv show
   */
  async GetTVShowDetails(params: VideoLibraryGetTVShowDetailsParams): Promise<VideoLibraryGetTVShowDetailsResponse> {
    return this.sendMessage("VideoLibrary.GetTVShowDetails", params);
  }

  /**
   * Retrieve all tv shows
   */
  async GetTVShows(params: VideoLibraryGetTVShowsParams): Promise<VideoLibraryGetTVShowsResponse> {
    return this.sendMessage("VideoLibrary.GetTVShows", params);
  }

  /**
   * Retrieve all tags
   */
  async GetTags(params: VideoLibraryGetTagsParams): Promise<VideoLibraryGetTagsResponse> {
    return this.sendMessage("VideoLibrary.GetTags", params);
  }

  /**
   * Refresh the given episode in the library
   */
  async RefreshEpisode(params: VideoLibraryRefreshEpisodeParams): Promise<string> {
    return this.sendMessage("VideoLibrary.RefreshEpisode", params);
  }

  /**
   * Refresh the given movie in the library
   */
  async RefreshMovie(params: VideoLibraryRefreshMovieParams): Promise<string> {
    return this.sendMessage("VideoLibrary.RefreshMovie", params);
  }

  /**
   * Refresh the given music video in the library
   */
  async RefreshMusicVideo(params: VideoLibraryRefreshMusicVideoParams): Promise<string> {
    return this.sendMessage("VideoLibrary.RefreshMusicVideo", params);
  }

  /**
   * Refresh the given tv show in the library
   */
  async RefreshTVShow(params: VideoLibraryRefreshTVShowParams): Promise<string> {
    return this.sendMessage("VideoLibrary.RefreshTVShow", params);
  }

  /**
   * Removes the given episode from the library
   */
  async RemoveEpisode(params: VideoLibraryRemoveEpisodeParams): Promise<string> {
    return this.sendMessage("VideoLibrary.RemoveEpisode", params);
  }

  /**
   * Removes the given movie from the library
   */
  async RemoveMovie(params: VideoLibraryRemoveMovieParams): Promise<string> {
    return this.sendMessage("VideoLibrary.RemoveMovie", params);
  }

  /**
   * Removes the given music video from the library
   */
  async RemoveMusicVideo(params: VideoLibraryRemoveMusicVideoParams): Promise<string> {
    return this.sendMessage("VideoLibrary.RemoveMusicVideo", params);
  }

  /**
   * Removes the given tv show from the library
   */
  async RemoveTVShow(params: VideoLibraryRemoveTVShowParams): Promise<string> {
    return this.sendMessage("VideoLibrary.RemoveTVShow", params);
  }

  /**
   * Scans the video sources for new library items
   */
  async Scan(params: VideoLibraryScanParams): Promise<string> {
    return this.sendMessage("VideoLibrary.Scan", params);
  }

  /**
   * Update the given episode with the given details
   */
  async SetEpisodeDetails(params: VideoLibrarySetEpisodeDetailsParams): Promise<string> {
    return this.sendMessage("VideoLibrary.SetEpisodeDetails", params);
  }

  /**
   * Update the given movie with the given details
   */
  async SetMovieDetails(params: VideoLibrarySetMovieDetailsParams): Promise<string> {
    return this.sendMessage("VideoLibrary.SetMovieDetails", params);
  }

  /**
   * Update the given movie set with the given details
   */
  async SetMovieSetDetails(params: VideoLibrarySetMovieSetDetailsParams): Promise<string> {
    return this.sendMessage("VideoLibrary.SetMovieSetDetails", params);
  }

  /**
   * Update the given music video with the given details
   */
  async SetMusicVideoDetails(params: VideoLibrarySetMusicVideoDetailsParams): Promise<string> {
    return this.sendMessage("VideoLibrary.SetMusicVideoDetails", params);
  }

  /**
   * Update the given season with the given details
   */
  async SetSeasonDetails(params: VideoLibrarySetSeasonDetailsParams): Promise<string> {
    return this.sendMessage("VideoLibrary.SetSeasonDetails", params);
  }

  /**
   * Update the given tvshow with the given details
   */
  async SetTVShowDetails(params: VideoLibrarySetTVShowDetailsParams): Promise<string> {
    return this.sendMessage("VideoLibrary.SetTVShowDetails", params);
  }

}