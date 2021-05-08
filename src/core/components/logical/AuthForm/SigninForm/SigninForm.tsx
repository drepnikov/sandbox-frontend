import * as React from "react";
import { FormEventHandler, useState } from "react";
import { InputPassword, InputText } from "@Core/components/dumb/inputs";

import { useMutation } from "react-query";
import { useStore } from "@Core/hooks/useStore";

import * as S from "../styles";

import { ServiceContainer } from "@Core/services/ServiceContainer";
import { DangerButton } from "@Core/components/dumb/buttons";
const { authService } = ServiceContainer;

interface IProps {}

const SigninForm: React.FunctionComponent<IProps> = () => {
    const { sessionStore, notificationStore } = useStore();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const mutation = useMutation(
        () => {
            throw new Error("Не реализовано");

            return authService.login({ password, login });
        },
        {
            onSuccess: (data) => {
                sessionStore.setSession(data);
            },

            onError: () => {
                notificationStore.showMessage("danger");
            },
        }
    );

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        mutation.mutate();
    };

    return (
        <form css={S.authForm()} onSubmit={onSubmit}>
            <InputText placeholder={"Логин"} onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
            <InputPassword placeholder={"Пароль"} onChange={(e) => setPassword(e.target.value)} value={password} type={"password"} />

            <DangerButton css={S.authSendButton()}>Войти</DangerButton>
        </form>
    );
};

export { SigninForm };
