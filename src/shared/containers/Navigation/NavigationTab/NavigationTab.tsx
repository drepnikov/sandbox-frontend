import * as React from "react";
import "../Navigation.scss";

export interface INavigationTabProps {
    title: string;
    current: boolean;
    setActive: () => void;

    disabled?: boolean;
}

const NavigationTab: React.FunctionComponent<INavigationTabProps> = ({ setActive, current, title, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={`navigation__tab navigation__tab--current-${current} navigation__tab--disabled-${disabled ? "true" : "false"}`}
            onClick={setActive}
        >
            {title}
        </button>
    );
};

export { NavigationTab };
