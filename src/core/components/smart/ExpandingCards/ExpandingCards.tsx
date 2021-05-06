import * as React from "react";
import "./ExpandingCards.scss";
import { useCurrentItem } from "@Core/hooks/useCurrentItem";
import { MouseEventHandler } from "react";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import { ExpandingItem } from "@Core/components/smart/ExpandingCards/ExpandingItem/ExpandingItem";
const { stylesHandler } = ServiceContainer;

interface IProps {
    height: string;
    items: { title: string; src: string }[];
}

const ExpandingCards: React.FC<IProps> = ({ height, items }) => {
    const classNames = {
        block: stylesHandler.getClassName("expanding-cards"),
    };

    const { isCurrent, setCurrent } = useCurrentItem(0);

    const getOnClickHandler = (identifier: string | number) => {
        const setCurrentCard: MouseEventHandler = () => {
            setCurrent(identifier);
        };

        return setCurrentCard;
    };

    return (
        <div style={{ height }} className={classNames.block}>
            {items.map((itemProps, i) => {
                return <ExpandingItem {...itemProps} onClick={getOnClickHandler(i)} current={isCurrent(i)} key={i} />;
            })}
        </div>
    );
};

export { ExpandingCards };
