import { IStorageService } from "@Core/services/browser/StorageService/StorageService";
import { IConfig } from "@Config";

class _RequestService {
  constructor(private _storageService: IStorageService, private _config: IConfig) {}

  private async _perform(url: string, data?: any, settings?: RequestInit) {
    const { BASE_URL } = this._config.API;

    const headers: { [key: string]: string } = {
      "Content-Type": "application/json; charset=utf-8",
    };

    const token = this._storageService.getToken();

    if (token) headers["custom-auth-token"] = token;

    const request = await fetch(BASE_URL + url, {
      ...settings,
      body: JSON.stringify(data),
      headers,
    });

    return request.json();
  }

  /**
   * Search params кидать сразу в path
   */
  protected async get<Response>(path: string): Promise<Response> {
    return this._perform(path);
  }

  protected async post<Response, Payload>(path: string, payload: Payload): Promise<Response> {
    return this._perform(path, payload, {
      method: "POST",
    });
  }
}

export { _RequestService };
