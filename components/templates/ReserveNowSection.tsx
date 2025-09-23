import { ReserveNowButton } from "../atoms/ReserveNowButton";
import { ReserveNowHeader } from "../molecules/ReserveNowHeader";


export function ReserveNowSection() {
    return (
        <div className="relative bg-[url('/residence-pierre-vacances-la-corniche-d-or.png')] bg-contain py-12 min-h-screen flex flex-col items-center justify-center z-10">
            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/10 h-full w-full -z-10"></div>

            {/* Content */}
            <ReserveNowHeader />
            <ReserveNowButton />
        </div>
    )
}