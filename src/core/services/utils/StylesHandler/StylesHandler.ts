export interface IStylesService {
    getClassName: (main: string, params?: Params) => string;
}

interface Params {
    disabled?: boolean;
    current?: boolean;
    modifier?: string;
    additionalClassName?: string;
}

class StylesHandler implements IStylesService {
    getClassName(main: string, { disabled, current, modifier, additionalClassName }: Params = {}) {
        let className = main;

        if (disabled) className += ` ${className}--disabled`;
        if (current) className += ` ${className}--current`;
        if (modifier) className += ` ${className}--${modifier}`;

        if (additionalClassName) className += ` ${additionalClassName}`;

        return className;
    }
}

export { StylesHandler };
