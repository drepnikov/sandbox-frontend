import * as React from "react";
import * as S from "./styles";
import { ReactComponent as SpyIcon } from "./assets/spy.svg";
import { useCallback } from "react";

interface IProps {}

const IncognitaEnter: React.FC<IProps> = () => {
    const onClick = useCallback(() => {}, []);

    return (
        <div onClick={onClick} css={S.incognitaEnterContainer()}>
            <span css={S.incognitoEnterTitle()}>Анонимно</span>
            <SpyIcon css={S.incognitaEnterIcon()} />
        </div>
    );
};

export { IncognitaEnter };
