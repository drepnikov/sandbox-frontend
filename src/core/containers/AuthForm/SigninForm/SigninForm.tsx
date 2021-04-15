import * as React from "react";
import { FormEventHandler, useState } from "react";

import { useMutation } from "react-query";
import { useStore } from "@Core/hooks/useStore";
import { ServiceContainer } from "@Core/services/ServiceContainer";

import "../AuthForm.scss";

interface IProps {}

const SigninForm: React.FunctionComponent<IProps> = () => {
    const { authService } = ServiceContainer;

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
        <form className={"signin-form__controls"} onSubmit={onSubmit}>
            <input placeholder={"Логин"} className={"auth-form__input"} onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
            <input placeholder={"Пароль"} className={"auth-form__input"} onChange={(e) => setPassword(e.target.value)} value={password} type={"password"} />

            <button className={"auth-form__btn"} type={"submit"}>
                Отправить
            </button>
        </form>
    );
};

export { SigninForm };
