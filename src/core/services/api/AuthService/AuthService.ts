import { _RequestService } from "@Core/services/api/_RequestService/_RequestService";

export interface ILoginParams {
  password: string;
  login: string;
}

export interface IAuthService {
  login: (params: ILoginParams) => Promise<string | null>;
  logout: () => Promise<boolean>;
}

class AuthService extends _RequestService implements IAuthService {
  /**
   * Возвращает токен
   */
  async login(params: ILoginParams): Promise<string | null> {
    return "123456";
  }

  async logout(): Promise<boolean> {
    return true;
  }
}

export { AuthService };
