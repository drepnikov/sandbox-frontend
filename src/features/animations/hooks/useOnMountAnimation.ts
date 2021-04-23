import { useEffect, useState } from "react";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";
import { ServiceContainer } from "@Core/services/ServiceContainer";
const { stylesHandler } = ServiceContainer;

interface Params {
    type: AnimationsEnum;

    startDelay?: number;
}

const useOnMountAnimation = ({ type, startDelay = 100 }: Params) => {
    const initialClassName = stylesHandler.getClassName(`animation__${type}`);

    const [className, setClassName] = useState(initialClassName);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setClassName((current) => stylesHandler.getClassName(current, { modifier: "started" }));
        }, startDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return className;
};

export { useOnMountAnimation };
