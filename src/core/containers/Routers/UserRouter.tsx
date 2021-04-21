import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "@Pages/MainPage/MainPage";
import { config } from "@App/config";
import { ShowCase } from "@Pages/Showcase/ShowCase";

interface IProps {}

const UserRouter: React.FunctionComponent<IProps> = () => {
    const { ROUTE_PATHS } = config;

    return (
        <Switch>
            <Route exact={true} path={ROUTE_PATHS.main} component={MainPage} />

            {/* 50 компонентов, курс*/}
            <Route exact={true} path={ROUTE_PATHS.showcase} component={ShowCase} />

            <Redirect from="*" to={ROUTE_PATHS.main} />
        </Switch>
    );
};

export { UserRouter };
