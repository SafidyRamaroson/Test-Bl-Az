import { cn } from "@/lib/utils"
import { LucideProps } from "lucide-react"
import Link from "next/link"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export function SocialIconFooter({
    icon: Icon,
    href,
    label,
    target = "_blank",
    className,
}: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    href: string,
    label: string,
    target?: string,
    className?: string,
}) {
    return (
        <span className={cn('text-base flex flex-row items-center gap-4', className)}>
            <span className="border border-white rounded-full p-1 bg-primary-foreground">
                <Icon className="size-5 text-primary" aria-hidden="true" />
            </span>
            <Link href={href} target={target} className="text-[18px]" aria-label={label}>
                {label}
            </Link>
        </span>
    )
}