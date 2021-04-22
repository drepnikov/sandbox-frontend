import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "@Pages/MainPage/MainPage";
import { config } from "@App/config";
import { Showcase } from "@Pages/Showcase/Showcase";
import { NavigationTab } from "@Core/components/Navigation/NavigationTab/NavigationTab";
import { Navigation } from "@Core/components/Navigation/Navigation";

interface IProps {}

const UserRouter: React.FunctionComponent<IProps> = () => {
    const { ROUTE_PATHS } = config;
    // todo: раз навигация будет на всех страницах в юзерского роутера, нужно вынести навигацию в отдельный компонент
    return (
        <section>
            <Navigation>
                <NavigationTab title={"Главная"} to={ROUTE_PATHS.main} />
                <NavigationTab title={"Витрина"} to={ROUTE_PATHS.showcase} />
            </Navigation>

            <Switch>
                <Route exact={true} path={ROUTE_PATHS.main} component={MainPage} />

                {/* 50 компонентов, курс*/}
                <Route path={ROUTE_PATHS.showcase} component={Showcase} />

                <Redirect from="*" to={ROUTE_PATHS.main} />
            </Switch>
        </section>
    );
};

export { UserRouter };
