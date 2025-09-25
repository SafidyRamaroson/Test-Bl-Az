import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import { MapImage } from "../molecules/MapImage";
import Link from "next/link";


export function BluAzurLocalisationSection() {
    return (
        <section id="localisation" className="bg-[url('/blu-azur-localisation-background.webp')] min-h-screen bg-cover bg-center py-8  md:py-12 lg:py-24">
            {/* wrapper */}
            <div className="w-11/12 lg:w-3/4 mx-auto grid grid-cols-1 gap-x-[20px] md:grid-cols-2 md:gap-[80px] xl:gap-[234px] justify-center items-center">
                {/* Blu azur localisation */}
                <div className="text-justify text-[#121212] mb-[21px]">
                    <h2 className="font-normal">Où se trouve Blu Azur à <br className="max-md:hidden" /> <span className="font-bold">Saint-Raphaël ?</span> </h2>
                    <p className="text-[#020202] text-sm font-bold my-[21px]">Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l&apos;une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d&apos;arrêt d&apos;autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.</p>
                    {/* how to get there */}
                    <Link
                        href='https://drive.google.com/file/d/1O197wWlKcDOsHp3eKCsa6918SI6N0H6X/view?usp=drive_link'
                        target='_blank'
                    >
                        <Button size='lg' className="border border-primary text-primary hover:text-primary-foreground hover:border-primary-foreground cursor-pointer bg-white/80 rounded-full px-3 py-6 group">
                            Télécharger le PDF &quot;Comment s&apos;y rendre ?&quot;
                            <CircleArrowRight className="text-primary size-4 ml-8 group-hover:text-primary-foreground" />
                        </Button>
                    </Link>
                </div>
                {/* Blu azur map */}
                <MapImage />
            </div>
        </section>
    )
}