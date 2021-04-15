import { IStorageService } from "../../browser/StorageService/StorageService";
import { ILogger } from "../../utils/Logger/Logger";
import { Config } from "@App/config";

class _RequestService {
    constructor(protected config: Config, private _storageService: IStorageService, private _logger: ILogger) {}

    private async _perform(url: string, data?: any, settings?: RequestInit) {
        const { BASE_URL } = this.config.API;

        const headers: { [key: string]: string } = {
            "Content-Type": "application/json; charset=utf-8",
        };

        const token = this._storageService.getUserSessionInfo()?.token;

        if (token) headers["x-ecom-auth-token"] = token;

        const request = await fetch(BASE_URL + url, {
            ...settings,
            body: JSON.stringify(data),
            headers,
        });

        if (request.ok) {
            try {
                return request.json();
            } catch (e) {
                this._logger.info("Ответ 200, без json", request);

                return null;
            }
        } else {
            throw new Error("Код ошибки " + request.status);
        }
    }

    /**
     * Search params кидать сразу в path
     */
    protected async get<Response>(path: string): Promise<Response | null> {
        return await this._perform(path);
    }

    protected async post<Response>(path: string, payload: any): Promise<Response | null> {
        return this._perform(path, payload, {
            method: "POST",
        });
    }
}

export { _RequestService };
