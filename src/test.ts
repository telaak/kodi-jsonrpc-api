import { WebsocketKodiClient } from ".";

const kodi = new WebsocketKodiClient("ws://192.168.0.28:9090/jsonrpc");

async function test() {
  try {
    // Player properties
    const properties = await kodi.Player.GetProperties({
      playerid: 1,
      properties: ["audiostreams", "currentaudiostream"] as const,
    });
    console.log("Player.audioStreams:", properties.audiostreams?.length);

    // Playlist items (narrowing with as const)
    const playlistItems = await kodi.Playlist.GetItems({
      playlistid: 0,
      properties: ["title", "file"] as const,
    });
    console.log(
      "Playlist items count:",
      Array.isArray(playlistItems) ? playlistItems.length : "n/a"
    );

    // Files: list sources
    const sources = await kodi.Files.GetSources({
      media: "video",
    });
    console.log(
      "Files sources:",
      sources.sources?.map((s) => s.file)
    );

    // Video library: get recently added movies (read-only)
    const recentMovies = await kodi.VideoLibrary.GetRecentlyAddedMovies({
      properties: ["title", "year"] as const,
      limits: { start: 0, end: 5 },
    });
    console.log("Recent movies count:", recentMovies.movies?.length);

    // Application properties
    const appProps = await kodi.Application.GetProperties({
      properties: ["version", "name"] as const,
    });
    console.log(
      "App version:",
      appProps.version?.major,
      appProps.version?.minor
    );

    // System properties
    const sysProps = await kodi.System.GetProperties({
      properties: ["canshutdown"] as const,
    });
    console.log("System canShutdown:", sysProps.canshutdown);

    // JSONRPC introspect (read-only)
    const introspect = await kodi.JSONRPC.Introspect({
      filter: { id: "Player.GetProperties", type: "method" as const },
    });
    console.log("Introspect has methods:", !!introspect);

    // Addons: list addons (read-only)
    const addons = await kodi.Addons.GetAddons({ type: "xbmc.addon.video" });
    console.log("Addons count:", addons.addons?.length ?? 0);

    // AudioLibrary: get genres
    const genres = await kodi.AudioLibrary.GetGenres({
      limits: { start: 0, end: 10 },
    });
    console.log("Audio genres:", genres.genres?.length);

    // Favourites
    const favs = await kodi.Favourites.GetFavourites({});
    console.log("Favourites count:", favs.favourites?.length);

    // GUI properties
    const gui = await kodi.GUI.GetProperties({
      properties: ["skin", "currentwindow"] as const,
    });
    console.log("GUI skin id:", gui.skin?.id);

    // PVR: get channels (if PVR enabled on target)
    try {
      const channels = await kodi.PVR.GetChannels({ channelgroupid: 0 });
      console.log("PVR channels:", channels.channels?.length);
    } catch (e) {
      // ignore if PVR not available
    }

    // Profiles
    const profiles = await kodi.Profiles.GetProfiles({});
    console.log("Profiles count:", profiles.profiles?.length);

    // Settings: get categories (read-only)
    const categories = await kodi.Settings.GetCategories({});
    console.log("Settings categories:", categories.categories?.length);

    // Textures: list textures
    const textures = await kodi.Textures.GetTextures({
      properties: ["url", "sizes"] as const,
    });
    console.log("Textures count:", textures.textures?.length);
    // XBMC getters
    const infoLabels = await kodi.XBMC.GetInfoLabels({
      labels: ["System.Name", "VideoPlayer.Title"],
    });
    console.log("Info labels returned:", Object.keys(infoLabels));

    const infoBooleans = await kodi.Application.GetProperties({
      properties: ["muted", "version", "name", "language"] as const,
    });
    console.log("App info booleans:", infoBooleans);
  } catch (err) {
    console.error("Test failed:", err);
  }
}

test();
