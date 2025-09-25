'use client'

import Image from "next/image"
import { BulletListItem } from "../atoms/BulletListItem"
import { useEffect, useState } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import { ArrowButton } from "../atoms/ArrowButton";

export function ApartmemtSection() {
    const apartments = [
        {
            src: "/TensorPix-Chambre.webp",
            alt: "residence"
        },
        {
            src: "/TensorPix-Cuisine.webp",
            alt: "residence"
        },
        {
            src: "/TensorPix-Espace-sjour.webp",
            alt: "cap dramont"
        },
        {
            src: "/TensorPix-Salle-de-bain.webp",
            alt: "pic de lourse"
        },
        {
            src: "/TensorPix-Terrasse.webp",
            alt: "residence"
        },
        {
            src: "/TensorPix-Salon-2e-chambre.webp",
            alt: "residence"
        }
    ]

    const { currentItem, nextItem, next } = useCarousel(apartments);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return; // Évite les clics multiples

        setIsTransitioning(true);

        // Délai plus fluide pour la transition
        setTimeout(() => {
            next();
            setIsTransitioning(false);
        }, 400);
    };

    // Auto-play avec pause au hover
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            if (!isTransitioning) {
                handleNext();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, isTransitioning]);

    return (
        <div className="relative bg-white py-12 min-h-screen flex items-center">
            {/* wrapper */}
            <div className="ml-[15px] md:ml-[90px] lg:ml-[188px] flex flex-col lg:flex-row max-lg:gap-y-10 items-center justify-between">
                {/* description */}
                <div className="max-w-full lg:max-w-[555px] text-justify lg:text-left">
                    <h2 className="font-normal text-[#121212]">
                        Le confort et la sérénité d&apos;un <br />
                        <span className="font-bold">appartement privé</span>
                    </h2>
                    <p className="text-[##020202] text-sm my-4 font-normal">
                        Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.
                    </p>

                    {/* Inclusions list */}
                    <h3 className="font-normal text-lg sm:text-xl mt-2 mb-4">Les inclusions :</h3>
                    <ul className="space-y-2 text-sm">
                        <BulletListItem label="Stationnement privé" />
                        <BulletListItem label="Piscine extérieure avec chaises longues" />
                        <BulletListItem label="Linge de lit et serviettes" />
                        <BulletListItem label="Télévision, téléphone et Wi-Fi (accès au salon)" />
                        <BulletListItem label="Réfrigérateur, cuisinière, lave-vaisselle, vaisselle" />
                        <BulletListItem label="Kit bébé: comprend un lit parapluie avec un vrai matelas et une chaise haute" />
                        <BulletListItem label="Autres commodités en prêt à la réception: jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants." />
                    </ul>
                </div>

                {/* Animated hero images */}
                <div
                    className="relative xl:absolute xl:right-0 flex flex-col md:flex-row items-center gap-[10px] overflow-hidden rounded-2xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Première image : currentItem */}
                    <div className={`
                        relative w-full max-w-[421px] h-auto md:h-[538px] rounded-2xl overflow-hidden
                        transition-all duration-500 ease-in-out
                        ${isTransitioning
                            ? "transform -translate-x-2 scale-95 opacity-80 blur-[1px]"
                            : "transform translate-x-0 scale-100 opacity-100 blur-0"
                        }
                    `}>
                        <Image
                            src={currentItem.src}
                            alt={currentItem.alt}
                            width={421}
                            height={538}
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 shrink-0"
                        />

                        <ArrowButton
                            onClick={handleNext}
                            isTransitioning={isTransitioning}
                        />

                        {/* Indicateur de progression */}
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            {apartments.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${apartments.findIndex(apt => apt.src === currentItem.src) === index
                                        ? "bg-white scale-125"
                                        : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Deuxième image : nextItem */}
                    <div className={`
                        relative w-full max-w-[200px] h-[431px] overflow-hidden rounded-tl-2xl rounded-bl-2xl
                        transition-all duration-500 ease-in-out transform-gpu
                        blur-[1px]
                        sm:block hidden

                        ${isTransitioning
                            ? "translate-x-1 scale-105 opacity-90"
                            : "translate-x-0 scale-100 opacity-100"
                        }
                        hover:scale-105 hover:shadow-2xl
                    `}>
                        <Image
                            src={nextItem.src}
                            alt={nextItem.alt}
                            width={300}
                            height={1001}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />

                        {/* Overlay avec gradient animé */}
                        <div className={`
                            absolute inset-0 z-0 transition-all duration-500
                            ${isTransitioning
                                ? "bg-gradient-to-l from-black/30 to-black/50"
                                : "bg-gradient-to-l from-black/10 to-black/30"
                            }
                        `}></div>

                        <ArrowButton
                            onClick={handleNext}
                            isTransitioning={isTransitioning}
                        />

                        {/* Loading indicator pendant la transition */}
                        {isTransitioning && (
                            <div className="absolute top-2 right-2 z-10">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}