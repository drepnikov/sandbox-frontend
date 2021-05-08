import * as React from "react";
import * as S from "./styles";

interface IProps {
    className?: string;
}

const Navigation: React.FunctionComponent<IProps> = ({ className, children }) => {
    // присутствие параметра className обязательно, чтобы при желании можно было стилизовать этот компонент через css

    return (
        <nav css={S.navigationContainer()} className={className}>
            {children}
        </nav>
    );
};

export { Navigation };
