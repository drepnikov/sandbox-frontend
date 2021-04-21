import * as React from "react";

import "./Navigation.scss";

interface IProps {
    className?: string;
}

const Navigation: React.FunctionComponent<IProps> = ({ className, children }) => {
    let style = "navigation";

    if (className) style += " " + className;

    return <nav className={style}>{children}</nav>;
};

export { Navigation };
