import { css } from "@emotion/react";

const sendButtonMarginTop = "20px";

export const authFormContainer = () => css`
    width: 100%;
`;

export const authNavigation = () => css`
    justify-content: space-around;
    margin-bottom: 30px;
    margin-top: 10px;

    @media (min-width: 576px) {
        justify-content: left;
    }
`;

export const authNavigationTab = () => css`
    .route-link {
        background-color: black;
    }
`;

export const authForm = () => css``;

export const authSendButton = () => css`
    margin-top: ${sendButtonMarginTop};
    width: 100%;
    padding: 5px;

    @media (min-width: 576px) {
        display: block;
        width: auto;
        margin: 0 auto;
        margin-top: ${sendButtonMarginTop};
        padding-right: 50px;
        padding-left: 50px;
        right: 50%;
    }
`;
