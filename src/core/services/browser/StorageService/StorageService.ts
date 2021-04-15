import { ILoginResponse } from "../../api/AuthService/AuthService";

export interface IStorageService {
    getUserSessionInfo: () => ILoginResponse | null;
    setUserSessionInfo: (userSessionInfo: ILoginResponse) => boolean;

    clear: () => boolean;
}

class StorageService implements IStorageService {
    private readonly _USER_SESSION_KEY = "user_session";

    constructor(private _storage: Storage) {}

    getUserSessionInfo() {
        const userSession = this._storage.getItem(this._USER_SESSION_KEY);

        return userSession ? (JSON.parse(userSession) as ILoginResponse) : null;
    }

    setUserSessionInfo(userSessionInfo: ILoginResponse) {
        this._storage.setItem(this._USER_SESSION_KEY, JSON.stringify(userSessionInfo));

        return true;
    }

    clear() {
        this._storage.clear();

        return true;
    }
}

export { StorageService };
