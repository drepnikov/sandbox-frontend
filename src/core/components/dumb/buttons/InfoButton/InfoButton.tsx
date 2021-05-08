import * as React from "react";
import * as S from "../styles";
import { Button } from "@Core/components/dumb/buttons/Button/Button";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const InfoButton: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <Button css={S.infoButton()} {...props}>
            {children}
        </Button>
    );
};

export { InfoButton };
