"use client"

import { Header } from "../organims/Header";
import Image from "next/image";
import { SocialSidebar } from "../molecules/SocialSidebar";
import { useCarousel } from "@/hooks/useCarousel";
import { HeroText } from "../molecules/HeroText";
import { HeroImage } from "../organims/HeroImage";

const heroImages = [
    { src: "/TensorPix-Piscine.webp", alt: "TensorPix-Piscine" },
    { src: "/TensorPix-Piscine2.webp", alt: "TensorPix-Piscine2" },
    { src: "/TensorPix-Piscine3.webp", alt: "TensorPix-Piscine3" },
    { src: "/TensorPix-Piscine-4-1.webp", alt: "TensorPix-Piscine-4-1" },
    { src: "/TensorPix-Piscine-5.webp", alt: "TensorPix-Piscine-5" },
    { src: "/TensorPix-Jardins.webp", alt: "TensorPix-Jardins" },
    { src: "/TensorPix-residence-pierre-vacances-la-corniche-d-or.webp", alt: "TensorPix-residence-pierre-vacances-la-corniche-d-or" },
];

export function HeroSection() {
    const { currentItem, nextItem, isTransitioning, next } = useCarousel(heroImages);
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


            <div className="relative w-11/12 lg:w-3/4 mx-auto z-10 flex flex-col justify-center items-start min-h-screen">
                <HeroText />
            </div>

            <HeroImage
                image={currentItem}
                nextImage={nextItem}
                isTransitioning={isTransitioning}
                onNext={next}
            />
        </div>
    );
}