import * as React from "react";
import { config } from "@App/config";
import { NavigationTab } from "@Core/components/Navigation/NavigationTab/NavigationTab";
import { Navigation } from "@Core/components/Navigation/Navigation";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import "./HeaderNavigation.scss";
import { CollapsedPanel } from "@Core/components/CollapsedPanel/CollapsedPanel";
import { useToggle } from "@Core/hooks/useToggle";

const { stylesHandler } = ServiceContainer;

interface IProps {}

const HeaderNavigation: React.FunctionComponent<IProps> = () => {
    const [isOpen, toggleOpen] = useToggle();

    const classNames = {
        headerNavigationBlock: stylesHandler.getClassName("header-navigation"),
    };

    const { ROUTE_PATHS } = config;

    //todo: наверное именно здесь и реализовать навигационную шапку для декстопа. Скорее всего возвращать из компонента будем немного другое содержимое
    return (
        <CollapsedPanel isOpen={isOpen} toggleOpen={toggleOpen}>
            <Navigation className={classNames.headerNavigationBlock}>
                <NavigationTab onClick={toggleOpen} title={"Главная"} to={ROUTE_PATHS.main} />
                <NavigationTab onClick={toggleOpen} title={"Заглушка 1"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab onClick={toggleOpen} title={"Заглушка 2"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab onClick={toggleOpen} title={"Заглушка 3"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab onClick={toggleOpen} title={"Заглушка 4"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab onClick={toggleOpen} title={"Заглушка 5"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab onClick={toggleOpen} title={"Заглушка 6"} to={ROUTE_PATHS.showcase} disabled />
                <NavigationTab onClick={toggleOpen} title={"Витрина"} to={ROUTE_PATHS.showcase} />
            </Navigation>
        </CollapsedPanel>
    );
};

export { HeaderNavigation };
