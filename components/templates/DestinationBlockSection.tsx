import Image from "next/image";

export function DestinationBlockSection() {
    return (
        <div className="bg-[url('/pic-de-lourse-background.avif')] bg-cover bg-no-repeat bg-center min-h-screen">
            <div className="w-11/12 sm:w-3/4 mx-auto z-10 py-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">

                {/* Destination image grouped */}
                <div className="flex-shrink-0">
                    <Image
                        src='/destination-grouped-image.webp'
                        alt='destination grouped image'
                        width={904}
                        height={1148}
                        sizes="(max-width: 768px) 100vw, 389px"
                        className="w-full max-w-[389px] h-auto md:h-[494px] object-cover rounded-lg"
                    />
                </div>

                {/* Description */}
                <div className="max-w-full md:max-w-[484px] text-center md:text-right">
                    <h2 className="font-normal text-2xl sm:text-3xl md:text-[34px] text-primary-foreground">
                        Un point de départ idéal pour <span className="font-bold mt-2 block md:inline">découvrir la Côte d’Azur !</span>
                    </h2>
                    <p className="text-sm sm:text-base font-normal text-primary-foreground text-justify md:text-right pt-4 md:pt-10">
                        Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
                    </p>
                </div>

            </div>
        </div>
    );
}
