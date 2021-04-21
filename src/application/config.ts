export class Config {
    readonly ROUTE_PATHS = Object.freeze({
        main: "/",
        login: "/login",
        showcase: "/showcase",
    });

    readonly API = Object.freeze({
        BASE_URL: process.env.NODE_ENV !== "development" ? "" : "http://site-test.mailru.local",

        login: "/v1/auth/logins",
    });
}

const config = new Config();

export { config };
