import { LibraryId } from './LibraryId';
import { AudioLibraryGetAvailableArtParamsItemOption0 } from './AudioLibraryGetAvailableArtParamsItemOption0';
import { AudioLibraryGetAvailableArtParamsItemOption1 } from './AudioLibraryGetAvailableArtParamsItemOption1';

export interface AudioLibraryGetAvailableArtParams {
  item: AudioLibraryGetAvailableArtParamsItemOption0 | AudioLibraryGetAvailableArtParamsItemOption1;
  arttype?: string;
}