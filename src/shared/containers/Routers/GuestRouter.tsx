import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "@Pages/LoginPage/LoginPage";
import { config } from "@Config";

interface IProps {}

const GuestRouter: React.FunctionComponent<IProps> = () => {
  const { ROUTE_PATHS } = config;
  return (
    <Switch>
      <Route path={ROUTE_PATHS.login} component={LoginPage} />
      <Redirect from="*" to={ROUTE_PATHS.login} />
    </Switch>
  );
};

export { GuestRouter };
