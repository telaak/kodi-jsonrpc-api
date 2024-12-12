// Types and Interfaces Block
// These types and interfaces are specific to the XBMC methods and do not exist in koditestExports.ts

/**
 * GetInfoBooleansResponse
 * Represents the response from XBMC.GetInfoBooleans method.
 * It contains key-value pairs where the key is the info boolean name and the value is its boolean state.
 */
export interface GetInfoBooleansResponse {
  [key: string]: boolean;
}

/**
 * GetInfoLabelsResponse
 * Represents the response from XBMC.GetInfoLabels method.
 * It contains key-value pairs where the key is the info label name and the value is its string value.
 */
export interface GetInfoLabelsResponse {
  [key: string]: string;
}
