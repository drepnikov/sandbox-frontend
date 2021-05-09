import * as React from "react";
import { AuthForm } from "@Core/components/logical/AuthForm";

import * as S from "./styles";
import { IncognitaEnter } from "@Core/components/logical/IncognitaEnter/IncognitaEnter";

interface IProps {}

const AuthPage: React.FunctionComponent<IProps> = () => {
    return (
        <div css={S.authPageContainer()}>
            <IncognitaEnter />
            <div css={S.infoBlockContainer()} />
            <div css={S.formContainer()}>
                <AuthForm />
            </div>
        </div>
    );
};

export { AuthPage };
