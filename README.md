# kodi-jsonrpc-api

TypeScript methods to access Kodi's JSONRPC API, with HTTP and WebSocket implementations, based on the most recent "Omega" JSON-RPC implementation

## About the project

Firstly: a good chunk of the types and interfaces are ChatGPT generated. As I personally use Jellyfin to manage my libraries, I have not tested the AudioLibrary, VideoLibrary, PVR methods at all. Assume many of the types could be wrong. PRs welcome, and feel free to fork or do whatever.

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

### Example

```TypeScript
/**
 * Some examples of requests, using the ExecuteAddon method to search
 * for media using Kodi's global search addon. You can either provide the
 * parameters inside an object, or as a string "searchstring=star wars"
 *
 * Second example of getting the current skin, and the current window
 * result objects are not all properly typed (neither are the request objects)
 * this entire thing is heavily WIP
 */

async function test() {
  try {
    const websocketCall = await websocketClient.Addons.ExecuteAddon(
      "script.globalsearch",
      {
        searchstring: "star wars",
      }
    );
    console.log(websocketCall);

    const httpCall = await httpClient.GUI.GetProperties([
      "skin",
      "currentwindow",
    ]);
    console.log(httpCall);
  } catch (error) {
    console.log(error);
  }
}

test();
```

## Documentation


[TypeDoc](https://telaak.github.io/kodi-jsonrpc-api/)

## Addons helpers (typed properties)

This project exposes typed helper factories for Addons properties so you can
construct readonly tuples that preserve literal types — useful when calling
the `GetAddons` / `GetAddonDetails` overloads which accept readonly tuples
and return narrowed response types.

Example usage:

```ts
import { KodiAddonsNamespace } from "kodi-jsonrpc-api/src/namespaces/addons";
import { makeAddonFields, addonFields } from "kodi-jsonrpc-api/src/types/addons";

const kodi = new KodiAddonsNamespace(sendMessageImpl);

// Narrow inference without `as const`
const props = makeAddonFields("name", "version", "installed");

// Or pick from the exported const (slice returns string[] so cast)
const common = makeAddonFields(...(addonFields.slice(0, 3) as any));

// Call the namespace method using the readonly tuple — response properties are narrowed
const resp = await kodi.GetAddons(undefined, undefined, "all", props);
console.log(resp.addons[0].name); // typed when 'name' included in props
```

The helpers are:
- `addonFields` — readonly const array of all available Addon fields.
- `makeAddonFields(...p)` — factory that returns a readonly tuple preserving literal types.
- `asAddonFields` — alias for `makeAddonFields`.


## License

```
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