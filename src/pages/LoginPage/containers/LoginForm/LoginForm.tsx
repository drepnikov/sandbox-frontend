import * as React from "react";
import { useStore } from "@Store";
import { observer } from "mobx-react-lite";
import { FormEventHandler, useState } from "react";

import "./LoginForm.scss";

interface IProps {}

const LoginForm: React.FunctionComponent<IProps> = observer(() => {
    const { sessionStore } = useStore();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        // sessionStore.login({ login, password });
    };

    return (
        <div className={"login-form"}>
            <nav className={"login-form__nav"}>Навигация</nav>
            <form className={"login-form__controls"} onSubmit={onSubmit}>
                <input className={"login-form__input login-form__input--login"} onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
                <input
                    className={"login-form__input login-form__input--password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={"password"}
                />

                <button className={"login-form__btn"} type={"submit"}>
                    Отправить
                </button>
            </form>
        </div>
    );
});

export { LoginForm };
