import { cn } from "@/lib/utils";
import Image from "next/image";


export function ServiceIcon({ src, alt, className }: { src: string, alt: string, className?: string }) {
    return (
        <div
            className={cn(
                "rounded-full bg-white flex items-center justify-center",
                className
            )}
        >
            <Image
                src={src}
                alt={alt}
                width={127}
                height={127}
                className="object-contain p-4 md:p-8 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
            />
        </div>

    )
}