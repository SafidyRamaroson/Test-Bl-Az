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
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 backdrop-blur-xs transition-all duration-300 ease-in-out pt-4 pb-3",
                scrolled && "backdrop-blur-md bg-black/20"
            )}
        >
            <div
                className={cn(
                    "w-11/12 lg:w-3/4 mx-auto border-b pb-4 border-white flex flex-row justify-between items-end transition-all duration-300 ease-in-out ",
                    isMobile && "w-4/5"
                )}
            >
                {/* Logo */}
                <BluAzurLogo className="w-[109px] h-[48px]" />

                {/* Menu */}
                {isMobile ? (
                    <div className="flex flex-row items-center gap-4">
                        <SocialSidebar className="md:hidden relative flex flex-row items-center gap-3 bg-transparent w-fit h-fit pb-0" />
                        <MenuDrawer />
                    </div>
                ) : (
                    <NavMenu />
                )}
            </div>
        </header>
    );
}
