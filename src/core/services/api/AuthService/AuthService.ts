import { _RequestService } from "@Core/services/api/_RequestService/_RequestService";

export interface ILoginParams {
    password: string;
    login: string;
}

export interface IAuthService {
    login: (params: ILoginParams) => Promise<string | null>;
    logout: () => Promise<boolean>;
}

interface ILoginResponse {
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
    async login(params: ILoginParams): Promise<string | null> {
        const { login } = this.config.API;

        const result = this.post<ILoginResponse>(login, params);

        console.log(result);

        return "12345";
    }

    async logout(): Promise<boolean> {
        return true;
    }
}

export { AuthService };
