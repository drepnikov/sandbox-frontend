import * as React from "react";
import * as S from "../styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputText: React.FC<IProps> = (props) => {
    return <S.StyledInputText type={"text"} {...props} />;
};

export { InputText };
