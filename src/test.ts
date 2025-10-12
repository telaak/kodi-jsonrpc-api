import { WebsocketKodiClient } from ".";

const kodi = new WebsocketKodiClient("ws://192.168.0.28:9090/jsonrpc");

async function test() {
  const json = await kodi.JSONRPC.Version();
  console.log(json);
}

test();
