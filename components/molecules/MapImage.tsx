import Image from "next/image";


export function MapImage() {
    return (
        <div className="relative flex justify-center">
            <Image
                src="/blu-azur-map.png"
                alt="Blu Azur map"
                width={875}
                height={717}
                className="w-[441px] h-[526px] rounded-4xl"
            />
            <Image
                src="/map.png"
                alt="Mini map"
                width={94}
                height={82}
                className="absolute -top-10 -left-12"
            />
        </div>
    );
}