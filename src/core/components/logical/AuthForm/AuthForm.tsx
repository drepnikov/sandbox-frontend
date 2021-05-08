import * as React from "react";
import { SigninForm } from "./SigninForm/SigninForm";
import { SignupForm } from "./SignupForm/SignupForm";
import { config } from "@App/config";
import { Route, Switch } from "react-router-dom";
import * as S from "./styles";
import { Navigation } from "@Core/components/smart/Navigation/Navigation";
import { NavigationTab } from "@Core/components/smart/Navigation/NavigationTab/NavigationTab";

interface IProps {}

const tabs = Object.freeze({
    signin: "Войти",
    signup: "Зарегистрироваться",
});

const AuthForm: React.FunctionComponent<IProps> = () => {
    return (
        <div css={S.authFormContainer()}>
            <Navigation css={S.authNavigation()}>
                <NavigationTab css={S.authNavigationTab()} to={config.ROUTE_PATHS.authSignin} title={tabs.signin} />
                <NavigationTab css={S.authNavigationTab()} to={config.ROUTE_PATHS.authSignup} title={tabs.signup} />
            </Navigation>

            <Switch>
                <Route path={config.ROUTE_PATHS.authSignin} component={SigninForm} />
                <Route path={config.ROUTE_PATHS.authSignup} component={SignupForm} />
            </Switch>
        </div>
    );
};

export { AuthForm };
