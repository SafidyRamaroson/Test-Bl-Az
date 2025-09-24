import { SaintRaphaelServices } from "../organims/SaintRaphaelServices";

export function SaintRaphaelSection() {
    return (
        <section className="bg-[url('/saintRaphaelbackground.avif')] bg-cover bg-center py-12">
            <h2 className="lg:text-[43px] text-primary-foreground font-normal text-center">
                Saint Raphaël, l’endroit parfait pour <br className="max-md:hidden" /> <span className="font-bold">vivre la Côte d’Azur</span>
            </h2>
            <p className="text-sm font-normal text-primary-foreground text-center pb-10">Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination <br className="max-md:hidden" /> de rêve. Entre mer turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique pour la détente et <br /> l’aventure.</p>
            <div className="w-5/6 mx-auto">
                <SaintRaphaelServices />
            </div>

            <p className="text-center text-primary-foreground text-sm py-10 font-normal">Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis  son port de <br className="max-md:hidden" /> plaisance. Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur !</p>
        </section>
    );
}
