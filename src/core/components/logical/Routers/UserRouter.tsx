import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "@Pages/MainPage/MainPage";
import { config } from "@App/config";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import { Header } from "@Core/components/smart/Header/Header";
const { stylesHandler } = ServiceContainer;

interface IProps {}

const UserRouter: React.FunctionComponent<IProps> = () => {
    const { ROUTE_PATHS } = config;

    const classNames = {
        contentBlock: stylesHandler.getClassName("content"),
    };

    return (
        <>
            <Header />

            <main className={classNames.contentBlock}>
                <Switch>
                    <Route exact={true} path={ROUTE_PATHS.main} component={MainPage} />

                    {/* 50 компонентов, курс*/}
                    {/*<Route path={ROUTE_PATHS.showcase} component={Showcase} />*/}

                    <Redirect from="*" to={ROUTE_PATHS.main} />
                </Switch>
            </main>
        </>
    );
};

export { UserRouter };
