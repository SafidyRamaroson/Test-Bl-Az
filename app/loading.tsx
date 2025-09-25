import { BluAzurLogo } from "@/components/atoms/BluAzurLogo";


export default function Loading() {
    return (
        <div className="bg-gradient-to-r from-primary/95 to-primary/5 min-h-screen flex items-center justify-center animate-pulse">
            <BluAzurLogo />
        </div>
    )
}