import * as React from "react";
import { NavigationTab } from "@Core/components/Navigation/NavigationTab/NavigationTab";
import { SigninForm } from "./SigninForm/SigninForm";
import { SignupForm } from "./SignupForm/SignupForm";
import { config } from "@App/config";
import { Route, Switch } from "react-router-dom";
import { DIV_MAIN_CONTAINER__AUTH_FORM, NAVIGATION__AUTH_FORM } from "./styles";

interface IProps {}

const tabs = Object.freeze({
    signin: "Войти",
    signup: "Зарегистрироваться",
});

const AuthForm: React.FunctionComponent<IProps> = () => {
    return (
        <DIV_MAIN_CONTAINER__AUTH_FORM>
            <NAVIGATION__AUTH_FORM>
                <NavigationTab to={config.ROUTE_PATHS.authSignin} title={tabs.signin} />
                <NavigationTab to={config.ROUTE_PATHS.authSignup} title={tabs.signup} disabled />
            </NAVIGATION__AUTH_FORM>

            <Switch>
                <Route path={config.ROUTE_PATHS.authSignin} component={SigninForm} />
                <Route path={config.ROUTE_PATHS.authSignup} component={SignupForm} />
            </Switch>
        </DIV_MAIN_CONTAINER__AUTH_FORM>
    );
};

export { AuthForm };
