export interface IStylesService {
    getClassName: (main: string, params?: Params) => string;
}

interface Params {
    disabled?: boolean;
    current?: boolean;
    isOn?: boolean;
    modifier?: string;
    additionalClassName?: string;
}

class StylesHandler implements IStylesService {
    getClassName(main: string, { disabled, current, modifier, additionalClassName, isOn }: Params = {}) {
        let className = main;

        if (disabled) className += ` ${className}--disabled`;
        if (current) className += ` ${className}--current`;

        if (isOn) {
            className += ` ${className}--on`;
        } else if (isOn === false) {
            className += ` ${className}--off`;
        }

        if (modifier) className += ` ${className}--${modifier}`;

        if (additionalClassName) className += ` ${additionalClassName}`;

        return className;
    }
}

export { StylesHandler };
