import * as React from "react";
import { FormEventHandler, useState } from "react";

import { useMutation } from "react-query";
import { useStore } from "@Core/hooks/useStore";

import { FORM__AUTH_FORM, INPUT__AUTH_FORM, SEND_BTN__AUTH_FORM } from "../styles";

import { ServiceContainer } from "@Core/services/ServiceContainer";
const { authService } = ServiceContainer;

interface IProps {}

const SigninForm: React.FunctionComponent<IProps> = () => {
    const { sessionStore } = useStore();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const mutation = useMutation(
        () => {
            return authService.login({ password, login });
        },
        {
            onSuccess: (data) => {
                sessionStore.setSession(data);
            },
        }
    );

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        mutation.mutate();
    };

    return (
        <FORM__AUTH_FORM onSubmit={onSubmit}>
            <INPUT__AUTH_FORM placeholder={"Логин"} onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
            <INPUT__AUTH_FORM placeholder={"Пароль"} onChange={(e) => setPassword(e.target.value)} value={password} type={"password"} />

            <SEND_BTN__AUTH_FORM type={"submit"}>Отправить</SEND_BTN__AUTH_FORM>
        </FORM__AUTH_FORM>
    );
};

export { SigninForm };
