export interface IStorageService {
  getToken: () => string | null;
  setToken: (token: string) => boolean;

  clear: () => boolean;
}

class StorageService implements IStorageService {
  private readonly _TOKEN_KEY = "session_token";

  constructor(private _storage: Storage) {}

  getToken() {
    return this._storage.getItem(this._TOKEN_KEY);
  }

  setToken(token: string) {
    this._storage.setItem(this._TOKEN_KEY, token);

    return true;
  }

  clear() {
    this._storage.clear();

    return true;
  }
}

export { StorageService };
