import * as React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { MouseEventHandler, useCallback } from "react";

interface IProps {
    to: string;
    onClick?: MouseEventHandler;
    disabled?: boolean;
    current?: boolean;
}

const RouteLink: React.FC<IProps> = ({ to, onClick, current, disabled, children }) => {
    return (
        <span css={S.routeLinkContainer(Boolean(current), Boolean(disabled))}>
            {disabled ? (
                <a className={"route-link"}>{children}</a>
            ) : (
                <Link className={"route-link"} onClick={onClick} to={to}>
                    {children}
                </Link>
            )}
        </span>
    );
};

export { RouteLink };
