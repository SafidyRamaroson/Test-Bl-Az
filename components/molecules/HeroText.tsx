import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroText() {
    return (
        <div className="lg:max-w-[422px] flex flex-col items-start z-10">
            <h1 className="font-bold text-[28px] lg:text-[48px] text-primary-foreground mt-4 md:mt-0">
                Votre évasion <span className="font-normal"><br /> sur la Côte d&apos;Azur !</span>
            </h1>
            <p className="text-sm text-justify text-primary-foreground mt-4">
                Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d&apos;exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d&apos;un séjour alliant confort, sérénité et élégance au cœur de la Riviera française !
            </p>
            <Link
                href='https://docs.google.com/forms/d/e/1FAIpQLScuvO4U3wZcAonIpDlrny3Il9wYa-X0yHKAML_MjdgvU5A_xg/viewform'
                target="_blank"
                className="inline-block"
            >
                <Button className="px-12 py-6 flex flex-row items-center justify-between rounded-full bg-transparent w-[430px] mt-16 border-2 border-primary-foreground text-primary-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer gap-2">
                    <span className="whitespace-normal break-words text-center ml-4">
                        Réservez dès maintenant votre séjour !
                    </span>
                    <CircleArrowRight className="text-primary-foreground mr-4" />
                </Button>
            </Link>
        </div>
    );
}