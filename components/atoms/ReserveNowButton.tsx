import Link from "next/link";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReserveNowButton({ className }: { className?: string }) {
    return (
        <Link href="#" className={cn("cursor-pointer z-10", className)}>
            <Button
                size="lg"
                className="rounded-full text-white cursor-pointer py-3 px-4 text-sm sm:text-base md:text-lg font-bold lg:font-extrabold flex items-center justify-between text-left h-fit">
                <span className="whitespace-normal break-words flex-1 text-center">
                    Réservez dès maintenant votre séjour !
                </span>
                <CircleArrowRight className="text-primary-foreground w-4 h-4 ml-2 flex-shrink-0" />
            </Button>
        </Link>
    );
}
