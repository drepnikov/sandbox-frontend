import * as React from "react";
import { config } from "@App/config";
import { NavigationTab } from "@Core/components/Navigation/NavigationTab/NavigationTab";
import { Navigation } from "@Core/components/Navigation/Navigation";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import "./HeaderNavigation.scss";

const { stylesHandler } = ServiceContainer;

interface IProps {}

const HeaderNavigation: React.FunctionComponent<IProps> = () => {
    const classNames = {
        headerNavigationBlock: stylesHandler.getClassName("header-navigation"),
    };

    const { ROUTE_PATHS } = config;

    return (
        <Navigation className={classNames.headerNavigationBlock}>
            <NavigationTab title={"Главная"} to={ROUTE_PATHS.main} />
            <NavigationTab title={"Витрина"} to={ROUTE_PATHS.showcase} />
            <NavigationTab title={"Заглушка 1"} to={ROUTE_PATHS.showcase} disabled />
            <NavigationTab title={"Заглушка 2"} to={ROUTE_PATHS.showcase} disabled />
            <NavigationTab title={"Заглушка 3"} to={ROUTE_PATHS.showcase} disabled />
            <NavigationTab title={"Заглушка 4"} to={ROUTE_PATHS.showcase} disabled />
            <NavigationTab title={"Заглушка 5"} to={ROUTE_PATHS.showcase} disabled />
            <NavigationTab title={"Заглушка 6"} to={ROUTE_PATHS.showcase} disabled />
        </Navigation>
    );
};

export { HeaderNavigation };
