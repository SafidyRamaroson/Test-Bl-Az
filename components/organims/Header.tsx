'use client'

import { BluAzurLogo } from "../atoms/BluAzurLogo";
import { MenuDrawer } from "./MobileMenu";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/useMobile";
import { NavMenu } from "../molecules/NavMenu";
import { SocialSidebar } from "../molecules/SocialSidebar";

export function Header() {
    const scrolled = useScrolled();
    const isMobile = useMobile();
    return (
        <header className={cn("fixed top-0 left-0 w-full z-50 backdrop-blur-xs", scrolled && 'backdrop-blur-md bg-black/20')}>
            <div className={cn("w-11/12 lg:w-3/4 mx-auto border-b border-white flex flex-row justify-between items-center py-3", isMobile && "w-4/5")}>
                {/* Logo */}
                <BluAzurLogo className="w-[109px] h-[48px]" />

                {/* Menu */}
                {isMobile ? (<div className="flex flex-row items-center gap-4">
                    <SocialSidebar className="md:hidden relative flex flex-row items-center gap-3 bg-transparent w-fit h-fit pb-0" />
                    <MenuDrawer />
                </div>
                ) : <NavMenu />}
            </div>
        </header>
    );
}
