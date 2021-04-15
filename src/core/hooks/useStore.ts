import { useContext } from "react";
import { StoreContext } from "@Core/store/storeContext";

const useStore = () => {
    return useContext(StoreContext);
};

export { useStore };
