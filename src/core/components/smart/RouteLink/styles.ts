import { css } from "@emotion/react";

const disabledLink = css`
    cursor: default;
    text-decoration: line-through;
`;

const currentLink = css`
    cursor: default;
`;

export const routeLinkContainer = (current: boolean, disabled: boolean) => css`
    .route-link {
        text-decoration: none;
        color: inherit;
        text-align: center;

        ${disabled && disabledLink};
        ${current && currentLink}
    }
`;
