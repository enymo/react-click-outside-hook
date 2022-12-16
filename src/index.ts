import { MutableRefObject, useCallback, useEffect, useRef } from "react";

export default function useOnClickOutside(onClick: (event: MouseEvent) => void) {
    const ref = useRef<HTMLElement>();

    useEffect(() => {
        const handleEvent = (event: MouseEvent) => {
            if (!ref.current?.contains(event.target as HTMLElement)) {
                onClick(event);
            }
        }

        window.addEventListener("click", handleEvent);
        return () => window.removeEventListener("click", handleEvent);
    }, [ref, onClick]);

    return ref;
}