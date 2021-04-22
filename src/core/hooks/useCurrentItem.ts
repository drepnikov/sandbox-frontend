import { useState } from "react";

const useCurrentItem = (initialIdentifier: string | number) => {
    const [currentIdentifier, setCurrentIdentifier] = useState(initialIdentifier);

    return {
        isCurrent: (identifier: string | number) => currentIdentifier === identifier,
        setCurrent: (identifier: string | number) => setCurrentIdentifier(identifier),
    };
};

export { useCurrentItem };
