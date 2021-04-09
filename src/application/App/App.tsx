import * as React from "react";
import { observer } from "mobx-react-lite";
import { GuestRouter } from "@Shared/containers/Routers/GuestRouter";
import { UserRouter } from "@Shared/containers/Routers/UserRouter";
import { useEffect } from "react";
import { useStore } from "@Shared/hooks/useStore";

interface IProps {}

const App: React.FunctionComponent<IProps> = observer(() => {
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

    return getRouter();
});

export { App };
