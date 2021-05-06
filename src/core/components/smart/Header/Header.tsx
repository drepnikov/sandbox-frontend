import * as React from "react";
import { config } from "@App/config";
import { ReactComponent as HeaderLogo } from "./assets/logo.svg";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import "./Header.scss";
import { useToggle } from "@Core/hooks/useToggle";
import { NavigationTab } from "@Core/components/smart/Navigation/NavigationTab/NavigationTab";
import { Navigation } from "@Core/components/smart/Navigation/Navigation";

const { stylesHandler } = ServiceContainer;

interface IProps {}

const Header: React.FunctionComponent<IProps> = () => {
    const classNames = {
        headerContainerBlock: stylesHandler.getClassName("header"),
        headerLogoElement: stylesHandler.getClassName("header__logo"),
        headerNavigationElement: stylesHandler.getClassName("header__navigation"),
    };

    const { ROUTE_PATHS } = config;

    return (
        <header>
            <div className={classNames.headerLogoElement}></div>

            <Navigation className={classNames.headerNavigationElement}>
                <NavigationTab title={"Заглушка 1"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab title={"Заглушка 2"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab title={"Заглушка 3"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab title={"Заглушка 4"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab title={"Заглушка 5"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab title={"Заглушка 6"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab title={"Витрина"} to={ROUTE_PATHS.showcase} />
            </Navigation>
        </header>
    );
};

export { Header };
