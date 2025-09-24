import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import { MapImage } from "../molecules/MapImage";


export function BluAzurLocalisationSection() {
    return (
        <div className="bg-[url('/blu-azur-localisation-background.webp')] min-h-screen bg-cover bg-center py-8  md:py-12 lg:py-24">
            {/* wrapper */}
            <div className="w-11/12 lg:w-3/4 mx-auto grid grid-cols-1 gap-x-[20px] md:grid-cols-2 md:gap-[80px] xl:gap-[234px] justify-center items-center sm:bg-red-300 md:bg-green-300 lg:bg-blue-300 xl:bg-gray-500">
                {/* Blu azur localisation */}
                <div className="text-justify text-[#121212] mb-[21px]">
                    <h2 className="text-[34px] font-normal">Où se trouve Blu Azur à <br className="max-md:hidden" /> <span className="font-bold">Saint-Raphaël ?</span> </h2>
                    <p className="text-[#020202] text-sm font-bold my-[21px]">Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l’une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d’arrêt d’autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.</p>
                    {/* how to get there */}
                    <Button size='lg' className="border border-primary text-primary hover:text-primary-foreground hover:border-primary-foreground cursor-pointer bg-white/80 rounded-full">
                        Comment s&apos;y rendre
                        <CircleArrowRight className="text-primary size-4 ml-2" />
                    </Button>
                </div>
                {/* Blu azur map */}
                <MapImage />
            </div>
        </div>
    )
}