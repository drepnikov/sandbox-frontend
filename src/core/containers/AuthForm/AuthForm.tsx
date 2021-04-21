import * as React from "react";
import { useState } from "react";

import { Navigation } from "@Core/components/Navigation/Navigation";
import { NavigationTab } from "@Core/components/Navigation/NavigationTab/NavigationTab";
import { SigninForm } from "./SigninForm/SigninForm";
import { SignupForm } from "./SignupForm/SignupForm";
import "./AuthForm.scss";

interface IProps {}

const AuthForm: React.FunctionComponent<IProps> = () => {
    const tabs = {
        signin: "Войти",
        signup: "Зарегистрироваться",
    };

    const [activeTab, setActiveTab] = useState(tabs.signin);

    const getForm = () => {
        if (activeTab === tabs.signin) return <SigninForm />;
        if (activeTab === tabs.signup) return <SignupForm />;
    };

    return (
        <div className={"auth-form"}>
            <Navigation className={"auth-form__nav"}>
                <NavigationTab
                    title={tabs.signin}
                    current={activeTab === tabs.signin}
                    setActive={() => {
                        setActiveTab(tabs.signin);
                    }}
                />
                <NavigationTab
                    title={tabs.signup}
                    current={activeTab === tabs.signup}
                    setActive={() => {
                        setActiveTab(tabs.signup);
                    }}
                    disabled
                />
            </Navigation>

            {getForm()}
        </div>
    );
};

export { AuthForm };
