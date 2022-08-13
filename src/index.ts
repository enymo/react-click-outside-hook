import { MutableRefObject, useEffect } from "react";

export default function useOnClickOutside<T extends HTMLElement>(ref: MutableRefObject<T>, onClick: (event: MouseEvent) => void) {
    const handleEvent = (event: MouseEvent) => {
        if (!ref.current?.contains(event.target as HTMLElement)) {
            onClick(event);
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleEvent);
        return () => window.removeEventListener("click", handleEvent);
    }, []);
}