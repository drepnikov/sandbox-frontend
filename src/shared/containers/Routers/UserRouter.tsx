import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "@Pages/MainPage/MainPage";
import { config } from "@Config";

interface IProps {}

const UserRouter: React.FunctionComponent<IProps> = () => {
  const { ROUTE_PATHS } = config;

  return (
    <Switch>
      <Route exact={true} path={ROUTE_PATHS.main} component={MainPage} />

      <Redirect from="*" to={ROUTE_PATHS.main} />
    </Switch>
  );
};

export { UserRouter };
