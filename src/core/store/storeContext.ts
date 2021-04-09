import { createContext } from "react";
import { store } from "@Store";

const StoreContext = createContext(store);

export { StoreContext };
