import { IStorageService } from "@Core/services/browser/StorageService/StorageService";
import { Config } from "@Config";
import { ILogger } from "@Core/services/utils/Logger/Logger";
import { store } from "@Store";

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
            this._handlingErrorCode(request.status);

            this._logger.error("Неудачный запрос", request);

            return null;
        }
    }

    private _handlingErrorCode(code: number) {
        let message = null;

        switch (code) {
            case 401:
                //todo: Не хотелось бы взаимодействовать со стором из сервисов. Желательно только из react-компонентов.
                //      В этом сервисе оставлю, но лучше избегать подобного.

                store.sessionStore.logout();
                message = "Не найдена сессия пользователя";
                break;
        }

        if (message) {
            this._logger.info(message);
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
