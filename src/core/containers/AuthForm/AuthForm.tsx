import * as React from "react";
import { SigninForm } from "./SigninForm/SigninForm";
import { SignupForm } from "./SignupForm/SignupForm";
import { config } from "@App/config";
import { Route, Switch } from "react-router-dom";
import * as S from "./styles";
import { NavigationTab } from "@Core/components/smart/Navigation/NavigationTab/NavigationTab";

interface IProps {}

const tabs = Object.freeze({
    signin: "Войти",
    signup: "Зарегистрироваться",
});

const AuthForm: React.FunctionComponent<IProps> = () => {
    return (
        <S.MainContainer>
            <S.AuthNavigation>
                <NavigationTab to={config.ROUTE_PATHS.authSignin} title={tabs.signin} />
                <NavigationTab to={config.ROUTE_PATHS.authSignup} title={tabs.signup} disabled />
            </S.AuthNavigation>

            <Switch>
                <Route path={config.ROUTE_PATHS.authSignin} component={SigninForm} />
                <Route path={config.ROUTE_PATHS.authSignup} component={SignupForm} />
            </Switch>
        </S.MainContainer>
    );
};

export { AuthForm };
