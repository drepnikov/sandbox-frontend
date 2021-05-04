import styled from "@emotion/styled";
import { Navigation } from "@Core/components/Navigation/Navigation";

export const DIV_MAIN_CONTAINER__AUTH_FORM = styled.div`
    width: 100%;
`;

export const NAVIGATION__AUTH_FORM = styled(Navigation)`
    margin-bottom: 10px;
`;

export const FORM__AUTH_FORM = styled.form``;

export const INPUT__AUTH_FORM = styled.input`
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

export const SEND_BTN__AUTH_FORM = styled.button`
    width: 100%;

    color: white;
`;
