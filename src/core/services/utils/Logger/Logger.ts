export interface ILogger {
    error: (description: string, entity: any) => void;
    info: (description: string, entity: any) => void;
}

class Logger implements ILogger {
    error(description: string, entity: any): void {
        console.error(description + ": ", entity);
    }

    info(description: string, entity: any): void {
        console.info(description + ": ", entity);
    }
}

export { Logger };
