import * as React from "react";
import { LoginForm } from "@Pages/LoginPage/containers/LoginForm/LoginForm";

import "./LoginPage.scss";

interface IProps {}

const LoginPage: React.FunctionComponent<IProps> = () => {
    return (
        <div className={"login-page"}>
            <div className={"login-page__logo"}>Лого</div>
            <div className={"login-page__form"}>
                <LoginForm />
            </div>
        </div>
    );
};

export { LoginPage };
