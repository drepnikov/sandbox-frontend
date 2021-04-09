import * as React from "react";
import "./Layout.scss";

interface IProps {}

const Row: React.FC<IProps> = ({ children }) => {
    let className = "row";

    return <div className={className}>{children}</div>;
};

export { Row };
