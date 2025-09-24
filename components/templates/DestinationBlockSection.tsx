import Image from "next/image";


export function DestinationBlockSection() {
    return (
        <div className="bg-[url('/pic-de-lourse-background.avif')] bg-cover bg-no-repeat bg-center min-h-screen">
            <div className="w-3/4 mx-auto z-10 py-[75px] flex flex-row justify-between items-center">
                {/* Destination image grouped */}
                <div>
                    <Image
                        src='/destination-grouped-image.webp'
                        alt='destination grouped image'
                        width={904}
                        height={1148}
                        className="w-[389px] h-[494px]"
                    />
                </div>

                {/* Description */}
                <div className="max-w-[484px]">
                    <h2 className="font-normal text-[34px] text-primary-foreground text-right">Un point de départ idéal pour <span className="font-bold mt-[14px]"> découvrir la Côte d’Azur !</span></h2>
                    <p className="text-sm font-normal text-primary-foreground text-justify pb-10">
                        Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de  vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
                    </p>
                </div>
            </div>
        </div>
    )
}