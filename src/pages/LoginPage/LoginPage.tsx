import * as React from "react";

import "./LoginPage.scss";
import { AuthForm } from "@Shared/containers/AuthForm/AuthForm";
import { Row } from "@Shared/components/Layout/Row";
import { Column } from "@Shared/components/Layout/Column";

interface IProps {}

const LoginPage: React.FunctionComponent<IProps> = () => {
    return (
        <main className={"login-page"}>
            <Row>
                <Column>
                    <div className={"login-page__logo"}>Лого</div>
                </Column>

                <Column>
                    <div className={"login-page__form"}>
                        <AuthForm />
                    </div>
                </Column>
            </Row>
        </main>
    );
};

export { LoginPage };
