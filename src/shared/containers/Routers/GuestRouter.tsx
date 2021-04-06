import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "@Pages/LoginPage/LoginPage";
import { ROUTES_PATHS } from "@Shared/containers/Routers/constants";

interface IProps {}

const GuestRouter: React.FunctionComponent<IProps> = () => {
    return (
        <Switch>
            <Route path={ROUTES_PATHS.login} component={LoginPage} />
            <Redirect from="*" to={ROUTES_PATHS.login} />
        </Switch>
    );
};

export { GuestRouter };
