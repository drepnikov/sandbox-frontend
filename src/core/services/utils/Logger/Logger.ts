export interface ILogger {
    error: (description: string, entity?: any) => void;
    info: (description: string, entity?: any) => void;
}

class Logger implements ILogger {
    error(description: string, entity?: any): void {
        if (!entity) {
            console.error(description);
        } else {
            console.error(description + ": ", entity);
        }
    }

    info(description: string, entity?: any): void {
        if (!entity) {
            console.info(description);
        } else {
            console.info(description + ": ", entity);
        }
    }
}

export { Logger };
