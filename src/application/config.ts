export interface IConfig {
  ROUTE_PATHS: {
    [key: string]: string;
  };

  API: {
    BASE_URL: string;

    [key: string]: string;
  };
}

const config: IConfig = {
  API: {
    BASE_URL: process.env.NODE_ENV !== "development" ? "" : "http://site-test.mailru.local",

    login: "/v1/auth/login",
  },
  ROUTE_PATHS: {
    main: "/",
    login: "/login",
  },
};

export { config };
