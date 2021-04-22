import { SessionStore } from "./SessionStore/SessionStore";
import { configure } from "mobx";

// Конфигурация mobx. Можно выключить использование Proxy, потому-что в ie11 его невозможно заполифилить
configure({
    enforceActions: "always",
    // useProxies: "never"
});

class Store {
    sessionStore = new SessionStore();
}

const store = new Store();

export { store };
