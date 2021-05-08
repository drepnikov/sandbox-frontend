import * as React from "react";
import { Button } from "@Core/components/dumb/buttons/Button/Button";
import * as S from "../styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DangerButton: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <Button css={S.dangerButton()} {...props}>
            {children}
        </Button>
    );
};

export { DangerButton };
