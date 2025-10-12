export interface GUIShowNotificationParams {
  title: string;
  message: string;
  image?: "info" | "warning" | "error" | string;
  displaytime?: number;
}