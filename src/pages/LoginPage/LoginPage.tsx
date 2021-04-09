import * as React from "react";

import "./LoginPage.scss";
import { AuthForm } from "@Shared/containers/AuthForm/AuthForm";

interface IProps {}

const LoginPage: React.FunctionComponent<IProps> = () => {
    return (
        <div className={"login-page"}>
            <div className={"login-page__logo"}>Лого</div>
            <div className={"login-page__form"}>
                <AuthForm />
            </div>
        </div>
    );
};

export { LoginPage };
