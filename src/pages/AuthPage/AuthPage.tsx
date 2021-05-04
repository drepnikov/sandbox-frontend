import * as React from "react";
import { AuthForm } from "@Core/containers/AuthForm/AuthForm";
import { useOnMountAnimation } from "@Features/animations/hooks/useOnMountAnimation";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";

import { DIV_FORM_CONTAINER__AUTH_PAGE, DIV_LAYOUT_INFO_BLOCK__AUTH_PAGE, DIV_MAIN_CONTAINER__AUTH_PAGE } from "./styles";

interface IProps {}

const AuthPage: React.FunctionComponent<IProps> = () => {
    const animation = useOnMountAnimation({ type: AnimationsEnum.showFromBottom });

    return (
        <DIV_MAIN_CONTAINER__AUTH_PAGE>
            <DIV_LAYOUT_INFO_BLOCK__AUTH_PAGE />
            <DIV_FORM_CONTAINER__AUTH_PAGE className={animation}>
                <AuthForm />
            </DIV_FORM_CONTAINER__AUTH_PAGE>
        </DIV_MAIN_CONTAINER__AUTH_PAGE>
    );
};

export { AuthPage };
