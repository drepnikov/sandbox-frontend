import { _RequestService } from "../_RequestService/_RequestService";

export interface ILoginParams {
    password: string;
    login: string;
}

export interface IAuthService {
    login: (params: ILoginParams) => Promise<ILoginResponse>;
    logout: () => Promise<boolean>;
}

export interface ILoginResponse {
    token: string;
}

class AuthService extends _RequestService implements IAuthService {
    /**
     * Возвращает токен
     */
    async login(params: ILoginParams): Promise<ILoginResponse> {
        const { login } = this.config.API;

        const result = await this.post<ILoginResponse>(login, params);

        if (!result) throw new Error("Информация о сессии не получена");

        return result;
    }

    async logout(): Promise<boolean> {
        return true;
    }
}

export { AuthService };
