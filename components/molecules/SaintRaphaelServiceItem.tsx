import { cn } from "@/lib/utils";
import { ServiceIcon } from "../atoms/ServiceIcon";
import { ServiceName } from "../atoms/ServiceName";


export function SaintRaphaelServiceItem({ src, alt, name, className }: { src: string, alt: string, name: string, className?: string }) {
    return (
        <div className={cn('flex flex-col items-center gap-4', className)}>
            <ServiceIcon
                src={src}
                alt={alt}
            />
            <ServiceName name={name} />
        </div>
    )
}