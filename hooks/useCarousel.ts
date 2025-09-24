import { useState } from "react";

export function useCarousel<T>(items: T[]) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goTo = (index: number) => {
        if (index >= 0 && index < items.length) {
            setCurrentIndex(index);
        }
    };

    const nextIndex = (currentIndex + 1) % items.length;
    const nextItem = items[nextIndex];

    return {
        currentIndex,
        currentItem: items[currentIndex],
        nextItem,
        next,
        prev,
        goTo,
    };
}
