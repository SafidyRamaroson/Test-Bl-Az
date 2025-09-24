import Image from "next/image"
import { BulletListItem } from "../atoms/BulletListItem"


export function ApartmemtSection() {
    return (
        <div className="relative bg-white py-12 min-h-screen flex  items-center">
            {/* wrapper */}
            <div className="ml-[25px] md:ml-[90px] lg:ml-[188px] flex flex-col lg:flex-row max-lg:gap-y-10 items-center justify-between">
                {/* description */}
                <div className="max-w-full lg:max-w-[555px] text-justify lg:text-left">
                    <h2 className="font-normal text-[#121212]">Le confort et la sérénité d’un <br /> <span className="font-bold">appartement privé</span></h2>
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
                <div className="relative lg:absolute lg:right-0 flex flex-col md:flex-row items-center gap-[10px] overflow-hidden rounded-2xl">
                    {/* Première image */}
                    <Image
                        src="/apartment.webp"
                        alt="residence"
                        width={421}
                        height={538}
                        className="w-fullmax-w-[421px] h-auto md:h-[538px] object-cover rounded-2xl"
                    />

                    {/* Deuxième image */}
                    <div className="relative w-full max-w-[250px] h-[431px] overflow-hidden  rounded-tl-2xl rounded-bl-2xl">
                        <Image
                            src="/kitchen-room.webp"
                            alt="residence"
                            width={300}
                            height={1001}
                            className="w-full h-full object-cover"
                        />
                        {/* overlay image */}
                        <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-black/30 z-0"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}