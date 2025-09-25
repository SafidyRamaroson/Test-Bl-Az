import { useState, useEffect, useCallback } from "react";

export function useCarousel<T>(items: T[], autoPlayDelay = 5000, transitionDuration = 400) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    const goTo = useCallback((index: number) => {
        if (index >= 0 && index < items.length) {
            setCurrentIndex(index);
        }
    }, [items.length]);

    const handleNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        setTimeout(() => {
            next();
            setIsTransitioning(false);
        }, transitionDuration);
    }, [isTransitioning, next, transitionDuration]);

    // Auto-play avec pause au hover
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            if (!isTransitioning) {
                handleNext();
            }
        }, autoPlayDelay);

        return () => clearInterval(interval);
    }, [isPaused, isTransitioning, handleNext, autoPlayDelay]);

    const nextIndex = (currentIndex + 1) % items.length;
    const nextItem = items[nextIndex];

    return {
        currentIndex,
        currentItem: items[currentIndex],
        nextItem,
        next: handleNext,
        prev,
        goTo,
        isTransitioning,
        isPaused,
        setIsPaused
    };
}
