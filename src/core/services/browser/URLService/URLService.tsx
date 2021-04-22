export interface IURLService {
    searchParamsFromObjToString: (obj: { [key: string]: any }) => string;
    searchParamsFromStringToObject: <T>(url: string) => T;
    clearURLFromSearchParams: (url: string) => string;
}

class URLService implements IURLService {
    searchParamsFromObjToString(obj: { [p: string]: any }): string {
        return new URLSearchParams(obj).toString();
    }

    searchParamsFromStringToObject<T>(url: string): T {
        return (Object.fromEntries(new URLSearchParams(url)) as unknown) as T;
    }

    clearURLFromSearchParams(url: string) {
        return url.split("?")[0];
    }
}

export { URLService };
