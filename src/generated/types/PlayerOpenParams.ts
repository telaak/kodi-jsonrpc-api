import { PlaylistId } from './PlaylistId';
import { PlaylistPosition } from './PlaylistPosition';
import { PlaylistItem } from './PlaylistItem';
import { LibraryId } from './LibraryId';
import { PlayerRepeat } from './PlayerRepeat';
import { PlayerPositionPercentage } from './PlayerPositionPercentage';
import { PlayerPositionTime } from './PlayerPositionTime';
import { OptionalBoolean } from './OptionalBoolean';
import { PlayerOpenParamsOptions } from './PlayerOpenParamsOptions';
import { PlayerOpenParamsItemOption0 } from './PlayerOpenParamsItemOption0';
import { PlayerOpenParamsItemOption2 } from './PlayerOpenParamsItemOption2';
import { PlayerOpenParamsItemOption3 } from './PlayerOpenParamsItemOption3';
import { PlayerOpenParamsItemOption4 } from './PlayerOpenParamsItemOption4';
import { PlayerOpenParamsItemOption5 } from './PlayerOpenParamsItemOption5';
import { PlayerOpenParamsItemOption6 } from './PlayerOpenParamsItemOption6';

export interface PlayerOpenParams {
  item?: PlayerOpenParamsItemOption0 | PlaylistItem | PlayerOpenParamsItemOption2 | PlayerOpenParamsItemOption3 | PlayerOpenParamsItemOption4 | PlayerOpenParamsItemOption5 | PlayerOpenParamsItemOption6;
  options?: PlayerOpenParamsOptions;
}