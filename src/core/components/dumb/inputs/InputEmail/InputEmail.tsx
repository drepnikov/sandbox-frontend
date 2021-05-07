import * as React from "react";
import * as S from "../styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputEmail: React.FC<IProps> = (props) => {
    return <S.StyledInputEmail type={"email"} {...props} />;
};

export { InputEmail };
