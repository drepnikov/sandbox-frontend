import * as React from "react";
import * as S from "./styles";
import { observer } from "mobx-react-lite";
import { useStore } from "@Core/hooks/useStore";
import { useEffect } from "react";
import { ActionConditionsEnum } from "@Core/types/temp";

interface IProps {}

const Notifications: React.FC<IProps> = observer(() => {
    const { notificationStore } = useStore();
    const duration = 3000;
    const show = notificationStore.message;

    const messages = {
        [ActionConditionsEnum.danger]: "Ошибка  ٩(｡•́‿•̀｡)۶",
        [ActionConditionsEnum.info]: "Информация  (─‿‿─)",
        [ActionConditionsEnum.success]: "Успешно (◕‿◕)",
    };

    useEffect(() => {
        if (show) {
            let timerId = setTimeout(() => {
                notificationStore.hideMessage();
            }, duration);

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [show]);

    if (!show) return null;

    return <div css={S.notifications(show, duration)}>{messages[show]}</div>;
});

export { Notifications };
