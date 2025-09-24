'use client'

import Link from "next/link";
import { BluAzurLogo } from "../atoms/BluAzurLogo";
import { Button } from "../ui/button";
import { MenuDrawer } from "./MobileMenu";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/useMobile";

export function Header() {
    const scrolled = useScrolled();
    const isMobile = useMobile();
    return (
        <header className={cn("fixed top-0 left-0 w-full z-50 backdrop-blur-xs", scrolled && 'backdrop-blur-md bg-black/20')}>
            <div className={cn("w-3/4 mx-auto border-b border-white flex flex-row justify-between items-center py-2", isMobile && "w-4/5")}>
                {/* Logo */}
                <BluAzurLogo className="w-[109px] h-[48px]" />

                {/* Menu */}
                {isMobile ? <MenuDrawer /> : (<ul className="text-primary-foreground flex flex-row items-center space-x-8">
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
                </ul>)}
            </div>
        </header>
    );
}
