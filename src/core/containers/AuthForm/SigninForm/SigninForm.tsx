import * as React from "react";
import { FormEventHandler, useState } from "react";

import { useMutation } from "react-query";
import { useStore } from "@Core/hooks/useStore";
import "../AuthForm.scss";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { authService, stylesHandler } = ServiceContainer;

interface IProps {}

const SigninForm: React.FunctionComponent<IProps> = () => {
    const classNames = {
        controlsBlock: stylesHandler.getClassName("signin-form-controls"),
        inputElement: stylesHandler.getClassName("auth-form__input"),
        btnElement: stylesHandler.getClassName("auth-form__btn"),
    };

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
        <form className={classNames.controlsBlock} onSubmit={onSubmit}>
            <input placeholder={"Логин"} className={classNames.inputElement} onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
            <input
                placeholder={"Пароль"}
                className={classNames.inputElement}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={"password"}
            />

            <button className={classNames.btnElement} type={"submit"}>
                Отправить
            </button>
        </form>
    );
};

export { SigninForm };
