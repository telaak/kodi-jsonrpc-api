/**
 * Shared media-related types used across libraries.
 *
 * Distinction:
 * - Media* types (MediaAudioStream, MediaVideoStream, MediaSubtitleStream, MediaStreamDetails)
 *   describe the library-level stream metadata as defined under `Video.Streams` in kodi.json.
 *   These are used for `streamdetails` returned by library methods and are intentionally
 *   narrower (only contain codec/channel/size/duration/hdr info).
 *
 * - Player* types (PlayerAudioStream, PlayerVideoStream, PlayerSubtitle) describe
 *   playback-level stream information exposed by the Player namespace (for example
 *   `Player.GetProperties`). They include playback-specific fields such as `index`,
 *   `isdefault`, `isoriginal`, `bitrate`, `samplerate` and so on. Keep Player* types
 *   for player-facing APIs and Media* types for library-facing `streamdetails`.
 *
 * This separation keeps the typings accurate for each API surface while allowing
 * shared reuse of common field names when appropriate.
 */

/** CastMember represents either a simple actor name or a rich object as returned by Kodi. */
/**
 * CastMember represents a member of the cast.
 *
 * It can be a simple string (actor name) or an object with optional metadata
 * such as role, order and thumbnail.
 */
export type CastMember =
  | string
  | {
      name?: string;
      role?: string;
      order?: number;
      thumbnail?: string;
    };

/** Contributor entry used in audio/video metadata. */
/**
 * Contributor represents a contribution entry (e.g. writer, director) with an
 * optional role name.
 */
export interface Contributor {
  name?: string;
  role?: string;
}

/** Custom properties map (string->string) used by some items */
/**
 * CustomProperties is a string-to-string map for arbitrary item custom metadata.
 */
export type CustomProperties = { [key: string]: string };

/** Player stream types are referenced from player.ts; keep stream shape here as loose mapping. */
/**
 * MediaStreamDetails represents the set of streams attached to a media item.
 *
 * - `audio` is an array of audio stream descriptions.
 * - `video` is an array of video stream descriptions.
 * - `subtitle` is an array of subtitle stream descriptions.
 */
export interface MediaStreamDetails {
  audio: MediaAudioStream[];
  subtitle: MediaSubtitleStream[];
  video: MediaVideoStream[];
  [key: string]: unknown;
}

/** PlayerAudioStream maps the schema Player.Audio.Stream */
/**
 * PlayerAudioStream describes an audio stream as returned by Player methods.
 *
 * Includes playback-specific fields such as `index`, `isdefault`, `isoriginal` and
 * `samplerate` which are not part of library-level stream metadata.
 */
export interface PlayerAudioStream {
  bitrate: number;
  channels: number;
  codec: string;
  index: number;
  isdefault: boolean;
  isimpaired: boolean;
  isoriginal: boolean;
  language: string;
  name: string;
  samplerate: number;
}

/** PlayerVideoStream maps the schema Player.Video.Stream */
/**
 * PlayerVideoStream describes a video stream as returned by Player methods.
 */
export interface PlayerVideoStream {
  codec: string;
  height: number;
  index: number;
  language: string;
  name: string;
  width: number;
}

/** PlayerSubtitle maps the schema Player.Subtitle */
/**
 * PlayerSubtitle describes a subtitle stream entry returned by Player methods.
 */
export interface PlayerSubtitle {
  index: number;
  isdefault: boolean;
  isforced: boolean;
  isimpaired: boolean;
  language: string;
  name: string;
}

/**
 * MediaAudioStream corresponds to `Video.Streams.audio` items in kodi.json
 */
/**
 * MediaAudioStream corresponds to `Video.Streams.audio` items in kodi.json and
 * represents library-level audio stream metadata.
 */
export interface MediaAudioStream {
  channels: number;
  codec: string;
  language: string;
}

/**
 * MediaSubtitleStream corresponds to `Video.Streams.subtitle` items in kodi.json
 */
/**
 * MediaSubtitleStream corresponds to `Video.Streams.subtitle` items in kodi.json.
 */
export interface MediaSubtitleStream {
  language: string;
}

/**
 * MediaVideoStream corresponds to `Video.Streams.video` items in kodi.json
 */
/**
 * MediaVideoStream corresponds to `Video.Streams.video` items in kodi.json and
 * represents library-level video stream metadata.
 */
export interface MediaVideoStream {
  aspect: number;
  codec: string;
  duration: number;
  hdrtype: string;
  height: number;
  width: number;
}

/** MediaUniqueID maps provider keys to non-empty string IDs per kodi.json */
export type MediaUniqueID = Record<string, string>;

/**
 * VideoResume describes resume position metadata (position and total)
 * as used in various Video.* responses.
 */
export interface VideoResume {
  position: number;
  total: number;
}

/**
 * Art maps art role keys (poster, fanart, thumbnail, etc.) to image URLs.
 */
export type Art = Record<string, string>;
