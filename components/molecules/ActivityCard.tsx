import Link from "next/link";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";

type Props = {
    backgroundCardImage: string;
    name: string;
    description: string;
    toSeeTextLink?: string;
    toSeeLink?: string;
    buttonText?: string;
    buttonLink?: string;
    className?: string;
};

export function ActivityCard({
    backgroundCardImage,
    name,
    description,
    toSeeTextLink,
    toSeeLink,
    buttonText,
    buttonLink,
    className,
}: Props) {
    return (
        <div
            style={{ backgroundImage: `url(${backgroundCardImage})` }}
            className={`px-[54px] py-[36px] rounded-[36px] overflow-hidden bg-cover bg-center text-primary-foreground flex flex-col justify-end ${className ?? ""}`}
        >
            {/* card header */}
            <div>
                <h3 className="text-[16px] font-bold">{name}</h3>
                <p className="text-xs font-normal text-justify">{description}</p>
            </div>

            {/* card call to action */}
            {toSeeTextLink && (
                <p className="flex flex-row gap-x-4 items-center font-normal text-xs mt-[6px]">
                    A voir :
                    <Link href={toSeeLink ?? "#"} className="text-primary underline">
                        {toSeeTextLink}
                    </Link>
                </p>
            )}

            {buttonText && (
                <Link href={buttonLink ?? "#"} className="mt-[26px] inline-block">
                    <Button className="bg-transparent border border-primary py-2 px-4 rounded-2xl text-[10px] font-bold">
                        {buttonText}
                        <CircleArrowRight className="text-primary size-4 ml-2" />
                    </Button>
                </Link>
            )}
        </div>
    );
}
