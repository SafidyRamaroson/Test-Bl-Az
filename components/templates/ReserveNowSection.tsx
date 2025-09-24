import { ReserveNowButton } from "../atoms/ReserveNowButton";
import { ReserveNowHeader } from "../molecules/ReserveNowHeader";

export function ReserveNowSection() {
    return (
        <section className="relative bg-[url('/residence-pierre-vacances-la-corniche-d-or.png')] bg-cover bg-no-repeat bg-center py-12 min-h-screen flex flex-col items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/5 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                <ReserveNowHeader />
                <ReserveNowButton />
            </div>
        </section>
    );
}