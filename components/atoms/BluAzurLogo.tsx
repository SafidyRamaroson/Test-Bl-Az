import { cn } from "@/lib/utils"
import Image from "next/image"

export function BluAzurLogo({ className }: { className?: string }) {
    return (
        <Image
            src="/blu-azur-logo.avif"
            alt="Blu azur logo"
            width={279}
            height={123}
            className={cn("object-contain", className)}
        />
    )
}