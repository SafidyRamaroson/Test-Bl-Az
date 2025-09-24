import Image from "next/image";


export function MapImage() {
    return (
        <div className="relative flex justify-center">
            <div className="relative w-[441px] h-[526px]">
                <Image
                    src="/blu-azur-map.png"
                    alt="Blu Azur map"
                    fill
                    className="object-cover rounded-4xl"
                />
            </div>
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