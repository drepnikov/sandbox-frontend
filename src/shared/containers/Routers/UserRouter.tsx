import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "@Pages/MainPage/MainPage";
import { ROUTES_PATHS } from "@Shared/containers/Routers/constants";

interface IProps {}

const UserRouter: React.FunctionComponent<IProps> = () => {
    return (
        <Switch>
            <Route exact={true} path={ROUTES_PATHS.main} component={MainPage} />

            <Redirect from="*" to={ROUTES_PATHS.main} />
        </Switch>
    );
};

export { UserRouter };
