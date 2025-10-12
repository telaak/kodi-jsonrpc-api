export interface ListSort {
  ignorearticle?: boolean;
  method?: "none" | "label" | "date" | "size" | "file" | "path" | "drivetype" | "title" | "track" | "time" | "artist" | "album" | "albumtype" | "genre" | "country" | "year" | "rating" | "userrating" | "votes" | "top250" | "programcount" | "playlist" | "episode" | "season" | "totalepisodes" | "watchedepisodes" | "tvshowstatus" | "tvshowtitle" | "sorttitle" | "productioncode" | "mpaa" | "studio" | "dateadded" | "lastplayed" | "playcount" | "listeners" | "bitrate" | "random" | "totaldiscs" | "originaldate" | "bpm" | "originaltitle";
  order?: "ascending" | "descending";
  useartistsortname?: boolean;
}