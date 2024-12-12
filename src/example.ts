import { HttpKodiClient, WebsocketKodiClient } from ".";

/**
 * Example HTTP client that uses HTTP POST requests to communicate with Kodi
 * @param url full URL to the JSON-RPC endpoint
 * @param credentials object containing the username and password, Kodi wouldn't
 * let me use the HTTP interface without setting up credentials
 */

const httpClient = new HttpKodiClient("http://192.168.0.124:8080/jsonrpc", {
  username: "some",
  password: "thing",
});

/**
 * Example WebSocket client to communicate with Kodi
 * @param url full URL to the WebSocket interface
 */

const websocketClient = new WebsocketKodiClient("ws://192.168.0.124:9090");

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
