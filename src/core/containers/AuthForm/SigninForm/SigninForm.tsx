import * as React from "react";
import { FormEventHandler, useState } from "react";

import { useMutation } from "react-query";
import { useStore } from "@Core/hooks/useStore";

import * as S from "../styles";

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
        <S.Form onSubmit={onSubmit}>
            <S.Input placeholder={"Логин"} onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
            <S.Input placeholder={"Пароль"} onChange={(e) => setPassword(e.target.value)} value={password} type={"password"} />

            <S.SendBtn type={"submit"}>Отправить</S.SendBtn>
        </S.Form>
    );
};

export { SigninForm };
