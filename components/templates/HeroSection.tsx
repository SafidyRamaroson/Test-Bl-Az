import Link from "next/link";
import { Header } from "../organims/Header";
import { CircleArrowRight, FacebookIcon, InstagramIcon, TwitterIcon, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function HeroSection() {
    return (
        <div className="relative min-h-screen">
            <Image
                src="/hero-image.avif"
                alt="Vue sur la Côte d’Azur"
                fill
                priority
                quality={70}
                className="object-cover object-center"
                sizes="100vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/5 z-0"></div>
            <Header />

            {/* Aside social links */}
            <div className="w-[75px] h-full absolute top-0 left-0 bg-[#4097FF]/60 flex flex-col justify-end items-center gap-y-6 pb-[87px]">
                <Link href='#' target="_blank" aria-label="facebook">
                    <FacebookIcon className="text-white size-6 mx-auto" />
                </Link>
                <Link href='#' target="_blank" aria-label="youtube">
                    <Youtube className="text-white size-6 mx-auto !opacity-100" />
                </Link>
                <Link href='#' target="_blank" aria-label="twitter">
                    <TwitterIcon className="text-white size-6 mx-auto" />
                </Link>
                <Link href='#' target="_blank" aria-label="instagram">
                    <InstagramIcon className="text-white size-6 mx-auto" />
                </Link>
            </div>

            {/* Hero text */}
            <div className="relative w-11/12 lg:w-3/4 min-h-screen mx-auto flex flex-col justify-center items-start z-10">
                <h1 className="font-bold text-[48px] text-primary-foreground mt-44">Votre évasion <span className="font-normal"> <br /> sur la Côte d’Azur !</span></h1>
                <p className="text-sm text-justify text-primary-foreground">Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une <br /> destination d’exception nichée entre Cannes et Saint-Tropez. <br /> Nos appartements tout équipés, situés dans un domaine privé <br /> sécurisé, offrent un cadre verdoyant et paisible, à quelques pas <br /> de la marina de Santa Lucia, des plages de sable fin et du <br /> centre-ville animé. Profitez d’un séjour alliant confort, sérénité et <br /> élégance au cœur de la Riviera française !</p>
                <Button className="px-8 py-5 rounded-full mt-16 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer">
                    Réservez dès maintenant votre séjour
                    <CircleArrowRight className="text-primary-foreground size-4 ml-2" />
                </Button>
            </div>

            {/* Animated hero images */}
            {/* <div className="absolute bottom-10 right-10 z-10 flex gap-4">
                <Image
                    src="/residence-pierre-vacances-la-corniche-d-or.avif"
                    alt="residence-pierre-vacances-la-corniche-d-or"
                    width={698}
                    height={468}
                    className="w-[300px] h-[201px] rounded-2xl shadow-lg"
                />
                <Image
                    src="/residence-pierre-vacances-la-corniche-d-or.avif"
                    alt="residence-pierre-vacances-la-corniche-d-or"
                    width={698}
                    height={468}
                    className="w-[300px] h-[201px] rounded-2xl shadow-lg"
                />
            </div> */}
        </div>
    )
}