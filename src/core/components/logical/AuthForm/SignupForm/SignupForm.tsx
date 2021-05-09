import * as React from "react";
import { FormEventHandler, useState } from "react";
import { useStore } from "@Core/hooks/useStore";
import * as S from "../styles";
import { InputEmail, InputPassword, InputText } from "@Core/components/dumb/inputs";
import { DangerButton } from "@Core/components/dumb/buttons";
import { useMutation } from "react-query";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import { ActionConditionsEnum } from "@Core/types/temp";
const { authService } = ServiceContainer;

interface IProps {}

const SignupForm: React.FunctionComponent<IProps> = () => {
    const { sessionStore, notificationStore } = useStore();

    const [email, setEmail] = useState("");
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
                notificationStore.showMessage(ActionConditionsEnum.danger);
            },
        }
    );

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        mutation.mutate();
    };

    return (
        <form css={S.authForm()} onSubmit={onSubmit}>
            <InputText placeholder={"Логин"} onChange={(e) => setLogin(e.target.value)} value={login} />
            <InputPassword placeholder={"Пароль"} onChange={(e) => setPassword(e.target.value)} value={password} />
            <InputEmail placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} value={email} />

            <DangerButton css={S.authSendButton()}>Зарегистрироваться</DangerButton>
        </form>
    );
};

export { SignupForm };
