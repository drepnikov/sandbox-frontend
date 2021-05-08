import { css } from "@emotion/react";

const dangerColor = "#ce1616";
const infoColor = "#6d6d6d";

export const basicButton = () => css`
    border-radius: 6px;
    border: 3px solid;
`;

export const dangerButton = () => css`
    background-color: ${dangerColor};
    border-color: ${dangerColor};
    color: #efe0e0;
`;

export const infoButton = () => css`
    background-color: ${infoColor};
    border-color: ${infoColor};
    color: #efe0e0;
`;
