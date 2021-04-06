const API_PATHS = {
  BASE: process.env.NODE_ENV !== "development" ? "" : "http://site-test.mailru.local",

  login: "/v1/auth/login",
};

export { API_PATHS };
