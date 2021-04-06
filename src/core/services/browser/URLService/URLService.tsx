export interface IURLService {
  getSearchParamsStringFromObj: (obj: { [key: string]: any }) => string;
}

class URLService implements IURLService {
  getSearchParamsStringFromObj(obj: { [p: string]: any }): string {
    return new URLSearchParams(obj).toString();
  }
}

export { URLService };
