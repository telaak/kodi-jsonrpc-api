import axios, { AxiosBasicCredentials, AxiosInstance } from "axios";
import { v4 as uuidv4 } from "uuid";
import { KodiAddonsNamespace } from "./namespaces/addons";
import { KodiApplicationNamespace } from "./namespaces/application";
import { KodiFavouritesNamespace } from "./namespaces/favourites";
import { KodiFilesNamespace } from "./namespaces/files";
import { KodiGUINamespace } from "./namespaces/gui";
import { KodiXBMCNamespace } from "./namespaces/xbmc";
import { KodiTexturesNamespace } from "./namespaces/textures";
import { KodiSystemNamespace } from "./namespaces/system";
import { KodiSettingsNamespace } from "./namespaces/settings";
import { KodiProfilesNamespace } from "./namespaces/profiles";
import { KodiPlaylistNamespace } from "./namespaces/playlist";
import { KodiPlayerNamespace } from "./namespaces/player";
import { KodiInputNamespace } from "./namespaces/input";
import { KodiJSONRPCNamespace } from "./namespaces/jsonrpc";
import { KodiAudioLibraryNamespace } from "./namespaces/audiolibrary";
import { KodiPVRNamespace } from "./namespaces/pvr";
import { KodiVideoLibraryNamespace } from "./namespaces/videolibrary";
export type ISendMessage = (method: string, params: any) => Promise<any>;

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
  abstract sendMessage<T>(method: string, args: object): Promise<T>;
}

export class HttpKodiClient extends BaseKodiClient {
  public url: string;
  public axiosInstance: AxiosInstance;

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

  constructor(url: string, auth?: AxiosBasicCredentials) {
    super();
    const axiosInstance = axios.create({ auth });
    this.url = url;
    this.axiosInstance = axiosInstance;
    this.init(this.sendMessage);
  }
}

export class WebsocketKodiClient extends BaseKodiClient {
  public url: string;
  public webSocket: WebSocket;
  public isOpen: boolean;

  sendMessage: ISendMessage = (method, params) => {
    return new Promise(async (resolve, reject) => {
      if (!this.isOpen) await this.waitForSocketOpen(5000);
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

  constructor(url: string) {
    super();

    const webSocket = new WebSocket(url);
    this.url = url;
    this.webSocket = webSocket;
    this.isOpen = false;

    this.webSocket.addEventListener("open", () => {
      this.isOpen = true;
    });

    this.webSocket.addEventListener("close", () => {
      this.isOpen = false;
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
          reject(new Error(`Socket did not open within ${timeout}ms`));
        } else {
          elapsed += interval;
          setTimeout(check, interval);
        }
      };

      check();
    });
  }
}
