import * as React from "react";

import "../Layout.scss";

interface IProps {}

const LayoutItem: React.FunctionComponent<IProps> = ({ children }) => {
    return <section className={"grid-item"}>{children}</section>;
};

export { LayoutItem };
