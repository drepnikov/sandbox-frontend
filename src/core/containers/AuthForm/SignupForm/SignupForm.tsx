import * as React from "react";
import { FormEventHandler } from "react";
import { useStore } from "@Core/hooks/useStore";
import * as S from "../styles";

interface IProps {}

const SignupForm: React.FunctionComponent<IProps> = () => {
    const { sessionStore } = useStore();

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <S.StyledForm onSubmit={onSubmit}>
            <S.StyledSendBtn type={"submit"}>Отправить</S.StyledSendBtn>
        </S.StyledForm>
    );
};

export { SignupForm };
