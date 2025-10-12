import { AudioDetailsBase } from './AudioDetailsBase';
import { LibraryId } from './LibraryId';
import { ArrayString } from './ArrayString';
import { AudioArtistRoles } from './AudioArtistRoles';
import { AudioDetailsGenres } from './AudioDetailsGenres';
import { ArrayInteger } from './ArrayInteger';

export interface AudioDetailsArtist extends AudioDetailsBase {
  artist: string;
  artistid: LibraryId;
  born?: string;
  compilationartist?: boolean;
  description?: string;
  died?: string;
  disambiguation?: string;
  disbanded?: string;
  formed?: string;
  gender?: string;
  instrument?: ArrayString;
  isalbumartist?: boolean;
  mood?: ArrayString;
  musicbrainzartistid?: ArrayString;
  roles?: AudioArtistRoles;
  songgenres?: AudioDetailsGenres;
  sortname?: string;
  sourceid?: ArrayInteger;
  style?: ArrayString;
  type?: string;
  yearsactive?: ArrayString;
}