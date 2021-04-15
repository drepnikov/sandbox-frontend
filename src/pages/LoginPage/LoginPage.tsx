import * as React from "react";
import { Layout } from "@Core/components/Layout/Layout";
import { LayoutItem } from "@Core/components/Layout/LayoutItem/LayoutItem";
import { AuthForm } from "@Core/containers/AuthForm/AuthForm";

import { useOnMountAnimation } from "@Features/animations/hooks/useOnMountAnimation";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";

import "./LoginPage.scss";
import { ReactComponent as DocumentIcon } from "./assets/document.svg";

interface IProps {}

const LoginPage: React.FunctionComponent<IProps> = () => {
    const animation = useOnMountAnimation({ type: AnimationsEnum.showFromBottom });

    return (
        <main className={"login-page"}>
            <Layout page={"login-page"}>
                <LayoutItem>
                    <div className={"login-page__logo"}>
                        <DocumentIcon height={300} width={200} />
                    </div>
                </LayoutItem>

                <LayoutItem>
                    <div className={`login-page__form ${animation}`}>
                        <AuthForm />
                    </div>
                </LayoutItem>
            </Layout>
        </main>
    );
};

export { LoginPage };
