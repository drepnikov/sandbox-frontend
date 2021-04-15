import { useEffect, useState } from "react";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";

interface Params {
    type: AnimationsEnum;

    startDelay?: number;
}

const useOnMountAnimation = ({ type, startDelay = 100 }: Params) => {
    let initialClassName: string = `animation__${type}`;

    const [className, setClassName] = useState(initialClassName);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setClassName((current) => `${current} ${current}--init`);
        }, startDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return className;
};

export { useOnMountAnimation };
