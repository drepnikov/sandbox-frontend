import * as React from "react";
import { FormEventHandler, useState } from "react";
import { useStore } from "@Core/hooks/useStore";
import * as S from "../styles";
import { InputEmail, InputPassword, InputText } from "@Core/components/dumb/inputs";
import { DangerButton } from "@Core/components/dumb/buttons";

interface IProps {}

const SignupForm: React.FunctionComponent<IProps> = () => {
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form css={S.authForm()} onSubmit={onSubmit}>
            <InputText placeholder={"Логин"} onChange={(e) => setLogin(e.target.value)} value={login} />
            <InputPassword placeholder={"Пароль"} onChange={(e) => setPassword(e.target.value)} value={password} />
            <InputEmail placeholder={"Email"} onChange={(e) => setPassword(e.target.value)} value={password} />

            <DangerButton>Отправить</DangerButton>
        </form>
    );
};

export { SignupForm };
