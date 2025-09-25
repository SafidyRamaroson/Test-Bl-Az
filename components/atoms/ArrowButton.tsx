"use client";

import { ChevronRight } from "lucide-react";

interface ArrowButtonProps {
    onClick: () => void;
    isTransitioning?: boolean;
    className?: string;
}

export function ArrowButton({ onClick, isTransitioning = false, className }: ArrowButtonProps) {

    return (
        <button
            onClick={onClick}
            disabled={isTransitioning}
            className={`absolute top-1/2 right-2 -translate-y-1/2 z-10
        border-2 border-primary-foreground backdrop-blur-sm p-1 rounded-full shadow-lg
        transition-all duration-300 ease-out
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        max-md:hidden
        cursor-pointer
        ${isTransitioning ? "animate-pulse" : "hover:animate-bounce"}
        ${className}
      `}
        >
            <ChevronRight size={20} className="text-primary-foreground" />
        </button>
    );
}
