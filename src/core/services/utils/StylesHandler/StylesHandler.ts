interface ClassNames {
    disabled?: boolean;
    current?: boolean;
    modifier?: string;
    additionalClassName?: string;
}

class StylesHandler {
    getClassName(main: string, { disabled, current, modifier, additionalClassName }: ClassNames = {}) {
        let className = main;

        if (disabled) className += ` ${className}--disabled`;
        if (current) className += ` ${className}--current`;
        if (modifier) className += ` ${className}--${modifier}`;

        if (additionalClassName) className += ` ${additionalClassName}`;

        return className;
    }
}

export { StylesHandler };
