import Image from "next/image";


export function MapImage() {
    return (
        <div className="flex justify-center">
            <div className="relative w-[441px] h-[441px] md:h-[526px]">
                <Image
                    src="/blu-azur-map.avif"
                    alt="Blu Azur map"
                    fill
                    className="object-cover rounded-4xl"
                />
                <Image
                    src="/map.png"
                    alt="Mini map"
                    width={94}
                    height={82}
                    className="absolute -top-10 -left-12"
                />
            </div>
        </div>
    );
}