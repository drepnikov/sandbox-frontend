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
        itemTitle: stylesHandler.getClassName("expanding-item__title"),
    };

    return (
        <div onClick={onClick} className={classNames.itemBlock} style={{ backgroundImage: `url(${src})` }}>
            <h3 className={classNames.itemTitle}>{title}</h3>
        </div>
    );
};

export { ExpandingItem };
