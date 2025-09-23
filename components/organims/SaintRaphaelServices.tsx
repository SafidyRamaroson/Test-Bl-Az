import { saintRaphaelServices } from "@/data/saintRaphaelServices";
import { SaintRaphaelServiceItem } from "../molecules/SaintRaphaelServiceItem";


export function SaintRaphaelServices() {
    return (
        <div className="flex flex-row justify-center gap-4 space-y-5">
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