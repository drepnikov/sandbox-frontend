import styled from "@emotion/styled";
import { Navigation } from "@Core/components/Navigation/Navigation";

export const MainContainer = styled.div`
    width: 100%;
`;

export const AuthNavigation = styled(Navigation)`
    margin-bottom: 10px;
`;

export const Form = styled.form``;

export const Input = styled.input`
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

export const SendBtn = styled.button`
    width: 100%;

    color: white;
`;
