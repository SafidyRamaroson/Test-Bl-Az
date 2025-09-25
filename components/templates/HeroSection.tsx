"use client"

import { Header } from "../organims/Header";
import Image from "next/image";
import { SocialSidebar } from "../molecules/SocialSidebar";
import { useCallback, useEffect, useState } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import { HeroText } from "../molecules/HeroText";
import { HeroImage } from "../organims/HeroImage";

const images = [
    { src: "/residence-pierre-vacances-la-corniche-d-or.avif", alt: "residence" },
    { src: "/TensorPix-Chambre.webp", alt: "chambre" },
    { src: "/TensorPix-Cuisine.webp", alt: "cuisine" },
];
export function HeroSection() {
    const { currentItem, nextItem, next } = useCarousel(images);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused] = useState(false);

    const handleNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            next();
            setIsTransitioning(false);
        }, 400);
    }, [isTransitioning, next]);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [handleNext, isPaused]);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <Image
                src="/hero-image.avif"
                alt="Vue sur la Côte d'Azur"
                fill
                priority
                quality={70}
                className="object-cover object-center"
                sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/5 z-0"></div>

            <Header />
            <SocialSidebar />

            {/* Content */}
            <div className="relative w-11/12 lg:w-3/4 mx-auto z-10 flex justify-start">
                <HeroText />
            </div>

            <HeroImage
                image={currentItem}
                nextImage={nextItem}
                isTransitioning={isTransitioning}
                onNext={handleNext}
            />
        </div>
    );
}