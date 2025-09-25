import Link from "next/link";
import { FacebookIcon, Youtube, TwitterIcon, InstagramIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialSidebarProps {
    className?: string;
}

export function SocialSidebar({ className }: SocialSidebarProps) {
    return (
        <div
            className={cn(
                "hidden md:flex w-[75px] h-full absolute top-0 left-0 bg-[#4097FF]/60 flex-col justify-end items-center gap-y-6 pb-[87px]",
                className
            )}
        >
            <Link href="#" target="_blank" aria-label="facebook">
                <FacebookIcon className="text-white size-6 mx-auto" />
            </Link>
            <Link href="#" target="_blank" aria-label="youtube">
                <Youtube className="text-white size-6 mx-auto !opacity-100" />
            </Link>
            <Link href="#" target="_blank" aria-label="twitter">
                <TwitterIcon className="text-white size-6 mx-auto" />
            </Link>
            <Link href="#" target="_blank" aria-label="instagram">
                <InstagramIcon className="text-white size-6 mx-auto" />
            </Link>
        </div>
    );
}
