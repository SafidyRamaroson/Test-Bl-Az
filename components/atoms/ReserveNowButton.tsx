import Link from "next/link";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";


export function ReserveNowButton({
    className
}: { className?: string }) {
    return (
        <Link href='#' className={cn("cursor-pointer z-10", className)}>
            <Button size="lg" className="rounded-full py-4 px-2 text-[16px] font-[900]">
                Réservez dès maintenant votre séjour !
                <CircleArrowRight className="text-primary-foreground size-4 ml-2" />
            </Button>
        </Link>
    )
}