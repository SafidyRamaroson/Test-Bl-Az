import { useMobile } from "@/hooks/useMobile";
import Image from "next/image";
import { ArrowButton } from "../atoms/ArrowButton";

type HeroImageProps = {
    image: { src: string; alt: string };
    nextImage: { src: string; alt: string };
    isTransitioning: boolean;
    onNext: () => void;
    showSecondary?: boolean;
};


export function HeroImage({ image, nextImage, isTransitioning, onNext, showSecondary = true }: HeroImageProps) {
    const isMobile = useMobile();
    return (
        <div
            className="relative gap-4 md:absolute md:bottom-10 md:-right-16 md:flex md:flex-row-reverse z-10 md:gap-4 overflow-hidden"
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
        >
            {/* Image principale */}
            <div className={`
        relative w-full flex flex-row mb-4 items-center justify-center md:w-[300px] h-[201px] rounded-2xl shadow-lg overflow-hidden
        transition-all duration-500 ease-in-out
        ${isTransitioning ? "transform -translate-x-2 scale-95 opacity-80 blur-[1px]" : "transform translate-x-0 scale-100 opacity-100 blur-0"}
      `}>
                <div className="relative overflow-hidden rounded-2xl w-[300px] h-[201px]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={698}
                        height={468}
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <ArrowButton onClick={onNext} isTransitioning={isTransitioning} />
                </div>
            </div>

            {/* Image secondaire */}
            {showSecondary && !isMobile && (
                <div className="relative md:w-[300px] h-[201px] rounded-2xl shadow-lg overflow-hidden">
                    <div className={`relative w-full h-full overflow-hidden rounded-2xl transition-all duration-500 ease-in-out ${isTransitioning ? "translate-x-1 scale-105 opacity-90" : "translate-x-0 scale-100 opacity-100"}`}>
                        <Image
                            src={nextImage.src}
                            alt={nextImage.alt}
                            width={698}
                            height={468}
                            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110 md:block hidden"
                        />
                        <div className={`absolute inset-0 z-0 transition-all duration-500
              ${isTransitioning ? "bg-gradient-to-l from-black/30 to-black/50" : "bg-gradient-to-l from-black/10 to-black/30"}`}
                        />
                        <ArrowButton onClick={onNext} isTransitioning={isTransitioning} />
                    </div>
                </div>
            )}
        </div>
    );
}