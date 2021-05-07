import * as React from "react";
import * as S from "../styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassword: React.FC<IProps> = (props) => {
    return <S.StyledInputPassword type={"password"} {...props} />;
};

export { InputPassword };
