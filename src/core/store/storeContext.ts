import { createContext } from "react";
import { store } from "@Core/store/store";

const StoreContext = createContext(store);

export { StoreContext };
