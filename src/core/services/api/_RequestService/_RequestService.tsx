import { API_PATHS } from "@Core/services/api/constants";

class _RequestService {
  private readonly _domain: string;

  constructor(domain?: string) {
    this._domain = domain || API_PATHS.BASE;
  }

  private async _perform(url: string, data?: any, settings?: RequestInit) {
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
    };

    const request = await fetch(this._domain + url, {
      ...settings,
      body: JSON.stringify(data),
      headers,
    });

    return request.json();
  }

  protected async get<Response>(path: string, searchParams?: { [key: string]: string }): Promise<Response> {
    const fullPath = searchParams ? new URLSearchParams(searchParams).toString() : path;

    return this._perform(fullPath);
  }

  protected async post<Response, Payload>(path: string, payload: Payload): Promise<Response> {
    return this._perform(path, payload, {
      method: "POST",
    });
  }
}

export { _RequestService };
