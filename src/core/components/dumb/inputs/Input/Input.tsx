import * as React from "react";
import * as S from "../styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IProps> = (props) => {
    return <input css={S.basicInput()} {...props} />;
};

export { Input };
