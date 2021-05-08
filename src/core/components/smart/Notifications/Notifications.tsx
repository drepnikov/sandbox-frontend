import * as React from "react";
import * as S from "./styles";
import { observer } from "mobx-react-lite";
import { useStore } from "@Core/hooks/useStore";

interface IProps {}

const Notifications: React.FC<IProps> = observer(() => {
    //todo: Допили нотификации

    const { notificationStore } = useStore();

    const show = notificationStore.message;

    return <div css={S.notifications(show)}>Привет всем</div>;
});

export { Notifications };
