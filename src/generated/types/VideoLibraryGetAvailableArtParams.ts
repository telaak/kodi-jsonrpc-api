import { LibraryId } from './LibraryId';
import { VideoLibraryGetAvailableArtParamsItemOption0 } from './VideoLibraryGetAvailableArtParamsItemOption0';
import { VideoLibraryGetAvailableArtParamsItemOption1 } from './VideoLibraryGetAvailableArtParamsItemOption1';
import { VideoLibraryGetAvailableArtParamsItemOption2 } from './VideoLibraryGetAvailableArtParamsItemOption2';
import { VideoLibraryGetAvailableArtParamsItemOption3 } from './VideoLibraryGetAvailableArtParamsItemOption3';
import { VideoLibraryGetAvailableArtParamsItemOption4 } from './VideoLibraryGetAvailableArtParamsItemOption4';
import { VideoLibraryGetAvailableArtParamsItemOption5 } from './VideoLibraryGetAvailableArtParamsItemOption5';

export interface VideoLibraryGetAvailableArtParams {
  item: VideoLibraryGetAvailableArtParamsItemOption0 | VideoLibraryGetAvailableArtParamsItemOption1 | VideoLibraryGetAvailableArtParamsItemOption2 | VideoLibraryGetAvailableArtParamsItemOption3 | VideoLibraryGetAvailableArtParamsItemOption4 | VideoLibraryGetAvailableArtParamsItemOption5;
  arttype?: string;
}