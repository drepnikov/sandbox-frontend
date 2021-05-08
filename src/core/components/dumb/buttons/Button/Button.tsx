import * as React from "react";
import * as S from "../styles";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <button css={S.basicButton()} {...props}>
            {children}
        </button>
    );
};

export { Button };
