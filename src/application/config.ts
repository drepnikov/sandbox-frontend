export class Config {
    readonly ROUTE_PATHS = Object.freeze({
        main: "/",

        authSignin: "/auth/signin",
        authSignup: "/auth/signup",

        showcase: "/showcase",
    });

    readonly API = Object.freeze({
        BASE_URL: process.env.NODE_ENV !== "development" ? "" : "http://site-test.mailru.local",

        login: "/v1/auth/logins",
    });
}

const config = new Config();

export { config };
