import { SessionStore } from "./SessionStore/SessionStore";
import { configure } from "mobx";
import { NotificationStore } from "@Core/store/NotificationStore/NotificationStore";

// Конфигурация mobx. Можно выключить использование Proxy, потому-что в ie11 его невозможно заполифилить
configure({
    enforceActions: "always",
    // useProxies: "never"
});

class Store {
    sessionStore = new SessionStore();
    notificationStore = new NotificationStore();
}

const store = new Store();

export { store };
