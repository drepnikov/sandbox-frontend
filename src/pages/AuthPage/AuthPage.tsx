import * as React from "react";
import { AuthForm } from "@Core/components/logical/AuthForm";

import { useOnMountAnimation } from "@Features/animations/hooks/useOnMountAnimation";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";

import * as S from "./styles";

interface IProps {}

const AuthPage: React.FunctionComponent<IProps> = () => {
    const animation = useOnMountAnimation({ type: AnimationsEnum.showFromBottom });

    return (
        <div css={S.authPageContainer()}>
            <div css={S.infoBlockContainer()} />
            <div css={S.formContainer()} className={animation}>
                <AuthForm />
            </div>
        </div>
    );
};

export { AuthPage };
