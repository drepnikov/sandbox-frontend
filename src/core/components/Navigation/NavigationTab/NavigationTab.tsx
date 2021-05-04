import * as React from "react";
import "../Navigation.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ServiceContainer } from "@Core/services/ServiceContainer";
import { MouseEventHandler } from "react";
const { stylesHandler, urlService } = ServiceContainer;

export interface INavigationTabProps {
    title: string;
    to: string;

    onClick?: MouseEventHandler;
    disabled?: boolean;
    icon?: React.FC;
}

const NavigationTab: React.FunctionComponent<INavigationTabProps> = ({ title, onClick, disabled, to }) => {
    const location = useLocation();

    // Если будет to с query-параметрами, проверку не пройдет, это плохо
    const current = location.pathname === urlService.clearURLFromSearchParams(to);

    const classNames = {
        navigationTabElement: stylesHandler.getClassName("navigation__tab", { current, disabled }),
    };

    return disabled ? (
        <a className={classNames.navigationTabElement}>{title}</a>
    ) : (
        <Link onClick={onClick ? onClick : undefined} className={classNames.navigationTabElement} to={to}>
            {title}
        </Link>
    );
};

export { NavigationTab };
