import { css } from "@emotion/react";

const currentNavigationTab = css`
    opacity: 100%;
`;

export const navigationContainer = () => css`
    display: flex;
`;

export const navigationTabContainer = (current: boolean) => css`
    .route-link {
        padding: 15px 30px;
        border-radius: 5%;
        opacity: 35%;

        ${current && currentNavigationTab}
    }
`;
