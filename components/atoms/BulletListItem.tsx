import { cn } from "@/lib/utils";

type BulletListItemProps = {
    label: string;
    className?: string;
};

export function BulletListItem({ label, className }: BulletListItemProps) {
    return (
        <li className={cn("flex items-start gap-2", className)}>
            <span className="w-[10px] h-[10px] rounded-full bg-blue-500 flex-shrink-0 mt-1" />
            <span className="leading-snug">
                {label}
            </span>
        </li>
    );
}
