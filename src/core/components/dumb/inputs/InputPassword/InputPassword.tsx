import * as React from "react";
import * as S from "../styles";
import { Input } from "@Core/components/dumb/inputs/Input/Input";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassword: React.FC<IProps> = (props) => {
    return <Input css={S.basicInputPassword()} type={"password"} {...props} />;
};

export { InputPassword };
