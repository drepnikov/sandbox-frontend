import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "@Pages/AuthPage/AuthPage";
import { config } from "@App/config";

interface IProps {}

const GuestRouter: React.FunctionComponent<IProps> = () => {
    const { ROUTE_PATHS } = config;

    return (
        <Switch>
            <Route path={ROUTE_PATHS.authSignin} component={AuthPage} />
            <Route path={ROUTE_PATHS.authSignup} component={AuthPage} />

            <Redirect from="*" to={ROUTE_PATHS.authSignin} />
        </Switch>
    );
};

export { GuestRouter };
