import * as React from "react";
import { useStore } from "@Store";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { FormEventHandler, useState } from "react";

interface IProps extends RouteComponentProps {}

const LoginPage: React.FunctionComponent<IProps> = observer(({ location }) => {
    const { sessionStore } = useStore();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        sessionStore.login({ login, password });
    };

    return (
        <form onSubmit={onSubmit}>
            <input onChange={(e) => setLogin(e.target.value)} value={login} type={"text"} />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type={"password"} />

            <button type={"submit"}>Отправить</button>
        </form>
    );
});

export { LoginPage };
