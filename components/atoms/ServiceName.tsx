import { cn } from "@/lib/utils";


export function ServiceName({ name, className }: { name: string, className?: string }) {
    return (
        <p className={cn("font-bold text-xl text-center text-primary-foreground", className)}>
            {name}
        </p>
    )
}