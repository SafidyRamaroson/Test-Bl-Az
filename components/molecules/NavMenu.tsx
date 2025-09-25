import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavMenuProps {
    className?: string;
}

export function NavMenu({ className }: NavMenuProps) {
    return (
        <ul
            className={cn(
                "text-primary-foreground flex flex-row items-center space-x-8",
                className
            )}
        >
            <li>
                <Link href="/" className="font-bold hover:text-primary-foreground">
                    Accueil
                </Link>
            </li>
            <li>
                <Link href="/" className="font-bold hover:text-primary-foreground">
                    Localisation
                </Link>
            </li>
            <li>
                <Link href="/" className="font-bold hover:text-primary-foreground">
                    Activités
                </Link>
            </li>
            <li>
                <Button className="rounded-full cursor-pointer opacity-100 text-primary-foreground">
                    Réserver
                </Button>
            </li>
        </ul>
    );
}
