"use client"

import { Header } from "../organims/Header";
import { CircleArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { SocialSidebar } from "../molecules/SocialSidebar";
import { useEffect, useState } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import { useMobile } from "@/hooks/useMobile";

export function HeroSection() {
    const images = [
        { src: "/residence-pierre-vacances-la-corniche-d-or.avif", alt: "residence" },
        { src: "/TensorPix-Chambre.webp", alt: "chambre" },
        { src: "/TensorPix-Cuisine.webp", alt: "cuisine" },
    ];

    const { currentItem, nextItem, next } = useCarousel(images);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const isMobile = useMobile();

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            next();
            setIsTransitioning(false);
        }, 400);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            if (!isTransitioning) handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, isTransitioning]);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background image */}
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

            {/* Texte */}
            <div className="relative w-11/12 lg:w-3/4 min-h-screen mx-auto flex flex-col justify-center items-start z-10">
                <h1 className="font-bold text-[28px] lg:text-[48px] text-primary-foreground mt-4 md:mt-32 lg:mt-36 xl:mt-44">
                    Votre évasion <span className="font-normal"> <br /> sur la Côte d&apos;Azur !</span>
                </h1>
                <p className="text-sm text-justify text-primary-foreground">
                    Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une <br />
                    destination d&apos;exception nichée entre Cannes et Saint-Tropez. <br />
                    Nos appartements tout équipés, situés dans un domaine privé <br />
                    sécurisé, offrent un cadre verdoyant et paisible, à quelques pas <br />
                    de la marina de Santa Lucia, des plages de sable fin et du <br />
                    centre-ville animé. Profitez d&apos;un séjour alliant confort, sérénité et <br />
                    élégance au cœur de la Riviera française !
                </p>
                <Button className="px-8 py-5 rounded-full mt-16 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer">
                    <span className="whitespace-normal break-words flex-1 text-center">
                        Réservez dès maintenant votre séjour !
                    </span>
                    <CircleArrowRight className="text-primary-foreground size-4 ml-2" />
                </Button>
            </div>

            {/* Animated hero images */}
            <div
                className="relative gap-4  md:absolute md:bottom-10 md:-right-16 md:flex md:flex-row-reverse z-10 md:gap-4 overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Image principale animée */}
                <div className={`
                    relative w-full flex flex-row mb-4 items-center justify-center md:w-[300px] h-[201px] rounded-2xl shadow-lg overflow-hidden
                    transition-all duration-500 ease-in-out
                    ${isTransitioning
                        ? "transform -translate-x-2 scale-95 opacity-80 blur-[1px]"
                        : "transform translate-x-0 scale-100 opacity-100 blur-0"
                    }
                `}>
                    <div className="relative overflow-hidden rounded-2xl w-[300px] h-[201px]">
                        <Image
                            src={currentItem.src}
                            alt={currentItem.alt}
                            width={698}
                            height={468}
                            className="w-full h-full object-cover transition-transform duration-500"
                        />

                        {/* Bouton fleche */}
                        <button
                            onClick={handleNext}
                            disabled={isTransitioning}
                            className={`absolute top-1/2 right-2 -translate-y-1/2 z-10
                            bg-white/90 backdrop-blur-sm text-black p-2 rounded-full shadow-lg
                            transition-all duration-300 ease-out
                            hover:bg-white hover:scale-110 hover:shadow-xl
                            active:scale-95
                            disabled:opacity-50 disabled:cursor-not-allowed
                            md:hidden
                            ${isTransitioning ? "animate-pulse" : "hover:animate-bounce"}
                            `}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Image secondaire - CORRECTION COMPLÈTE DU DÉBORDEMENT */}
                {!isMobile && (<div className="relative md:w-[300px] h-[201px] rounded-2xl shadow-lg overflow-hidden">
                    {/* Wrapper interne pour les transformations */}
                    <div className={`
                        relative w-full h-full overflow-hidden rounded-2xl
                        transition-all duration-500 ease-in-out
                        ${isTransitioning
                            ? "translate-x-1 scale-105 opacity-90"
                            : "translate-x-0 scale-100 opacity-100"
                        }
                    `}>
                        {/* Image strictement contenue */}
                        <Image
                            src={nextItem.src}
                            alt={nextItem.alt}
                            width={698}
                            height={468}
                            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110 md:block hidden"
                        />

                        {/* Overlay avec gradient animé */}
                        <div className={`
                            absolute inset-0 z-0 transition-all duration-500
                            ${isTransitioning
                                ? "bg-gradient-to-l from-black/30 to-black/50"
                                : "bg-gradient-to-l from-black/10 to-black/30"
                            }
                        `} />

                        {/* Bouton flèche */}
                        <button
                            onClick={handleNext}
                            disabled={isTransitioning}
                            className={`absolute top-1/2 right-2 -translate-y-1/2 z-10
                                bg-white/90 backdrop-blur-sm text-black p-2 rounded-full shadow-lg
                                transition-all duration-300 ease-out
                                hover:bg-white hover:scale-110 hover:shadow-xl
                                active:scale-95
                                disabled:opacity-50 disabled:cursor-not-allowed
                                max-md:hidden
                                ${isTransitioning ? "animate-pulse" : "hover:animate-bounce"}
                            `}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}