import { HttpKodiClient, WebsocketKodiClient } from ".";

const httpClient = new HttpKodiClient("http://192.168.0.124:8080/jsonrpc", {
  username: "some",
  password: "thing",
});

const websocketClient = new WebsocketKodiClient("ws://192.168.0.124:9090");

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
