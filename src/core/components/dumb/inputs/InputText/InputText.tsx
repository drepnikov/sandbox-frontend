import * as React from "react";
import * as S from "../styles";
import { Input } from "@Core/components/dumb/inputs/Input/Input";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputText: React.FC<IProps> = (props) => {
    return <Input css={S.basicInputText()} type={"text"} {...props} />;
};

export { InputText };
