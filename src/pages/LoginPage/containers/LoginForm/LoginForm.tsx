import * as React from "react";
import { useStore } from "@Store";
import { observer } from "mobx-react-lite";
import { FormEventHandler, useState } from "react";

interface IProps {}

const LoginForm: React.FunctionComponent<IProps> = observer(() => {
    const { sessionStore } = useStore();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        sessionStore.login({ login, password });
    };

    return (
        <form className={"login-form"} onSubmit={onSubmit}>
            <input className={"login-form__input login-form__input--login"} onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
            <input
                className={"login-form__input login-form__input--password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={"password"}
            />

            <button type={"submit"}>Отправить</button>
        </form>
    );
});

export { LoginForm };
