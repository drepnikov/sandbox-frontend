import { css } from "@emotion/react";

export const incognitaEnterContainer = () => css`
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    right: 30px;
    top: 30px;
    cursor: pointer;

    @media (min-width: 576px) {
        justify-content: space-between;
        width: 130px;
    }
`;

export const incognitaEnterIcon = () => css`
    width: 45px;
    height: 45px;
    fill: white;
`;

export const incognitoEnterTitle = () => css`
    color: white;
    display: none;

    @media (min-width: 576px) {
        display: initial;
    }
`;
