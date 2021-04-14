import * as React from "react";

import "./Layout.scss";

interface IProps {
    page: string;
}

const Layout: React.FunctionComponent<IProps> = ({ children, page }) => {
    return <section className={`grid-container grid-container--${page}`}>{children}</section>;
};

export { Layout };
