import { LibraryId } from './LibraryId';

export interface AudioContributorsItem {
  artistid: LibraryId;
  name: string;
  role: string;
  roleid: LibraryId;
}