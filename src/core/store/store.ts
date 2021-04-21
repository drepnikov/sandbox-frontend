import { SessionStore } from "./SessionStore/SessionStore";

// Конфигурация mobx. Можно выключить использованию Proxy, потому-что в ie11 его невозможно заполифилить
// configure({
//     useProxies: "never"
// });

class Store {
    sessionStore = new SessionStore();
}

const store = new Store();

export { store };
