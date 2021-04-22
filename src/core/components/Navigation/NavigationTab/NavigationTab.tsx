import * as React from "react";
import "../Navigation.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler, urlService } = ServiceContainer;

export interface INavigationTabProps {
    title: string;
    to: string;

    disabled?: boolean;
}

const NavigationTab: React.FunctionComponent<INavigationTabProps> = ({ title, disabled, to }) => {
    const location = useLocation();

    // Если будет to с query-параметрами, проверку не пройдет, это плохо
    const current = location.pathname === urlService.clearURLFromSearchParams(to);

    const classNames = {
        navigationTabElement: stylesHandler.getClassName("navigation__tab", { current, disabled }),
    };

    return <div className={classNames.navigationTabElement}>{to ? <Link to={to}>{title}</Link> : title}</div>;
};

export { NavigationTab };
