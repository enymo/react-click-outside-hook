import React, { useEffect, useRef } from "react";

export default function useOnClickOutside<T extends HTMLElement>(onClick: (event: MouseEvent) => void, dependencies: React.DependencyList = []) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleEvent = (event: MouseEvent) => {
            if (!ref.current?.contains(event.target as HTMLElement)) {
                onClick(event);
            }
        }

        window.addEventListener("click", handleEvent);
        return () => window.removeEventListener("click", handleEvent);
    }, [ref, ...dependencies]);

    return ref;
}