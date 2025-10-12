# kodi-jsonrpc-api

TypeScript methods to access Kodi's JSONRPC API, with HTTP and WebSocket implementations, based on the most recent "Omega" (13.5) JSON-RPC implementation

## About the project

Kodi comes with a great set of tools for controlling it remotely, and as I personally prefer TypeScript to Python, I decided to create this.

As I personally use Jellyfin to manage my libraries, I have not tested the AudioLibrary, VideoLibrary, PVR methods at all. Assume many of the types could be wrong. PRs welcome, and feel free to fork or do whatever.

This project was extracted from my personal mediacenter control implementation and therefore I have only fine tuned and tested the methods I personally use.

## Installation

`npm i kodi-jsonrpc-api`

## Usage

Import the client you wish to use:

```TypeScript
import { HttpKodiClient } from "kodi-jsonrpc-api";

/**
* Example HTTP client that uses HTTP POST requests to communicate with Kodi
* @param url full URL to the JSON-RPC endpoint
* @param credentials object containing the username and password, Kodi
* wouldn't let me use the HTTP interface without setting up credentials
*/

const httpClient = new HttpKodiClient("http://192.168.0.124:8080/jsonrpc", {
 username: "some",
 password: "thing",
});
```

OR

```TypeScript
import { WebsocketKodiClient } from "kodi-jsonrpc-api";

/**
 * Example WebSocket client to communicate with Kodi
 * waits for the socket to open with a timeout
 * @param url full URL to the WebSocket interface
 */

const websocketClient = new WebsocketKodiClient("ws://192.168.0.124:9090");
```

### Simple examples

```TypeScript

// Use Kodi's global search addon to search for something

kodiClient.Addons.ExecuteAddon({
  addonid: "script.globalsearch",
  params: { searchstring: "star wars" },
});

// execute actions, the full list can be found on Kodi's wiki
// https://kodi.wiki/view/Action_IDs

kodiClient.Input.ExecuteAction({ action: "playpause" });

// play a file from the local filesystem or smb/nfs etc

kodiClient.Player.Open({
  item: { file: "/some/file/somewhere" },
});

// seek forward or backwards in time, supports multiple formats
// useful when changing subtitles, seek backwards to force them to change faster

kodiClient.Player.Seek({
  // default playerid is 1
  playerid: 1,
  // just enough to skip through anime OP/ED
  value: { seconds: 90 },
});

```

### Advanced examples (using the WebSocket)

```TypeScript

const kodiClient = new WebsocketKodiClient("ws://192.168.0.28:9090/jsonrpc");

kodiClient.on("json", async (msg) => {
  try {
    // after playback starts
    if (msg.method === "Player.OnAVStart") {
      await signsAndSongsCheck();
      await HDRCheck();
    }
  } catch (error) {
    console.error(error);
  }
});

/**
 * HDRCheck
 *
 * Checks the currently running stream (right after playback starts
 * If the videostream's hdrtype is anything other than blank, assume it's HDR
 * Switch to a more greyish colored subtitles so it won't burn your eyes out
 * On SDR content, switch back to white subtitles
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
   * The majority of dual language anime releases set english as the default
   * This means that there are multiple english tracks, we don't want the default
   * Searches through english subtitles for the first one that's not signs and/or songs
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
```

### Generating the types and functions

If you wish to use a different source (currently JSON-RPC 13.5 from Kodi Omega), replace the `kodi.json` file and run the generator:

- [`src/kodi.json`](src/kodi.json) — the JSON-RPC spec used by the generator
- [`src/generator.ts`](src/generator.ts) — generator that converts the spec into typed TypeScript

## Documentation

[TypeDoc](https://telaak.github.io/kodi-jsonrpc-api/)

## License

MIT License

Copyright (c) 2024 Teemu L.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

```
