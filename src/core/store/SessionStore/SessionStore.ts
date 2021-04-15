import { action, makeObservable, observable } from "mobx";

import { ILoginResponse } from "@Core/services/api/AuthService/AuthService";
import { ServiceContainer } from "@Core/services/ServiceContainer";

const { storageService } = ServiceContainer;

class SessionStore {
    isAuthenticated: boolean = false;

    constructor() {
        makeObservable(this, {
            isAuthenticated: observable,
            recoverSession: action,
            setSession: action,
            removeSession: action,
        });
    }

    recoverSession = () => {
        const token = storageService.getUserSessionInfo()?.token;

        if (token) {
            this.isAuthenticated = true;
        }
    };

    setSession = (sessionInfo: ILoginResponse) => {
        storageService.setUserSessionInfo(sessionInfo);

        this.isAuthenticated = true;
    };

    removeSession = () => {
        storageService.clear();

        this.isAuthenticated = false;
    };
}

export { SessionStore };
