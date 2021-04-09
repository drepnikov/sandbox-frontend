import * as React from "react";
import { FormEventHandler, useState } from "react";
import { ServiceContainer } from "@ServiceContainer";

import "../AuthForm.scss";
import { useMutation } from "react-query";
import { useStore } from "@Shared/hooks/useStore";

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
            <input className={"signin-form__input signin-form__input--login"} onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
            <input
                className={"signin-form__input signin-form__input--password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={"password"}
            />

            <button className={"signin-form__btn"} type={"submit"}>
                Войти
            </button>
        </form>
    );
};

export { SigninForm };
