import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "@Pages/MainPage/MainPage";
import { config } from "@App/config";
import { Showcase } from "@Pages/Showcase/Showcase";
import { HeaderNavigation } from "@Core/components/HeaderNavigation/HeaderNavigation";

interface IProps {}

const UserRouter: React.FunctionComponent<IProps> = () => {
    const { ROUTE_PATHS } = config;

    return (
        <>
            <HeaderNavigation />

            <Switch>
                <Route exact={true} path={ROUTE_PATHS.main} component={MainPage} />

                {/* 50 компонентов, курс*/}
                <Route path={ROUTE_PATHS.showcase} component={Showcase} />

                <Redirect from="*" to={ROUTE_PATHS.main} />
            </Switch>
        </>
    );
};

export { UserRouter };
