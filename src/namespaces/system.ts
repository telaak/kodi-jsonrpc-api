import { ISendMessage } from "..";

export class KodiSystemNamespace {
  private sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  // =====================
  // System Namespace Methods
  // =====================

  /**
   * Ejects the specified optical drive.
   *
   * @param drive - Optional identifier of the optical drive to eject.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async EjectOpticalDrive(drive?: string): Promise<EjectOpticalDriveResponse> {
    const params: EjectOpticalDriveParams = { drive };
    return this.sendMessage("System.EjectOpticalDrive", params);
  }

  /**
   * Retrieves the specified system properties.
   *
   * @param properties - An array of property names to retrieve.
   * @returns A promise that resolves to an object containing the requested properties and their values.
   */
  async GetProperties(
    properties: SystemPropertyName[]
  ): Promise<GetPropertiesResponse> {
    const params: GetPropertiesParams = { properties };
    return this.sendMessage("System.GetProperties", params);
  }

  /**
   * Puts the system into hibernation mode.
   *
   * @returns A promise that resolves to a confirmation string upon successful initiation.
   */
  async Hibernate(): Promise<string> {
    return this.sendMessage("System.Hibernate", {});
  }

  /**
   * Reboots the system.
   *
   * @returns A promise that resolves to a confirmation string upon successful initiation.
   */
  async Reboot(): Promise<string> {
    return this.sendMessage("System.Reboot", {});
  }

  /**
   * Shuts down the system.
   *
   * @param delay - Optional delay in seconds before shutdown is initiated.
   * @returns A promise that resolves to an object indicating success and a message.
   */
  async Shutdown(delay?: number): Promise<ShutdownResponse> {
    const params: ShutdownParams = { delay };
    return this.sendMessage("System.Shutdown", params);
  }

  /**
   * Suspends the system.
   *
   * @returns A promise that resolves to a confirmation string upon successful initiation.
   */
  async Suspend(): Promise<string> {
    return this.sendMessage("System.Suspend", {});
  }
}

// =====================
// Type Definitions
// =====================

/**
 * Represents the available system properties that can be retrieved.
 */
type SystemPropertyName =
  | "version"
  | "name"
  | "uptime"
  | "build"
  | "path"
  | "volume"
  | "muted"
  | "fullscreen"
  | "loglevel"
  | "time";

/**
 * Represents the parameters for GetProperties.
 */
interface GetPropertiesParams {
  properties: SystemPropertyName[];
}

/**
 * Represents the response structure for GetProperties.
 */
type GetPropertiesResponse = {
  [key in SystemPropertyName]: string | number | boolean;
};

/**
 * Represents the parameters for EjectOpticalDrive.
 */
interface EjectOpticalDriveParams {
  drive?: string;
}

/**
 * Represents the response structure for EjectOpticalDrive.
 */
interface EjectOpticalDriveResponse {
  success: boolean;
  message: string;
}

/**
 * Represents the parameters for Shutdown.
 */
interface ShutdownParams {
  delay?: number; // in seconds
}

/**
 * Represents the response structure for Shutdown.
 */
interface ShutdownResponse {
  success: boolean;
  message: string;
}
