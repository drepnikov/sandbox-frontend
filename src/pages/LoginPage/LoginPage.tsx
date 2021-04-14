import * as React from "react";

import { AuthForm } from "@Shared/containers/AuthForm/AuthForm";
import { Layout } from "@Shared/components/Layout/Layout";

import "./LoginPage.scss";
import { ReactComponent as DocumentIcon } from "./assets/document.svg";
import { LayoutItem } from "@Shared/components/Layout/LayoutItem/LayoutItem";

interface IProps {}

const LoginPage: React.FunctionComponent<IProps> = () => {
    return (
        <main className={"login-page"}>
            <Layout page={"login-page"}>
                <LayoutItem>
                    <div className={"login-page__logo"}>
                        <DocumentIcon height={300} width={200} />
                    </div>
                </LayoutItem>

                <LayoutItem>
                    <div className={"login-page__form"}>
                        <AuthForm />
                    </div>
                </LayoutItem>
            </Layout>
        </main>
    );
};

export { LoginPage };
