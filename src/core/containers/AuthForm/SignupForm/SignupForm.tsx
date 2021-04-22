import * as React from "react";
import { FormEventHandler } from "react";
import { useStore } from "@Core/hooks/useStore";

import "../AuthForm.scss";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

interface IProps {}

const SignupForm: React.FunctionComponent<IProps> = () => {
    const classNames = {
        controlsBlock: stylesHandler.getClassName("signin-form-controls"),
        btnElement: stylesHandler.getClassName("auth-form__btn"),
    };
    const { sessionStore } = useStore();

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form className={classNames.controlsBlock} onSubmit={onSubmit}>
            <button className={classNames.btnElement} type={"submit"}>
                Отправить
            </button>
        </form>
    );
};

export { SignupForm };
