import * as React from "react";
import "../Navigation.scss";

import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

export interface INavigationTabProps {
    title: string;
    current: boolean;
    setActive: () => void;

    disabled?: boolean;
}

const NavigationTab: React.FunctionComponent<INavigationTabProps> = ({ setActive, current, title, disabled }) => {
    const classNames = {
        navigationTabElement: stylesHandler.getClassName("navigation__tab", { current, disabled }),
    };

    return (
        <button disabled={disabled} className={classNames.navigationTabElement} onClick={setActive}>
            {title}
        </button>
    );
};

export { NavigationTab };
