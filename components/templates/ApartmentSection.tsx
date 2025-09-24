import Image from "next/image"
import { BulletListItem } from "../atoms/BulletListItem"


export function ApartmemtSection() {
    return (
        <div className="relative bg-white py-12 min-h-screen flex items-center">
            {/* wrapper */}
            <div className="ml-[188px] flex flex-row items-center justify-between">
                {/* description */}
                <div className="w-[555px]">
                    <h2 className="font-normal text-[#121212] text-[43px]">Le confort et la sérénité d’un <br /> <span className="font-bold">appartement privé</span></h2>
                    <p className="text-[##020202] text-sm my-4 font-normal">
                        Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.
                    </p>

                    {/* Inclusions list */}
                    <h3 className="font-normal text-xl mt-2 mb-4">Les inclusions :</h3>
                    <ul className="space-y-2 text-sm">
                        {/* <li>Stationnement privé</li> */}
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
                <div className="absolute right-0 flex items-center gap-[10px] overflow-hidden rounded-2xl">
                    {/* Première image */}
                    <Image
                        src="/apartment.webp"
                        alt="residence"
                        width={421}
                        height={538}
                        className="w-[421px] h-[538px] object-cover rounded-2xl"
                    />

                    {/* Deuxième image */}
                    <div className=" relative w-[250px] h-[431px] overflow-hidden  rounded-tl-2xl rounded-bl-2xl">
                        <Image
                            src="/kitchen-room.png"
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