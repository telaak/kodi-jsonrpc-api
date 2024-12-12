// Functions Block
// These functions correspond to the VideoLibrary methods in kodi.json.
// They connect $ref references to the defined types and follow any "extends" relationships.
// Functions are returned without the "VideoLibrary" prefix and underscore.
// Existing types and interfaces in koditestExports.ts are omitted.

// Note: These functions are intended to be methods within the KodiVideoLibraryNamespace class that has access to `sendMessage`.

import { ISendMessage } from "..";
import {
  EpisodeId,
  TVShowId,
  MusicVideoId,
  GenreId,
  TagId,
  Year,
  VideoProperty,
  MovieDetails,
  EpisodeDetails,
  TVShowDetails,
  MusicVideoDetails,
  Genre,
  Tag,
  VideoDetails,
  ListLimits,
  ListSort,
  ListLimitsReturned,
  ListFilterMovies,
  ListFilterEpisodes,
  ListFilterTVShows,
  ListFilterMusicVideos,
  GetMovieDetailsParams,
  GetEpisodesParams,
  GetMoviesParams,
  GetMusicVideoDetailsParams,
  GetTVShowDetailsParams,
  GetVideoDetailsParams,
  GetAlbumsResponse,
  GetArtistsResponse,
  GetPropertiesResponse,
  GetSongsResponse,
  RecentlyAddedMoviesResponse,
  RecentlyAddedEpisodesResponse,
  RecentlyAddedMusicVideosResponse,
  RecentlyPlayedMoviesResponse,
  RecentlyPlayedEpisodesResponse,
  RecentlyPlayedMusicVideosResponse,
  GenresResponse,
  TagsResponse,
  YearsResponse,
  SeasonsResponse,
  TVShowsResponse,
  MoviesResponse,
  EpisodesResponse,
  MusicVideosResponse,
  MovieDetailsResponse,
  EpisodeDetailsResponse,
  MusicVideoDetailsResponse,
  TVShowDetailsResponse,
  VideoDetailsResponse,
  MovieId,
} from "../types/videolibrary"; // Adjust the import path as necessary

export class KodiVideoLibraryNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  /**
   * Cleans the video library by removing entries for missing files.
   *
   * @param showdialogs - Whether to show dialogs during the cleaning process.
   * @returns A promise resolving to a boolean indicating success.
   */
  async Clean(showdialogs: boolean = true): Promise<boolean> {
    const params = { showdialogs };
    const response = await this.sendMessage("VideoLibrary.Clean", params);
    return response === "OK";
  }

  /**
   * Exports the video library to a specified file.
   *
   * @param file - The file path to export the library to.
   * @returns A promise resolving to a string message upon success.
   */
  async Export(file: string): Promise<string> {
    const params = { file };
    return this.sendMessage("VideoLibrary.Export", params);
  }

  /**
   * Retrieves detailed information about a specific episode.
   *
   * @param episodeid - The ID of the episode.
   * @param properties - Optional list of properties to retrieve.
   * @returns A promise resolving to the EpisodeDetails object.
   */
  async GetEpisodeDetails(
    episodeid: EpisodeId,
    properties?: VideoProperty[]
  ): Promise<EpisodeDetailsResponse> {
    return this.sendMessage("VideoLibrary.GetEpisodeDetails", {
      episodeid,
      properties,
    });
  }

  /**
   * Retrieves a list of episodes with optional filtering and pagination.
   *
   * @param tvshowid - The ID of the TV show.
   * @param season - The season number.
   * @param properties - Optional list of properties to retrieve.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @param filter - Optional filter criteria.
   * @returns A promise resolving to the EpisodesResponse object.
   */
  async GetEpisodes(
    tvshowid: TVShowId,
    season?: number,
    properties?: VideoProperty[],
    limits?: ListLimits,
    sort?: ListSort,
    filter?: any // Define a specific type if available
  ): Promise<EpisodesResponse> {
    const params: GetEpisodesParams = {
      tvshowid,
      season,
      properties,
      limits,
      sort,
      filter,
    };
    const response = await this.sendMessage("VideoLibrary.GetEpisodes", params);
    return {
      episodes: response.episodes,
      limits: response.limits,
    };
  }

  /**
   * Retrieves a list of genres.
   *
   * @returns A promise resolving to the GenresResponse object.
   */
  async GetGenres(): Promise<GenresResponse> {
    return this.sendMessage("VideoLibrary.GetGenres", {});
  }

  /**
   * Retrieves detailed information about a specific movie.
   *
   * @param movieid - The ID of the movie.
   * @param properties - Optional list of properties to retrieve.
   * @returns A promise resolving to the MovieDetails object.
   */
  async GetMovieDetails(
    movieid: MovieId,
    properties?: VideoProperty[]
  ): Promise<MovieDetailsResponse> {
    const params: GetMovieDetailsParams = { movieid, properties };
    return this.sendMessage("VideoLibrary.GetMovieDetails", params);
  }

  /**
   * Retrieves a list of movies with optional filtering and pagination.
   *
   * @param properties - Optional list of properties to retrieve.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @param filter - Optional filter criteria.
   * @returns A promise resolving to the MoviesResponse object.
   */
  async GetMovies(
    properties?: VideoProperty[],
    limits?: ListLimits,
    sort?: ListSort,
    filter?: ListFilterMovies
  ): Promise<MoviesResponse> {
    const params: GetMoviesParams = { properties, limits, sort, filter };
    const response = await this.sendMessage("VideoLibrary.GetMovies", params);
    return {
      movies: response.movies,
      limits: response.limits,
    };
  }

  /**
   * Retrieves detailed information about a specific music video.
   *
   * @param musicvideoid - The ID of the music video.
   * @param properties - Optional list of properties to retrieve.
   * @returns A promise resolving to the MusicVideoDetails object.
   */
  async GetMusicVideoDetails(
    musicvideoid: MusicVideoId,
    properties?: VideoProperty[]
  ): Promise<MusicVideoDetailsResponse> {
    const params: GetMusicVideoDetailsParams = { musicvideoid, properties };
    return this.sendMessage("VideoLibrary.GetMusicVideoDetails", params);
  }

  /**
   * Retrieves a list of music videos with optional filtering and pagination.
   *
   * @param properties - Optional list of properties to retrieve.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @param filter - Optional filter criteria.
   * @returns A promise resolving to the MusicVideosResponse object.
   */
  async GetMusicVideos(
    properties?: VideoProperty[],
    limits?: ListLimits,
    sort?: ListSort,
    filter?: ListFilterMusicVideos
  ): Promise<MusicVideosResponse> {
    const params: any = {};
    if (properties) params.properties = properties;
    if (limits) params.limits = limits;
    if (sort) params.sort = sort;
    if (filter) params.filter = filter;

    const response = await this.sendMessage(
      "VideoLibrary.GetMusicVideos",
      params
    );
    return {
      musicvideos: response.musicvideos,
      limits: response.limits,
    };
  }

  /**
   * Retrieves a list of recently added episodes.
   *
   * @param limits - Optional pagination limits.
   * @returns A promise resolving to the RecentlyAddedEpisodesResponse object.
   */
  async GetRecentlyAddedEpisodes(
    limits?: ListLimits
  ): Promise<RecentlyAddedEpisodesResponse> {
    const params = { limits };
    return this.sendMessage("VideoLibrary.GetRecentlyAddedEpisodes", params);
  }

  /**
   * Retrieves a list of recently added movies.
   *
   * @param limits - Optional pagination limits.
   * @returns A promise resolving to the RecentlyAddedMoviesResponse object.
   */
  async GetRecentlyAddedMovies(
    limits?: ListLimits
  ): Promise<RecentlyAddedMoviesResponse> {
    const params = { limits };
    return this.sendMessage("VideoLibrary.GetRecentlyAddedMovies", params);
  }

  /**
   * Retrieves a list of recently added music videos.
   *
   * @param limits - Optional pagination limits.
   * @returns A promise resolving to the RecentlyAddedMusicVideosResponse object.
   */
  async GetRecentlyAddedMusicVideos(
    limits?: ListLimits
  ): Promise<RecentlyAddedMusicVideosResponse> {
    const params = { limits };
    return this.sendMessage("VideoLibrary.GetRecentlyAddedMusicVideos", params);
  }

  /**
   * Retrieves a list of seasons for a specific TV show.
   *
   * @param tvshowid - The ID of the TV show.
   * @returns A promise resolving to the SeasonsResponse object.
   */
  async GetSeasons(tvshowid: TVShowId): Promise<SeasonsResponse> {
    const params = { tvshowid };
    return this.sendMessage("VideoLibrary.GetSeasons", params);
  }

  /**
   * Retrieves detailed information about a specific TV show.
   *
   * @param tvshowid - The ID of the TV show.
   * @param properties - Optional list of properties to retrieve.
   * @returns A promise resolving to the TVShowDetails object.
   */
  async GetTVShowDetails(
    tvshowid: TVShowId,
    properties?: VideoProperty[]
  ): Promise<TVShowDetailsResponse> {
    const params: GetTVShowDetailsParams = { tvshowid, properties };
    return this.sendMessage("VideoLibrary.GetTVShowDetails", params);
  }

  /**
   * Retrieves a list of TV shows with optional filtering and pagination.
   *
   * @param properties - Optional list of properties to retrieve.
   * @param limits - Optional pagination limits.
   * @param sort - Optional sorting options.
   * @param filter - Optional filter criteria.
   * @returns A promise resolving to the TVShowsResponse object.
   */
  async GetTVShows(
    properties?: VideoProperty[],
    limits?: ListLimits,
    sort?: ListSort,
    filter?: ListFilterTVShows
  ): Promise<TVShowsResponse> {
    const params: any = {};
    if (properties) params.properties = properties;
    if (limits) params.limits = limits;
    if (sort) params.sort = sort;
    if (filter) params.filter = filter;

    const response = await this.sendMessage("VideoLibrary.GetTVShows", params);
    return {
      tvshows: response.tvshows,
      limits: response.limits,
    };
  }

  /**
   * Retrieves a list of tags.
   *
   * @returns A promise resolving to the TagsResponse object.
   */
  async GetTags(): Promise<TagsResponse> {
    return this.sendMessage("VideoLibrary.GetTags", {});
  }

  /**
   * Retrieves detailed information about a specific video.
   *
   * @param videoid - The ID of the video.
   * @param properties - Optional list of properties to retrieve.
   * @returns A promise resolving to the VideoDetails object.
   */
  async GetVideoDetails(
    videoid: string,
    properties?: VideoProperty[]
  ): Promise<VideoDetailsResponse> {
    const params: GetVideoDetailsParams = { videoid, properties };
    return this.sendMessage("VideoLibrary.GetVideoDetails", params);
  }

  /**
   * Retrieves a list of years for which videos are available.
   *
   * @returns A promise resolving to the YearsResponse object.
   */
  async GetYears(): Promise<YearsResponse> {
    return this.sendMessage("VideoLibrary.GetYears", {});
  }

  /**
   * Refreshes the video library by scanning for new content.
   *
   * @returns A promise resolving to a boolean indicating success.
   */
  async Refresh(): Promise<boolean> {
    const response = await this.sendMessage("VideoLibrary.Refresh", {});
    return response === "OK";
  }

  /**
   * Removes a specific episode from the video library.
   *
   * @param episodeid - The ID of the episode to remove.
   * @returns A promise resolving to a boolean indicating success.
   */
  async RemoveEpisode(episodeid: EpisodeId): Promise<boolean> {
    const params = { episodeid };
    const response = await this.sendMessage(
      "VideoLibrary.RemoveEpisode",
      params
    );
    return response === "OK";
  }

  /**
   * Removes a specific movie from the video library.
   *
   * @param movieid - The ID of the movie to remove.
   * @returns A promise resolving to a boolean indicating success.
   */
  async RemoveMovie(movieid: MovieId): Promise<boolean> {
    const params = { movieid };
    const response = await this.sendMessage("VideoLibrary.RemoveMovie", params);
    return response === "OK";
  }

  /**
   * Removes a specific music video from the video library.
   *
   * @param musicvideoid - The ID of the music video to remove.
   * @returns A promise resolving to a boolean indicating success.
   */
  async RemoveMusicVideo(musicvideoid: MusicVideoId): Promise<boolean> {
    const params = { musicvideoid };
    const response = await this.sendMessage(
      "VideoLibrary.RemoveMusicVideo",
      params
    );
    return response === "OK";
  }

  /**
   * Removes a specific TV show from the video library.
   *
   * @param tvshowid - The ID of the TV show to remove.
   * @returns A promise resolving to a boolean indicating success.
   */
  async RemoveTVShow(tvshowid: TVShowId): Promise<boolean> {
    const params = { tvshowid };
    const response = await this.sendMessage(
      "VideoLibrary.RemoveTVShow",
      params
    );
    return response === "OK";
  }

  /**
   * Scans the video library for new content.
   *
   * @returns A promise resolving to a boolean indicating if the scan was successful.
   */
  async Scan(): Promise<boolean> {
    const response = await this.sendMessage("VideoLibrary.Scan", {});
    return response === "OK";
  }

  /**
   * Updates the details of a specific episode.
   *
   * @param episodeid - The ID of the episode to update.
   * @param properties - The properties to update.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetEpisodeDetails(
    episodeid: EpisodeId,
    properties: Partial<EpisodeDetails>
  ): Promise<boolean> {
    const params = { episodeid, properties };
    const response = await this.sendMessage(
      "VideoLibrary.SetEpisodeDetails",
      params
    );
    return response === "OK";
  }

  /**
   * Updates the details of a specific movie.
   *
   * @param movieid - The ID of the movie to update.
   * @param properties - The properties to update.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetMovieDetails(
    movieid: MovieId,
    properties: Partial<MovieDetails>
  ): Promise<boolean> {
    const params = { movieid, properties };
    const response = await this.sendMessage(
      "VideoLibrary.SetMovieDetails",
      params
    );
    return response === "OK";
  }

  /**
   * Updates the details of a specific music video.
   *
   * @param musicvideoid - The ID of the music video to update.
   * @param properties - The properties to update.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetMusicVideoDetails(
    musicvideoid: MusicVideoId,
    properties: Partial<MusicVideoDetails>
  ): Promise<boolean> {
    const params = { musicvideoid, properties };
    const response = await this.sendMessage(
      "VideoLibrary.SetMusicVideoDetails",
      params
    );
    return response === "OK";
  }

  /**
   * Updates the details of a specific TV show.
   *
   * @param tvshowid - The ID of the TV show to update.
   * @param properties - The properties to update.
   * @returns A promise resolving to a boolean indicating success.
   */
  async SetTVShowDetails(
    tvshowid: TVShowId,
    properties: Partial<TVShowDetails>
  ): Promise<boolean> {
    const params = { tvshowid, properties };
    const response = await this.sendMessage(
      "VideoLibrary.SetTVShowDetails",
      params
    );
    return response === "OK";
  }
}
