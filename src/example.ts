import { WebsocketKodiClient } from ".";

const kodiClient = new WebsocketKodiClient("ws://192.168.0.28:9090/jsonrpc");

kodiClient.events.on("json", async (event) => {
  try {
    if (event.method === "Player.OnAVStart") {
      signsAndSongsCheck();
      HDRCheck();
    }
  } catch (error) {
    console.error(error);
  }
});

/**
 * HDRCheck
 *
 * Checks the currently playing item's video stream details to determine if the
 * display/content is using HDR. When HDR content is detected we reduce the
 * subtitle color brightness to avoid overly bright subtitles that can be
 * uncomfortable or hard to read on HDR displays. When no HDR is detected we
 * set a slightly dimmer (greyish) subtitle color.
 *
 * This function is read-only with respect to playback state (it only reads
 * player item properties) but it does update a global subtitle setting using
 * `Settings.SetSettingValue` to pick an appropriate subtitle color.
 */
async function HDRCheck() {
  try {
    const properties = await kodiClient.Player.GetItem({
      playerid: 1,
      properties: ["streamdetails"] as const,
    });

    const streamdetails = properties.streamdetails;
    if (
      !streamdetails ||
      !streamdetails.video ||
      streamdetails.video.length === 0
    )
      return;

    const videoStream = streamdetails.video[0];

    if (videoStream) {
      // If HDR is present, use a dimmer (greyish) subtitle color to avoid
      // overly bright subtitles on HDR displays. Otherwise use a brighter
      // white subtitle color for SDR content.
      if (videoStream.hdrtype) {
        const greyish = "FF757575";
        console.log(`setting subtitle color to ${greyish} (HDR detected)`);
        await kodiClient.Settings.SetSettingValue({
          setting: "subtitles.colorpick",
          value: greyish,
        });
      } else {
        const white = "FFFFFFFF";
        console.log(`setting subtitle color to ${white} (no HDR)`);
        await kodiClient.Settings.SetSettingValue({
          setting: "subtitles.colorpick",
          value: white,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function signsAndSongsCheck() {
  /**
   * signsAndSongsCheck
   *
   * Some dual-language anime releases ship with the English dub enabled by
   * default but include two subtitle tracks: one for full dialogue and one for
   * non-dialogue signs & songs overlays. This helper checks the currently active
   * subtitle and, when it looks like a signs-and-songs-only track is active,
   * switches to an English dialogue subtitle track if available.
   *
   * The function queries `Player.GetProperties` for `currentsubtitle` and the
   * available `subtitles`, finds an English subtitle track that is not a
   * signs-and-songs overlay and switches to it via `Player.SetSubtitle`. It
   * also seeks back slightly to ensure subtitle timing matches after the switch.
   */
  try {
    const properties = await kodiClient.Player.GetProperties({
      playerid: 1,
      properties: ["currentsubtitle", "subtitles"] as const,
    });

    const subtitles = properties.subtitles;
    const currentsubtitle = properties.currentsubtitle;

    if (
      !currentsubtitle ||
      !currentsubtitle.name ||
      !subtitles ||
      subtitles.length === 0
    )
      return;

    if (isSignsAndSongs(currentsubtitle.name)) {
      const engSub = subtitles.find(
        (s) => s.language === "eng" && !isSignsAndSongs(s.name)
      );

      if (engSub && currentsubtitle.index !== engSub.index) {
        console.log(`setting subtitles to ${engSub.name}`);
        await kodiClient.Player.SetSubtitle({
          playerid: 1,
          subtitle: engSub.index,
          enable: true,
        });
        await kodiClient.Player.Seek({
          playerid: 1,
          value: {
            seconds: -10,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function isSignsAndSongs(name: string) {
  const lowercaseName = name.toLowerCase();
  return lowercaseName.includes("sign") || lowercaseName.includes("song");
}
