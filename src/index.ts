import { MutableRefObject, useCallback, useEffect } from "react";

export default function useOnClickOutside<T extends HTMLElement>(ref: MutableRefObject<T>, onClick: (event: MouseEvent) => void) {
    const handleEvent = useCallback((event: MouseEvent) => {
        if (!ref.current?.contains(event.target as HTMLElement)) {
            onClick(event);
        }
    }, [ref, onClick])

    useEffect(() => {
        window.addEventListener("click", handleEvent);
        return () => window.removeEventListener("click", handleEvent);
    }, [handleEvent]);
}