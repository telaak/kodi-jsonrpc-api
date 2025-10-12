import { OptionalBoolean } from './OptionalBoolean';
import { OptionalNumber } from './OptionalNumber';

export interface PlayerCustomViewMode {
  nonlinearstretch?: "increase" | "decrease" | OptionalBoolean;
  pixelratio?: "increase" | "decrease" | OptionalNumber;
  verticalshift?: "increase" | "decrease" | OptionalNumber;
  zoom?: "increase" | "decrease" | OptionalNumber;
}