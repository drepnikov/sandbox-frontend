import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledNavigationContainer = styled.nav`
    display: flex;
`;

const currentNavigationTab = css`
    opacity: 100%;
`;
export const StyledNavigationTabContainer = styled.span<{ current: boolean }>`
    .route-link {
        padding: 15px 30px;
        border-radius: 5%;
        opacity: 35%;

        ${(props) => (props.current ? currentNavigationTab : null)}
    }
`;
