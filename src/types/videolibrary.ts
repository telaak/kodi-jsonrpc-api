// Types and Interfaces Block
// These types and interfaces are specific to the VideoLibrary methods and do not exist in koditestExports.ts

import {
  ArtistDetails,
  ListLimits,
  ListLimitsReturned,
  ListSort,
} from "./audiolibrary";

/**
 * MovieId ($ref: "Library.Id")
 * Represents the unique identifier for a movie.
 */
export type MovieId = string;

/**
 * EpisodeId ($ref: "Library.Id")
 * Represents the unique identifier for an episode.
 */
export type EpisodeId = string;

/**
 * TVShowId ($ref: "Library.Id")
 * Represents the unique identifier for a TV show.
 */
export type TVShowId = string;

/**
 * MusicVideoId ($ref: "Library.Id")
 * Represents the unique identifier for a music video.
 */
export type MusicVideoId = string;

/**
 * GenreId ($ref: "Library.Id")
 * Represents the unique identifier for a genre.
 */
export type GenreId = string;

/**
 * TagId ($ref: "Library.Id")
 * Represents the unique identifier for a tag.
 */
export type TagId = string;

/**
 * Year ($ref: "Library.Year")
 * Represents a year value.
 */
export type Year = number;

/**
 * VideoProperty ($ref: "Video.Property.Name")
 * Represents a property name relevant to VideoLibrary methods.
 */
export type VideoProperty =
  | "title"
  | "genre"
  | "year"
  | "rating"
  | "file"
  | "path"
  | "director"
  | "duration"
  | "plot"
  | "studio"
  | "mpaa"
  | "tagline"
  | "trailer"
  | "originaltitle"
  | "production"
  | "set"
  | "sorttitle"
  | "theme"
  | "writer"
  | "premiered"
  | "runtime"
  | "episodeguide"
  | "fanart"
  | "thumbnail"
  | "ratingimage"
  | "lastplayed"
  | "playcount"
  | "streamdetails"
  | "country"
  | "language"
  | "season"
  | "resume";
// Add additional properties as defined in kodi.json

/**
 * MovieDetails ($ref: "Video.Details.Movie")
 * Represents the detailed information of a movie.
 */
export interface MovieDetails {
  movieid: MovieId; // Unique identifier for the movie
  title: string; // Title of the movie
  genre: string[]; // Genres of the movie
  year: Year; // Release year of the movie
  rating?: number; // Rating of the movie
  file: string; // File path of the movie
  path: string; // Directory path of the movie
  director?: string[]; // Directors of the movie
  duration?: number; // Duration of the movie in seconds
  plot?: string; // Plot summary of the movie
  studio?: string; // Studio that produced the movie
  mpaa?: string; // MPAA rating of the movie
  tagline?: string; // Tagline of the movie
  trailer?: string; // Trailer URL of the movie
  originaltitle?: string; // Original title of the movie
  production?: string[]; // Production companies of the movie
  set?: string; // Set name if the movie is part of a collection
  sorttitle?: string; // Sort title for the movie
  theme?: string[]; // Themes of the movie
  writer?: string[]; // Writers of the movie
  premiered?: string; // Premiere date of the movie
  runtime?: number; // Runtime of the movie in minutes
  episodeguide?: string; // Episode guide URL if applicable
  fanart?: string; // Fanart image URL
  thumbnail?: string; // Thumbnail image URL
  ratingimage?: string; // Rating image URL
  lastplayed?: string; // Last played timestamp
  playcount?: number; // Number of times the movie has been played
  streamdetails?: any; // Stream details object
  country?: string[]; // Countries associated with the movie
  language?: string[]; // Languages of the movie
  season?: number; // Season number if applicable
  [key: string]: any; // Additional properties as defined in kodi.json
}

/**
 * EpisodeDetails ($ref: "Video.Details.Episode")
 * Represents the detailed information of an episode.
 */
export interface EpisodeDetails {
  episodeid: EpisodeId; // Unique identifier for the episode
  title: string; // Title of the episode
  genre: string[]; // Genres of the episode
  year: Year; // Release year of the episode
  rating?: number; // Rating of the episode
  file: string; // File path of the episode
  path: string; // Directory path of the episode
  director?: string[]; // Directors of the episode
  duration?: number; // Duration of the episode in seconds
  plot?: string; // Plot summary of the episode
  studio?: string; // Studio that produced the episode
  mpaa?: string; // MPAA rating of the episode
  tagline?: string; // Tagline of the episode
  trailer?: string; // Trailer URL of the episode
  originaltitle?: string; // Original title of the episode
  production?: string[]; // Production companies of the episode
  set?: string; // Set name if the episode is part of a collection
  sorttitle?: string; // Sort title for the episode
  theme?: string[]; // Themes of the episode
  writer?: string[]; // Writers of the episode
  premiered?: string; // Premiere date of the episode
  runtime?: number; // Runtime of the episode in minutes
  episodeguide?: string; // Episode guide URL if applicable
  fanart?: string; // Fanart image URL
  thumbnail?: string; // Thumbnail image URL
  ratingimage?: string; // Rating image URL
  lastplayed?: string; // Last played timestamp
  playcount?: number; // Number of times the episode has been played
  streamdetails?: any; // Stream details object
  country?: string[]; // Countries associated with the episode
  language?: string[]; // Languages of the episode
  season?: number; // Season number
  episode?: number; // Episode number
  showtitle?: string; // Title of the TV show
  [key: string]: any; // Additional properties as defined in kodi.json
}

/**
 * TVShowDetails ($ref: "Video.Details.TVShow")
 * Represents the detailed information of a TV show.
 */
export interface TVShowDetails {
  tvshowid: TVShowId; // Unique identifier for the TV show
  title: string; // Title of the TV show
  genre: string[]; // Genres of the TV show
  year: Year; // Start year of the TV show
  rating?: number; // Rating of the TV show
  file: string; // File path of the TV show
  path: string; // Directory path of the TV show
  director?: string[]; // Directors of the TV show
  duration?: number; // Duration of the TV show in seconds
  plot?: string; // Plot summary of the TV show
  studio?: string; // Studio that produced the TV show
  mpaa?: string; // MPAA rating of the TV show
  tagline?: string; // Tagline of the TV show
  trailer?: string; // Trailer URL of the TV show
  originaltitle?: string; // Original title of the TV show
  production?: string[]; // Production companies of the TV show
  set?: string; // Set name if the TV show is part of a collection
  sorttitle?: string; // Sort title for the TV show
  theme?: string[]; // Themes of the TV show
  writer?: string[]; // Writers of the TV show
  premiered?: string; // Premiere date of the TV show
  runtime?: number; // Runtime of the TV show in minutes
  episodeguide?: string; // Episode guide URL if applicable
  fanart?: string; // Fanart image URL
  thumbnail?: string; // Thumbnail image URL
  ratingimage?: string; // Rating image URL
  lastplayed?: string; // Last played timestamp
  playcount?: number; // Number of times the TV show has been played
  streamdetails?: any; // Stream details object
  country?: string[]; // Countries associated with the TV show
  language?: string[]; // Languages of the TV show
  seasons?: number; // Number of seasons
  [key: string]: any; // Additional properties as defined in kodi.json
}

/**
 * MusicVideoDetails ($ref: "Video.Details.MusicVideo")
 * Represents the detailed information of a music video.
 */
export interface MusicVideoDetails {
  musicvideoid: MusicVideoId; // Unique identifier for the music video
  title: string; // Title of the music video
  genre: string[]; // Genres of the music video
  year: Year; // Release year of the music video
  rating?: number; // Rating of the music video
  file: string; // File path of the music video
  path: string; // Directory path of the music video
  director?: string[]; // Directors of the music video
  duration?: number; // Duration of the music video in seconds
  plot?: string; // Plot summary of the music video
  studio?: string; // Studio that produced the music video
  mpaa?: string; // MPAA rating of the music video
  tagline?: string; // Tagline of the music video
  trailer?: string; // Trailer URL of the music video
  originaltitle?: string; // Original title of the music video
  production?: string[]; // Production companies of the music video
  set?: string; // Set name if the music video is part of a collection
  sorttitle?: string; // Sort title for the music video
  theme?: string[]; // Themes of the music video
  writer?: string[]; // Writers of the music video
  premiered?: string; // Premiere date of the music video
  runtime?: number; // Runtime of the music video in minutes
  episodeguide?: string; // Episode guide URL if applicable
  fanart?: string; // Fanart image URL
  thumbnail?: string; // Thumbnail image URL
  ratingimage?: string; // Rating image URL
  lastplayed?: string; // Last played timestamp
  playcount?: number; // Number of times the music video has been played
  streamdetails?: any; // Stream details object
  country?: string[]; // Countries associated with the music video
  language?: string[]; // Languages of the music video
  [key: string]: any; // Additional properties as defined in kodi.json
}

/**
 * Genre ($ref: "Video.Genre")
 * Represents a video genre.
 */
export interface Genre {
  genreid: GenreId; // Unique identifier for the genre
  name: string; // Name of the genre
}

/**
 * Tag ($ref: "Video.Tag")
 * Represents a video tag.
 */
export interface Tag {
  tagid: TagId; // Unique identifier for the tag
  name: string; // Name of the tag
}

/**
 * VideoDetails ($ref: "Video.Details.Video")
 * Represents the detailed information of a generic video.
 */
export interface VideoDetails {
  videoid: string; // Unique identifier for the video
  title: string; // Title of the video
  genre: string[]; // Genres of the video
  year: Year; // Release year of the video
  rating?: number; // Rating of the video
  file: string; // File path of the video
  path: string; // Directory path of the video
  director?: string[]; // Directors of the video
  duration?: number; // Duration of the video in seconds
  plot?: string; // Plot summary of the video
  studio?: string; // Studio that produced the video
  mpaa?: string; // MPAA rating of the video
  tagline?: string; // Tagline of the video
  trailer?: string; // Trailer URL of the video
  originaltitle?: string; // Original title of the video
  production?: string[]; // Production companies of the video
  set?: string; // Set name if the video is part of a collection
  sorttitle?: string; // Sort title for the video
  theme?: string[]; // Themes of the video
  writer?: string[]; // Writers of the video
  premiered?: string; // Premiere date of the video
  runtime?: number; // Runtime of the video in minutes
  episodeguide?: string; // Episode guide URL if applicable
  fanart?: string; // Fanart image URL
  thumbnail?: string; // Thumbnail image URL
  ratingimage?: string; // Rating image URL
  lastplayed?: string; // Last played timestamp
  playcount?: number; // Number of times the video has been played
  streamdetails?: any; // Stream details object
  country?: string[]; // Countries associated with the video
  language?: string[]; // Languages of the video
  [key: string]: any; // Additional properties as defined in kodi.json
}

/**
 * ListFilterMovies ($ref: "List.Filter.Movies")
 * Represents additional filter options for movies.
 */
export interface ListFilterMovies {
  // Define specific filter properties as per kodi.json
  [key: string]: any;
}

/**
 * ListFilterEpisodes ($ref: "List.Filter.Episodes")
 * Represents additional filter options for episodes.
 */
export interface ListFilterEpisodes {
  // Define specific filter properties as per kodi.json
  [key: string]: any;
}

/**
 * ListFilterTVShows ($ref: "List.Filter.TVShows")
 * Represents additional filter options for TV shows.
 */
export interface ListFilterTVShows {
  // Define specific filter properties as per kodi.json
  [key: string]: any;
}

/**
 * ListFilterMusicVideos ($ref: "List.Filter.MusicVideos")
 * Represents additional filter options for music videos.
 */
export interface ListFilterMusicVideos {
  // Define specific filter properties as per kodi.json
  [key: string]: any;
}

/**
 * GetMovieDetailsParams ($ref: "VideoLibrary.GetMovieDetails.Params")
 * Parameters for the GetMovieDetails method.
 */
export interface GetMovieDetailsParams {
  movieid: MovieId; // ID of the movie to retrieve details for
  properties?: VideoProperty[]; // Optional list of properties to retrieve
}

/**
 * GetEpisodesParams ($ref: "VideoLibrary.GetEpisodes.Params")
 * Parameters for the GetEpisodes method.
 */
export interface GetEpisodesParams {
  tvshowid: TVShowId; // ID of the TV show
  season?: number; // Season number
  properties?: VideoProperty[]; // Optional list of properties to retrieve
  limits?: ListLimits; // Optional pagination limits
  sort?: ListSort; // Optional sorting options
  filter?: any; // Optional filter criteria
}

/**
 * GetMoviesParams ($ref: "VideoLibrary.GetMovies.Params")
 * Parameters for the GetMovies method.
 */
export interface GetMoviesParams {
  properties?: VideoProperty[]; // Optional list of properties to retrieve
  limits?: ListLimits; // Optional pagination limits
  sort?: ListSort; // Optional sorting options
  filter?: ListFilterMovies; // Optional filter criteria
}

/**
 * GetMusicVideoDetailsParams ($ref: "VideoLibrary.GetMusicVideoDetails.Params")
 * Parameters for the GetMusicVideoDetails method.
 */
export interface GetMusicVideoDetailsParams {
  musicvideoid: MusicVideoId; // ID of the music video to retrieve details for
  properties?: VideoProperty[]; // Optional list of properties to retrieve
}

/**
 * GetTVShowDetailsParams ($ref: "VideoLibrary.GetTVShowDetails.Params")
 * Parameters for the GetTVShowDetails method.
 */
export interface GetTVShowDetailsParams {
  tvshowid: TVShowId; // ID of the TV show to retrieve details for
  properties?: VideoProperty[]; // Optional list of properties to retrieve
}

/**
 * GetVideoDetailsParams ($ref: "VideoLibrary.GetVideoDetails.Params")
 * Parameters for the GetVideoDetails method.
 */
export interface GetVideoDetailsParams {
  videoid: string; // ID of the video to retrieve details for
  properties?: VideoProperty[]; // Optional list of properties to retrieve
}

/**
 * GetAlbumsResponse ($ref: "VideoLibrary.GetAlbums.Response")
 * Response structure for the GetAlbums method.
 */
export interface GetAlbumsResponse {
  albums: MovieDetails[]; // List of retrieved albums
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * GetArtistsResponse ($ref: "VideoLibrary.GetArtists.Response")
 * Response structure for the GetArtists method.
 */
export interface GetArtistsResponse {
  artists: ArtistDetails[]; // List of retrieved artists
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * GetPropertiesResponse ($ref: "VideoLibrary.GetProperties.Response")
 * Response structure for the GetProperties method.
 */
export interface GetPropertiesResponse {
  [key: string]: any; // Dynamic properties based on requested VideoProperty
}

/**
 * GetSongsResponse ($ref: "VideoLibrary.GetSongs.Response")
 * Response structure for the GetSongs method.
 */
export interface GetSongsResponse {
  songs: VideoDetails[]; // List of retrieved songs
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyAddedMoviesResponse ($ref: "VideoLibrary.GetRecentlyAddedMovies.Response")
 * Response structure for the GetRecentlyAddedMovies method.
 */
export interface RecentlyAddedMoviesResponse {
  movies: MovieDetails[]; // List of recently added movies
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyAddedEpisodesResponse ($ref: "VideoLibrary.GetRecentlyAddedEpisodes.Response")
 * Response structure for the GetRecentlyAddedEpisodes method.
 */
export interface RecentlyAddedEpisodesResponse {
  episodes: EpisodeDetails[]; // List of recently added episodes
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyAddedMusicVideosResponse ($ref: "VideoLibrary.GetRecentlyAddedMusicVideos.Response")
 * Response structure for the GetRecentlyAddedMusicVideos method.
 */
export interface RecentlyAddedMusicVideosResponse {
  musicvideos: MusicVideoDetails[]; // List of recently added music videos
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyPlayedMoviesResponse ($ref: "VideoLibrary.GetRecentlyPlayedMovies.Response")
 * Response structure for the GetRecentlyPlayedMovies method.
 */
export interface RecentlyPlayedMoviesResponse {
  movies: MovieDetails[]; // List of recently played movies
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyPlayedEpisodesResponse ($ref: "VideoLibrary.GetRecentlyPlayedEpisodes.Response")
 * Response structure for the GetRecentlyPlayedEpisodes method.
 */
export interface RecentlyPlayedEpisodesResponse {
  episodes: EpisodeDetails[]; // List of recently played episodes
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * RecentlyPlayedMusicVideosResponse ($ref: "VideoLibrary.GetRecentlyPlayedMusicVideos.Response")
 * Response structure for the GetRecentlyPlayedMusicVideos method.
 */
export interface RecentlyPlayedMusicVideosResponse {
  musicvideos: MusicVideoDetails[]; // List of recently played music videos
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * GenresResponse ($ref: "VideoLibrary.GetGenres.Response")
 * Response structure for the GetGenres method.
 */
export interface GenresResponse {
  genres: Genre[]; // List of retrieved genres
}

/**
 * TagsResponse ($ref: "VideoLibrary.GetTags.Response")
 * Response structure for the GetTags method.
 */
export interface TagsResponse {
  tags: Tag[]; // List of retrieved tags
}

/**
 * YearsResponse ($ref: "VideoLibrary.GetYears.Response")
 * Response structure for the GetYears method.
 */
export interface YearsResponse {
  years: Year[]; // List of retrieved years
}

/**
 * SeasonsResponse ($ref: "VideoLibrary.GetSeasons.Response")
 * Response structure for the GetSeasons method.
 */
export interface SeasonsResponse {
  seasons: number[]; // List of retrieved seasons
}

/**
 * TVShowsResponse ($ref: "VideoLibrary.GetTVShows.Response")
 * Response structure for the GetTVShows method.
 */
export interface TVShowsResponse {
  tvshows: TVShowDetails[]; // List of retrieved TV shows
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * MoviesResponse ($ref: "VideoLibrary.GetMovies.Response")
 * Response structure for the GetMovies method.
 */
export interface MoviesResponse {
  movies: MovieDetails[]; // List of retrieved movies
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * EpisodesResponse ($ref: "VideoLibrary.GetEpisodes.Response")
 * Response structure for the GetEpisodes method.
 */
export interface EpisodesResponse {
  episodes: EpisodeDetails[]; // List of retrieved episodes
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * MusicVideosResponse ($ref: "VideoLibrary.GetMusicVideos.Response")
 * Response structure for the GetMusicVideos method.
 */
export interface MusicVideosResponse {
  musicvideos: MusicVideoDetails[]; // List of retrieved music videos
  limits: ListLimitsReturned; // Pagination limits returned by the API
}

/**
 * MovieDetailsResponse ($ref: "VideoLibrary.GetMovieDetails.Response")
 * Response structure for the GetMovieDetails method.
 */
export interface MovieDetailsResponse {
  moviedetails: MovieDetails; // Detailed information of the movie
}

/**
 * EpisodeDetailsResponse ($ref: "VideoLibrary.GetEpisodeDetails.Response")
 * Response structure for the GetEpisodeDetails method.
 */
export interface EpisodeDetailsResponse {
  episodetails: EpisodeDetails; // Detailed information of the episode
}

/**
 * MusicVideoDetailsResponse ($ref: "VideoLibrary.GetMusicVideoDetails.Response")
 * Response structure for the GetMusicVideoDetails method.
 */
export interface MusicVideoDetailsResponse {
  musicvideodetails: MusicVideoDetails; // Detailed information of the music video
}

/**
 * TVShowDetailsResponse ($ref: "VideoLibrary.GetTVShowDetails.Response")
 * Response structure for the GetTVShowDetails method.
 */
export interface TVShowDetailsResponse {
  tvshowdetails: TVShowDetails; // Detailed information of the TV show
}

/**
 * VideoDetailsResponse ($ref: "VideoLibrary.GetVideoDetails.Response")
 * Response structure for the GetVideoDetails method.
 */
export interface VideoDetailsResponse {
  videodetails: VideoDetails; // Detailed information of the video
}
export {
  ListSort,
  ListLimits,
  /**
   * GenreId ($ref: "Library.Id")
   * Represents the unique identifier for a genre.
   */
  ListLimitsReturned,
};
