import * as React from "react";
import { observer } from "mobx-react-lite";
import { UserRouter } from "@Core/components/logical/Routers/UserRouter";
import { GuestRouter } from "@Core/components/logical/Routers/GuestRouter";

import { useStore } from "@Core/hooks/useStore";
import { useEffect } from "react";

import { ServiceContainer } from "@Core/services/ServiceContainer";
import { Notifications } from "@Core/components/smart/Notifications/Notifications";
const { stylesHandler } = ServiceContainer;

interface IProps {}

const App: React.FunctionComponent<IProps> = observer(() => {
    const { sessionStore } = useStore();

    useEffect(() => {
        sessionStore.recoverSession();
    }, [sessionStore]);

    if (sessionStore.isAuthenticated === undefined) return null;

    //todo: В этом компоненте нужно реализовать запуск фичи цветовых тем
    const classNames = {
        block: stylesHandler.getClassName("Application", { modifier: sessionStore.isAuthenticated ? "user" : "guest" }),
    };

    const getRouter = () => {
        if (sessionStore.isAuthenticated) {
            return <UserRouter />;
        } else {
            return <GuestRouter />;
        }
    };

    return (
        <div className={classNames.block}>
            <Notifications />
            {getRouter()}
        </div>
    );
});

export { App };
