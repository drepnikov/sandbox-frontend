import * as React from "react";
import { observer } from "mobx-react-lite";
import { UserRouter } from "@Core/containers/Routers/UserRouter";
import { GuestRouter } from "@Core/containers/Routers/GuestRouter";

import { useStore } from "@Core/hooks/useStore";
import { useEffect } from "react";

interface IProps {}

const App: React.FunctionComponent<IProps> = observer(() => {
    //todo: В этом компоненте нужно реализовать запуск фичи цветовых тем

    const { sessionStore } = useStore();

    useEffect(() => {
        sessionStore.recoverSession();
    }, [sessionStore]);

    const getRouter = () => {
        if (sessionStore.isAuthenticated) {
            return <UserRouter />;
        } else {
            return <GuestRouter />;
        }
    };

    return <main className={"Application"}>{getRouter()}</main>;
});

export { App };
