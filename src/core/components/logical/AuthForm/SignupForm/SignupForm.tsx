import * as React from "react";
import { FormEventHandler, useState } from "react";
import { useStore } from "@Core/hooks/useStore";
import * as S from "../styles";
import { InputPassword, InputText } from "@Core/components/dumb/inputs";

interface IProps {}

const SignupForm: React.FunctionComponent<IProps> = () => {
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <S.StyledForm onSubmit={onSubmit}>
            <InputText placeholder={"Логин"} onChange={(e) => setLogin(e.target.value)} value={login} />
            <InputPassword placeholder={"Пароль"} onChange={(e) => setPassword(e.target.value)} value={password} />

            <S.StyledSendBtn type={"submit"}>Отправить</S.StyledSendBtn>
        </S.StyledForm>
    );
};

export { SignupForm };
