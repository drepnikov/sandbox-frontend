import * as React from "react";
import { Layout } from "@Core/components/Layout/Layout";
import { LayoutItem } from "@Core/components/Layout/LayoutItem/LayoutItem";
import { AuthForm } from "@Core/containers/AuthForm/AuthForm";

import { useOnMountAnimation } from "@Features/animations/hooks/useOnMountAnimation";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";

import "./AuthPage.scss";
import { ReactComponent as DocumentIcon } from "./assets/document.svg";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

interface IProps {}

const AuthPage: React.FunctionComponent<IProps> = () => {
    const animation = useOnMountAnimation({ type: AnimationsEnum.showFromBottom });
    const classNames = {
        loginPageBlock: stylesHandler.getClassName("auth-page"),
        logoElement: stylesHandler.getClassName("auth-page__logo"),
        formElement: stylesHandler.getClassName("auth-page__form", { additionalClassName: animation }),
    };

    return (
        <section className={classNames.loginPageBlock}>
            <Layout page={"auth-page"}>
                <LayoutItem>
                    <div className={classNames.logoElement}>
                        <DocumentIcon height={300} width={200} />
                    </div>
                </LayoutItem>

                <LayoutItem>
                    <div className={classNames.formElement}>
                        <AuthForm />
                    </div>
                </LayoutItem>
            </Layout>
        </section>
    );
};

export { AuthPage };
