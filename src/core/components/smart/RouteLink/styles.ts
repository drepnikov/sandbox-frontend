import styled from "@emotion/styled";
import { css } from "@emotion/react";

const disabledLink = css`
    cursor: default;
    text-decoration: line-through;
`;

const currentLink = css`
    cursor: default;
`;

export const StyledRouteLinkContainer = styled.span<{ disabled: boolean; current: boolean }>`
    .route-link {
        text-decoration: none;
        color: inherit;
        text-align: center;

        ${({ disabled }) => (disabled ? disabledLink : null)};
        ${({ current }) => (current ? currentLink : null)}
    }
`;
