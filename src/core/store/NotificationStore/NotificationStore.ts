import { action, makeObservable, observable } from "mobx";

export type NotificationMessagesType = "info" | "danger" | "success" | null;

interface HistoryMessage {
    type: NotificationMessagesType;
    errorDescription: any;
}

class NotificationStore {
    message: NotificationMessagesType = null;
    history: HistoryMessage[] = [];
    timerId?: number;

    constructor() {
        makeObservable(this, {
            message: observable,
            showMessage: action,
            history: observable,
        });
    }

    showMessage = (type: NotificationMessagesType, description?: any, duration: number = 3000) => {
        if (this.timerId) clearTimeout(this.timerId);

        this.message = type;

        this.history.push({ type, errorDescription: description });

        this.timerId = window.setTimeout(() => {
            this.hideMessage();
        }, duration);
    };

    private hideMessage = () => {
        this.message = null;
    };
}

export { NotificationStore };
