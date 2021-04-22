import * as React from "react";
import { observer } from "mobx-react-lite";
import { UserRouter } from "@Core/containers/Routers/UserRouter";
import { GuestRouter } from "@Core/containers/Routers/GuestRouter";

import { useStore } from "@Core/hooks/useStore";
import { useEffect } from "react";

import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

interface IProps {}

const App: React.FunctionComponent<IProps> = observer(() => {
    //todo: В этом компоненте нужно реализовать запуск фичи цветовых тем
    const classNames = {
        block: stylesHandler.getClassName("Application"),
    };

    const { sessionStore } = useStore();

    useEffect(() => {
        sessionStore.recoverSession();
    }, [sessionStore]);

    const getRouter = () => {
        if (sessionStore.isAuthenticated === undefined) return null;

        if (sessionStore.isAuthenticated) {
            return <UserRouter />;
        } else {
            return <GuestRouter />;
        }
    };

    return <main className={classNames.block}>{getRouter()}</main>;
});

export { App };
