import { types } from "mobx-state-tree";
import { SessionStore } from "./SessionStore/SessionStore";
import { createContext, useContext } from "react";

const RootStore = types.model("RootStore", {
    sessionStore: SessionStore,
});

const store = RootStore.create({
    sessionStore: {
        isAuthenticated: false,
    },
});
const StoreContext = createContext(store);

const useStore = () => {
    return useContext(StoreContext);
};

export { store, StoreContext, useStore };
