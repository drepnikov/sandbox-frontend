import * as React from "react";
import { FormEventHandler } from "react";
import { useStore } from "@Core/hooks/useStore";

import "../AuthForm.scss";

interface IProps {}

const SignupForm: React.FunctionComponent<IProps> = () => {
    const { sessionStore } = useStore();

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form className={"signup-form__controls"} onSubmit={onSubmit}>
            <button className={"auth-form__btn"} type={"submit"}>
                Отправить
            </button>
        </form>
    );
};

export { SignupForm };
