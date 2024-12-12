// Types and Interfaces Block
// These types and interfaces are specific to the Application methods and do not exist in koditestExports.ts

/**
 * GlobalToggle ($ref: "Global.Toggle")
 * Represents a toggle option, typically a boolean.
 */
export type GlobalToggle = boolean | "toggle";

/**
 * GlobalIncrementDecrement ($ref: "Global.IncrementDecrement")
 * Represents the increment or decrement actions for volume control.
 */
export type GlobalIncrementDecrement = "increment" | "decrement";

/**
 * AddonSource ($ref: "Application.AddonSource")
 * Represents an addon source.
 */
export interface AddonSource {
  addonid: string; // ID of the addon
  name: string; // Name of the source
  path: string; // Path to the source
}

/**
 * AudioOutput ($ref: "Application.AudioOutput")
 * Represents an available audio output.
 */
export interface AudioOutput {
  output: string; // Identifier for the audio output
  description: string; // Description of the audio output
  enabled: boolean; // Whether the audio output is enabled
}

/**
 * SleepTimer ($ref: "Application.SleepTimer")
 * Represents the sleep timer settings.
 */
export interface SleepTimer {
  enabled: boolean; // Whether the sleep timer is enabled
  time: number; // Time in seconds until sleep
}

/**
 * ApplicationPropertyName ($ref: "Application.Property.Name")
 * Represents the names of properties that can be retrieved from the Application namespace.
 */
export type ApplicationPropertyName =
  | "volume"
  | "muted"
  | "name"
  | "version"
  | "sorttokens"
  | "language";

/**
 * ApplicationPropertyValue ($ref: "Application.Property.Value")
 * Represents the values of properties retrieved from the Application namespace.
 */
export interface ApplicationPropertyValue {
  volume: number; // Current volume level (0-100)
  muted: boolean; // Mute state
  fullscreen: boolean; // Fullscreen state
  running: boolean; // Whether Kodi is running
  hasUpdate: boolean; // Whether an update is available
  version: string; // Kodi version
  build: string; // Build information
  osdvisible: boolean; // On-screen display visibility
  languagedir: string; // Directory for language files
  addonSources: AddonSource[]; // List of addon sources
  audioOutputs: AudioOutput[]; // Available audio outputs
  currentAddon: string; // Currently executing addon
  sleepTimer: SleepTimer; // Sleep timer settings
}

/**
 * SetMuteParams ($ref: "Application.SetMute.Params")
 * Parameters for the SetMute method.
 */
export interface SetMuteParams {
  mute: GlobalToggle; // Mute state to set
}

/**
 * SetVolumeParams ($ref: "Application.SetVolume.Params")
 * Parameters for the SetVolume method.
 */
export interface SetVolumeParams {
  volume: number | GlobalIncrementDecrement; // Volume level to set (0-100) or 'increase'/'decrease'
}
