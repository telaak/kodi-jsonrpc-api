import { ListItemBase } from './ListItemBase';

export interface ListItemFile extends ListItemBase {
  file: string;
  filetype: "file" | "directory";
  lastmodified?: string;
  mimetype?: string;
  size?: number;
}