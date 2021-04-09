import * as React from "react";
import "../Navigation.scss";

export interface INavigationTabProps {
    title: string;
    current: boolean;
    setActive: () => void;
}

const NavigationTab: React.FunctionComponent<INavigationTabProps> = ({ setActive, current, title }) => {
    return (
        <button className={`navigation__tab navigation__tab--current-${current}`} onClick={setActive}>
            {title}
        </button>
    );
};

export { NavigationTab };
