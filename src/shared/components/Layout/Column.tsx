import * as React from "react";
import "./Layout.scss";

interface IProps {}

const Column: React.FC<IProps> = ({ children }) => {
    let className = "column";

    return <section className={className}>{children}</section>;
};

export { Column };
