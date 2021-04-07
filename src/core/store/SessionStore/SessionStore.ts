import { flow, types } from "mobx-state-tree";
import { ILoginParams, ILoginResponse } from "@Core/services/api/AuthService/AuthService";
import { ServiceContainer } from "@Core/services/ServiceContainer";

const state = {
    isAuthenticated: types.boolean,
};

const SessionStore = types.model("SessionStore", state).actions((self) => {
    return {
        recoverSession: () => {
            const { storageService } = ServiceContainer;

            const token = storageService.getUserSessionInfo()?.token;

            if (token) {
                self.isAuthenticated = true;
            }
        },

        login: flow(function* (credentials: ILoginParams) {
            const { authService, storageService } = ServiceContainer;

            //todo: почему, при вызове через yeild, мне приходится дублировать обьявление типа в переменной??
            const userSessionInfo: ILoginResponse | null = yield authService.login(credentials);

            if (userSessionInfo) {
                storageService.setUserSessionInfo(userSessionInfo);

                self.isAuthenticated = true;
            }
        }),
        logout: flow(function* () {
            const { authService, storageService } = ServiceContainer;

            //todo: почему, при вызове через yeild, мне приходится дублировать обьявление типа в переменной??
            const success: boolean = yield authService.logout();

            if (success) {
                storageService.clear();

                self.isAuthenticated = false;
            }
        }),
    };
});

export { SessionStore };
