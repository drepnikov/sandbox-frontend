import * as React from "react";
import "../ExpandingCards.scss";
import { MouseEventHandler } from "react";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

export interface IExpandingItemProps {
    current: boolean;
    title: string;
    src: string;
    onClick: MouseEventHandler;
}

const ExpandingItem: React.FC<IExpandingItemProps> = ({ title, src, current, onClick }) => {
    const classNames = {
        itemBlock: stylesHandler.getClassName("expanding-item", { current }),
    };

    return (
        <div onClick={onClick} className={classNames.itemBlock} style={{ backgroundImage: `url(${src})` }}>
            <h3 className={"expanding-item__title"}>{title}</h3>
        </div>
    );
};

export { ExpandingItem };
