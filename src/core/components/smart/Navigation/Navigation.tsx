import * as React from "react";

import "./Navigation.scss";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

interface IProps {
    className?: string;
}

const Navigation: React.FunctionComponent<IProps> = ({ className, children }) => {
    // присутствие параметра className обязателено (но сам аргумент не обязателен), чтобы при желании можно было стилизовать этот компонент извне
    const classNames = {
        block: stylesHandler.getClassName("navigation", { additionalClassName: className }),
    };

    return <nav className={classNames.block}>{children}</nav>;
};

export { Navigation };
