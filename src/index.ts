import axios, { AxiosBasicCredentials, AxiosInstance } from "axios";
import { v4 as uuidv4 } from "uuid";
import { WebSocket } from "partysocket";
import EventEmitter from "events";

import { KodiAddonsNamespace } from "./generated/namespaces/addons";
import { KodiApplicationNamespace } from "./generated/namespaces/application";
import { KodiFavouritesNamespace } from "./generated/namespaces/favourites";
import { KodiFilesNamespace } from "./generated/namespaces/files";
import { KodiGUINamespace } from "./generated/namespaces/gui";
import { KodiXBMCNamespace } from "./generated/namespaces/xbmc";
import { KodiTexturesNamespace } from "./generated/namespaces/textures";
import { KodiSystemNamespace } from "./generated/namespaces/system";
import { KodiSettingsNamespace } from "./generated/namespaces/settings";
import { KodiProfilesNamespace } from "./generated/namespaces/profiles";
import { KodiPlaylistNamespace } from "./generated/namespaces/playlist";
import { KodiPlayerNamespace } from "./generated/namespaces/player";
import { KodiInputNamespace } from "./generated/namespaces/input";
import { KodiJSONRPCNamespace } from "./generated/namespaces/jsonrpc";
import { KodiAudioLibraryNamespace } from "./generated/namespaces/audiolibrary";
import { KodiPVRNamespace } from "./generated/namespaces/pvr";
import { KodiVideoLibraryNamespace } from "./generated/namespaces/videolibrary";
export type ISendMessage = <T = any>(method: string, params: any) => Promise<T>;
export type KodiWebsocketMessage = {
  jsonrpc: string;
  method: string;
  params: {
    data: any;
  };
  sender: string;
};

abstract class BaseKodiClient {
  public Addons!: KodiAddonsNamespace;
  public Application!: KodiApplicationNamespace;
  public AudioLibrary!: KodiAudioLibraryNamespace;
  public Favourites!: KodiFavouritesNamespace;
  public Files!: KodiFilesNamespace;
  public GUI!: KodiGUINamespace;
  public Input!: KodiInputNamespace;
  public JSONRPC!: KodiJSONRPCNamespace;
  public PVR!: KodiPVRNamespace;
  public Player!: KodiPlayerNamespace;
  public Playlist!: KodiPlaylistNamespace;
  public Profiles!: KodiProfilesNamespace;
  public Settings!: KodiSettingsNamespace;
  public System!: KodiSystemNamespace;
  public Textures!: KodiTexturesNamespace;
  public VideoLibrary!: KodiVideoLibraryNamespace;
  public XBMC!: KodiXBMCNamespace;

  /**
   * Initializing all namespaces
   * MAKE SURE THIS IS CALLED IF YOU'RE EXTENDING THE BaseKodiClient class
   * @param sendMessage the function used to communicate with Kodi
   */

  init(sendMessage: ISendMessage) {
    this.Addons = new KodiAddonsNamespace(sendMessage);
    this.Application = new KodiApplicationNamespace(sendMessage);
    this.AudioLibrary = new KodiAudioLibraryNamespace(sendMessage);
    this.Favourites = new KodiFavouritesNamespace(sendMessage);
    this.Files = new KodiFilesNamespace(sendMessage);
    this.GUI = new KodiGUINamespace(sendMessage);
    this.Input = new KodiInputNamespace(sendMessage);
    this.JSONRPC = new KodiJSONRPCNamespace(sendMessage);
    this.PVR = new KodiPVRNamespace(sendMessage);
    this.Player = new KodiPlayerNamespace(sendMessage);
    this.Playlist = new KodiPlaylistNamespace(sendMessage);
    this.Profiles = new KodiProfilesNamespace(sendMessage);
    this.Settings = new KodiSettingsNamespace(sendMessage);
    this.System = new KodiSystemNamespace(sendMessage);
    this.Textures = new KodiTexturesNamespace(sendMessage);
    this.VideoLibrary = new KodiVideoLibraryNamespace(sendMessage);
    this.XBMC = new KodiXBMCNamespace(sendMessage);
  }

  /**
   * Abstract method to send a message to the Kodi JSON-RPC API.
   * @param method - The name of the method to invoke.
   * @param args - The arguments to pass to the method.
   * @returns A promise resolving with the result of the API call.
   */
  abstract sendMessage<T = any>(method: string, args: object): Promise<T>;
}

export class HttpKodiClient extends BaseKodiClient {
  public url: string;
  public axiosInstance: AxiosInstance;

  /**
   * The sendMessage method, the actual JSON sent to Kodi
   * @param method name of the method e.g. "Addons.ExecuteAddon"
   * @param params string, number, object, array, whatever the method accepts
   * @returns Promise containing the result, or rejects with an error
   */

  sendMessage: ISendMessage = async (method, params) => {
    return new Promise(async (resolve, reject) => {
      const request = await this.axiosInstance.post(this.url, {
        id: uuidv4(),
        jsonrpc: "2.0",
        method,
        params,
      });
      if (request.data.result) resolve(request.data.result);
      if (request.data.error) reject(request.data.error);
      setTimeout(() => {
        reject("Timeout");
      }, 5000);
    });
  };

  /**
   * Constructor for the HTTP client
   * Uses Axios for communication
   * @param url full url to the endpoint e.g. "http://192.168.0.124:8080/jsonrpc"
   * @param auth object containing the username and password
   */

  constructor(url: string, auth?: AxiosBasicCredentials) {
    super();
    const axiosInstance = axios.create({ auth });
    this.url = url;
    this.axiosInstance = axiosInstance;
    this.init(this.sendMessage);
  }
}

/**
 * WebSocket client for communicating with Kodi
 * Currently does not handle reconnecting or disconnects
 */

export class WebsocketKodiClient extends BaseKodiClient {
  public url: string;
  public webSocket: WebSocket;
  public isOpen: boolean;
  public events: EventEmitter;

  /**
   * The sendMessage method, the actual JSON sent to Kodi
   * @param method name of the method e.g. "Addons.ExecuteAddon"
   * @param params string, number, object, array, whatever the method accepts
   * @returns Promise containing the result, or rejects with an error
   */

  sendMessage: ISendMessage = (method, params) => {
    return new Promise(async (resolve, reject) => {
      if (!this.isOpen) {
        try {
          await this.waitForSocketOpen(5000);
        } catch (error) {
          return reject(error);
        }
      }
      const id = uuidv4();
      const listener = (event: MessageEvent) => {
        try {
          const json = JSON.parse(event.data.toString());
          if (json.id && json.id === id) {
            this.webSocket.removeEventListener("message", listener);
            if (json.result) resolve(json.result);
            if (json.error) reject(json.error);
          }
        } catch (error) {
          reject(error);
        }
      };

      this.webSocket.addEventListener("message", listener);
      this.webSocket.send(
        JSON.stringify({
          id,
          jsonrpc: "2.0",
          method,
          params,
        })
      );
    });
  };

  /**
   * Sets all the event listeners and properties
   * @param url full url for the WebSocket connection e.g. "ws://192.168.0.124:9090"
   */

  constructor(url: string) {
    super();

    const webSocket = new WebSocket(url);
    this.url = url;
    this.webSocket = webSocket;
    this.isOpen = false;
    this.events = new EventEmitter();

    this.webSocket.addEventListener("open", () => {
      this.isOpen = true;
      this.events.emit("open");
    });

    this.webSocket.addEventListener("close", () => {
      this.isOpen = false;
      this.events.emit("close");
    });

    this.webSocket.addEventListener("error", (err: any) => {
      this.events.emit("error", err);
    });

    // Re-emit raw message and also parsed JSON and JSON-RPC notifications
    this.webSocket.addEventListener("message", (event: MessageEvent) => {
      this.events.emit("message", event);
      try {
        const json = JSON.parse(event.data.toString());
        this.events.emit("json", json as KodiWebsocketMessage);

        // JSON-RPC notification (no id)
        if (!json.id && json.method) {
          this.events.emit("notification", json);
        }
      } catch (e) {
        // non-JSON payload, ignore parse error but still emit
      }
    });

    this.init(this.sendMessage);
  }

  /**
   * Waits until `this.isOpen` is true, or rejects if the timeout is reached.
   *
   * @param timeout - The maximum time to wait in milliseconds.
   * @returns A promise that resolves when `this.isOpen` is true, or rejects if the timeout is exceeded.
   */
  private async waitForSocketOpen(timeout: number): Promise<void> {
    const interval = 1; // Check every 1ms
    let elapsed = 0;

    return new Promise((resolve, reject) => {
      const check = () => {
        if (this.isOpen) {
          resolve();
        } else if (elapsed >= timeout) {
          reject(`Socket did not open within ${timeout}ms`);
        } else {
          elapsed += interval;
          setTimeout(check, interval);
        }
      };

      check();
    });
  }
}
