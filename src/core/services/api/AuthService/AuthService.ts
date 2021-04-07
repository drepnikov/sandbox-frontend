import { _RequestService } from "@Core/services/api/_RequestService/_RequestService";

export interface ILoginParams {
    password: string;
    login: string;
}

export interface IAuthService {
    login: (params: ILoginParams) => Promise<ILoginResponse | null>;
    logout: () => Promise<boolean>;
}

export interface ILoginResponse {
    token: string;
    userId: string;
    userName: string;
    checkStatus: number;
    userAccountType: string;
}

class AuthService extends _RequestService implements IAuthService {
    /**
     * Возвращает токен
     */
    async login(params: ILoginParams): Promise<ILoginResponse | null> {
        const { login } = this.config.API;

        const result = await this.post<ILoginResponse>(login, params);

        return result ? result : null;
    }

    async logout(): Promise<boolean> {
        return true;
    }
}

export { AuthService };
