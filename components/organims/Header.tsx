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
                    <Link href="/" className="font-bold hover:text-primary-foreground">
                        <li>Accueil</li>
                    </Link>
                    <Link href="/" className="font-bold hover:text-primary-foreground">
                        <li>Localisation</li>
                    </Link>
                    <Link href="/" className="font-bold hover:text-primary-foreground">
                        <li>Activités</li>
                    </Link>
                    <li>
                        <Button className="rounded-full">Réservé</Button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
