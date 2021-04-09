import React from "react";
import ReactDOM from "react-dom";
import { App } from "./application/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./application/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import { store } from "@Store";
import { StoreContext } from "@Core/store/storeContext";

import "@Core/styles/main.scss";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
