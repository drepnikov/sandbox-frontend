import * as React from "react";
import { useCallback } from "react";
import { Navigation } from "@Core/components/Navigation/Navigation";
import { NavigationTab } from "@Core/components/Navigation/NavigationTab/NavigationTab";
import { SigninForm } from "./SigninForm/SigninForm";
import { SignupForm } from "./SignupForm/SignupForm";
import "./AuthForm.scss";
import { useCurrentItem } from "@Core/hooks/useCurrentItem";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

interface IProps {}

const tabs = Object.freeze({
    signin: "Войти",
    signup: "Зарегистрироваться",
});

const AuthForm: React.FunctionComponent<IProps> = () => {
    const classNames = {
        block: stylesHandler.getClassName("auth-form"),
        navigationElement: stylesHandler.getClassName("auth-form__nav"),
    };

    const { isCurrent, setCurrent } = useCurrentItem(tabs.signin);

    const getForm = () => {
        if (isCurrent(tabs.signin)) return <SigninForm />;
        if (isCurrent(tabs.signup)) return <SignupForm />;
    };

    const setSigninForm = useCallback(() => {
        setCurrent(tabs.signin);
    }, [setCurrent]);
    const setSignupForm = useCallback(() => {
        setCurrent(tabs.signup);
    }, [setCurrent]);

    return (
        <div className={classNames.block}>
            <Navigation className={classNames.navigationElement}>
                <NavigationTab title={tabs.signin} current={isCurrent(tabs.signin)} setActive={setSigninForm} />
                <NavigationTab title={tabs.signup} current={isCurrent(tabs.signup)} setActive={setSignupForm} disabled />
            </Navigation>

            {getForm()}
        </div>
    );
};

export { AuthForm };
