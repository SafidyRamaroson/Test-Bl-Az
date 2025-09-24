import { saintRaphaelServices } from "@/data/saintRaphaelServices";
import { SaintRaphaelServiceItem } from "../molecules/SaintRaphaelServiceItem";


export function SaintRaphaelServices() {
    return (
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 justify-center gap-4 space-y-5">
            {saintRaphaelServices.map((service) => (
                <SaintRaphaelServiceItem
                    key={service.alt}
                    src={service.src}
                    alt={service.alt}
                    name={service.name}
                />
            ))}
        </div>
    )
}