import styled from "@emotion/styled";
import { css } from "@emotion/react";

const mainInputStyles = css`
    display: block;
    width: 100%;
    margin-bottom: 10px;

    border: none;
    border-bottom: solid rgb(143, 143, 143) 1px;
    height: 32px;

    background: none;
    color: rgba(255, 255, 255, 0.555);
    outline: none;
`;

export const StyledInputText = styled.input`
    ${mainInputStyles};
`;

export const StyledInputPassword = styled.input`
    ${mainInputStyles};
`;

export const StyledInputEmail = styled.input`
    ${mainInputStyles};
`;
