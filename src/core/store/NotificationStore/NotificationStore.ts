import { action, makeObservable, observable } from "mobx";
import { ActionConditionsEnum } from "@Core/types/common";

export type NotificationMessagesType = ActionConditionsEnum | null;

interface HistoryMessage {
    type: NotificationMessagesType;
    errorDescription: any;
}

class NotificationStore {
    message: NotificationMessagesType = null;
    history: HistoryMessage[] = [];
    timerId?: number | null;

    constructor() {
        makeObservable(this, {
            message: observable,
            showMessage: action,
            history: observable,
            hideMessage: action,
        });
    }

    showMessage = (type: NotificationMessagesType, description?: any) => {
        this.message = type;

        this.history.push({ type, errorDescription: description });
    };

    hideMessage = () => {
        this.message = null;
    };
}

export { NotificationStore };
