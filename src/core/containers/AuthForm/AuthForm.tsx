import * as React from "react";
import { Navigation } from "@Core/components/Navigation/Navigation";
import { NavigationTab } from "@Core/components/Navigation/NavigationTab/NavigationTab";
import { SigninForm } from "./SigninForm/SigninForm";
import { SignupForm } from "./SignupForm/SignupForm";
import "./AuthForm.scss";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import { config } from "@App/config";
import { Route, Switch } from "react-router-dom";
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

    return (
        <div className={classNames.block}>
            <Navigation className={classNames.navigationElement}>
                <NavigationTab to={config.ROUTE_PATHS.authSignin} title={tabs.signin} />
                <NavigationTab to={config.ROUTE_PATHS.authSignup} title={tabs.signup} />
            </Navigation>

            <Switch>
                <Route path={config.ROUTE_PATHS.authSignin} component={SigninForm} />
                <Route path={config.ROUTE_PATHS.authSignup} component={SignupForm} />
            </Switch>
        </div>
    );
};

export { AuthForm };
