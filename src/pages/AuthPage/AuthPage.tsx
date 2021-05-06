import * as React from "react";
import { AuthForm } from "@Core/containers/AuthForm/AuthForm";
import { useOnMountAnimation } from "@Features/animations/hooks/useOnMountAnimation";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";

import * as S from "./styles";

interface IProps {}

const AuthPage: React.FunctionComponent<IProps> = () => {
    const animation = useOnMountAnimation({ type: AnimationsEnum.showFromBottom });

    return (
        <S.StyledAuthPageContainer>
            <S.StyledInfoBlockContainer />
            <S.StyledFormContainer className={animation}>
                <AuthForm />
            </S.StyledFormContainer>
        </S.StyledAuthPageContainer>
    );
};

export { AuthPage };
