import * as React from "react";

import "./Layout.scss";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

interface IProps {
    page: string;
}

const Layout: React.FunctionComponent<IProps> = ({ children, page }) => {
    const classNames = {
        gridBlock: stylesHandler.getClassName("grid-container", { modifier: page }),
    };

    return <section className={classNames.gridBlock}>{children}</section>;
};

export { Layout };
