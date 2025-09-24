import Link from "next/link";
import { BluAzurLogo } from "../atoms/BluAzurLogo";
import { Button } from "../ui/button";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs">
            <div className="w-3/4 mx-auto border-b border-white flex flex-row justify-between items-center py-2">
                {/* Logo */}
                <BluAzurLogo className="w-[109px] h-[48px]" />

                {/* Menu */}
                <ul className="text-primary-foreground flex flex-row items-center space-x-8">
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
                        <Button className="rounded-full cursor-pointer opacity-100 text-primary-foreground/50">Réservé</Button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
