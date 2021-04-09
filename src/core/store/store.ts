import { SessionStore } from "./SessionStore/SessionStore";

class Store {
    sessionStore = new SessionStore();
}

const store = new Store();

export { store };
