type Activity = {
    backgroundCardImage: string;
    name: string;
    description: string;
    toSeeTextLink?: string;
    toSeeLink?: string;
    buttonText?: string;
    buttonLink?: string;
    className?: string;
};

export const activities: Activity[] = [
    {
        backgroundCardImage: "/saint-pool-de-vence.png",
        name: "Un patrimoine culturel d’exception",
        description:
            "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.",
        toSeeTextLink:
            "Le Festival de Cannes, Carnaval de Nice, Fête du Citron",
        toSeeLink: "#",
        className: "col-span-3 row-span-3 h-[280px]",
    },
    {
        backgroundCardImage: "/sport-mediterranee.png",
        name: "Le sport au rythme de la Méditerranée",
        description:
            "Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.",
        toSeeTextLink:
            "Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez",
        toSeeLink: "#",
        className: "col-span-3 row-span-3 col-start-4 h-[280px]",
    },
    {
        backgroundCardImage: "/destination-gourmande-et-authentique.avif",
        name: "Une destination gourmande et authentique",
        description:
            "Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.",
        buttonText: "Consulter la liste des meilleurs restaurants",
        buttonLink: "#",
        className: "col-span-2 row-span-5 row-start-4",
    },
    {
        backgroundCardImage: "/port-grimaud-cite-lacustre.avif",
        name: "Des expériences inoubliables en famille",
        description:
            "Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.",
        className: "col-span-2 row-span-5 col-start-3 row-start-4",
    },
    {
        backgroundCardImage: "/cap-dramont.webp",
        name: "L’évasion en pleine nature",
        description:
            "Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.",
        toSeeTextLink: "Grand Canyon du Verdon",
        toSeeLink: "#",
        buttonText: "Consulter la liste des sentiers pédestres",
        buttonLink: "#",
        className: "col-span-2 row-span-5 col-start-5 row-start-4",
    },
];
