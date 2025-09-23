import { cn } from "@/lib/utils";
import Image from "next/image";


export function ServiceIcon({ src, alt, className }: { src: string, alt: string, className?: string }) {
    return (
        <div className={cn('rounded-full bg-white', className)}>
            <Image
                src={src}
                alt={alt}
                width={127}
                height={127}
                className="object-contain p-8"
            />
        </div>
    )
}