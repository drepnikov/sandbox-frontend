import * as React from "react";
import "./Showcase.scss";

// ExpandingCards
import eva1 from "./assets/eva_1.jpg";
import eva2 from "./assets/eva_2.jpg";
import eva3 from "./assets/eva_3.jpg";
import eva4 from "./assets/eva_4.jpg";
import eva5 from "./assets/eva_5.jpg";


import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

const ExpandingCardsItems = [
    { title: "Eva on the kitchen", src: eva1 },
    { title: "Eva sees something", src: eva2 },
    { title: "Eva looks at you", src: eva3 },
    { title: "Eva is a black widow", src: eva4 },
    { title: "Eva Green so green", src: eva5 },
];

interface IProps {}

const Showcase: React.FunctionComponent<IProps> = () => {
    const classNames = {
        showcasePageBlock: stylesHandler.getClassName("showcase-page"),
    };

    return null;
};

export { Showcase };
