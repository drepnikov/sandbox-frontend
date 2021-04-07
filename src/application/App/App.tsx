import * as React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@Store";
import { GuestRouter } from "@Shared/containers/Routers/GuestRouter";
import { UserRouter } from "@Shared/containers/Routers/UserRouter";
import { useEffect } from "react";

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

  return <div className="App">{getRouter()}</div>;
});

export { App };
