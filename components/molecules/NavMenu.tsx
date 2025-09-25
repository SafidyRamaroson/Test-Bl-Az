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
                "text-primary-foreground flex flex-row items-center space-x-9",
                className
            )}
        >
            <li>
                <Link href="#apartments" className="font-bold hover:text-primary-foreground">
                    Accueil
                </Link>
            </li>
            <li>
                <Link href="#localisation" className="font-bold hover:text-primary-foreground">
                    Localisation
                </Link>
            </li>
            <li>
                <Link href="#activities" className="font-bold hover:text-primary-foreground">
                    Activités
                </Link>
            </li>
            <li>
                <Link href="#reserve" className="font-bold hover:text-primary-foreground">
                    <Button className="rounded-full cursor-pointer opacity-100 text-primary-foreground">
                        Réserver
                    </Button>
                </Link>
            </li>
        </ul>
    );
}
