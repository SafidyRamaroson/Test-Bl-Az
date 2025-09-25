import Link from "next/link";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReserveNowButton({ className }: { className?: string }) {
    return (
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScuvO4U3wZcAonIpDlrny3Il9wYa-X0yHKAML_MjdgvU5A_xg/viewform?usp=preview" className={cn("cursor-pointer z-10", className)}>
            <Button
                size="lg"
                className="rounded-full text-white cursor-pointer py-4 px-8 text-sm sm:text-base md:text-[16px] font-normal lg:font-bold flex items-center justify-between text-left h-fit hover:bg-transparent hover:text-primary-foreground hover:border-primary-foreground hover:border-2">
                <span className="whitespace-normal break-words flex-1 text-center">
                    Réservez dès maintenant votre séjour !
                </span>
                <CircleArrowRight className="text-primary-foreground w-4 h-4 ml-2 flex-shrink-0" />
            </Button>
        </Link>
    );
}
