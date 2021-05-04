import * as React from "react";
import { FormEventHandler } from "react";
import { useStore } from "@Core/hooks/useStore";
import { FORM__AUTH_FORM, SEND_BTN__AUTH_FORM } from "../styles";

interface IProps {}

const SignupForm: React.FunctionComponent<IProps> = () => {
    const { sessionStore } = useStore();

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <FORM__AUTH_FORM onSubmit={onSubmit}>
            <SEND_BTN__AUTH_FORM type={"submit"}>Отправить</SEND_BTN__AUTH_FORM>
        </FORM__AUTH_FORM>
    );
};

export { SignupForm };
