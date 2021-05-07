import * as React from "react";
import { useLocation } from "react-router-dom";
import * as S from "../styles";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import { MouseEventHandler } from "react";
import { RouteLink } from "@Core/components/smart/RouteLink/RouteLink";
const { urlService } = ServiceContainer;

export interface INavigationTabProps {
    title: string;
    to: string;

    onClick?: MouseEventHandler;
    disabled?: boolean;
    icon?: React.FC;
    className?: string;
}

const NavigationTab: React.FunctionComponent<INavigationTabProps> = ({ title, onClick, disabled, to, className }) => {
    const location = useLocation();

    const current = location.pathname === urlService.clearURLFromSearchParams(to);

    return (
        <S.StyledNavigationTabContainer className={className} current={current}>
            <RouteLink current={current} disabled={disabled} onClick={onClick} to={to}>
                {title}
            </RouteLink>
        </S.StyledNavigationTabContainer>
    );
};

export { NavigationTab };
