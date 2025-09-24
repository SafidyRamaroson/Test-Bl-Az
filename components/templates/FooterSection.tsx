import { BluAzurContact } from "../organims/BluAzurContact";
import { BluAzurLogo } from "../atoms/BluAzurLogo";
import { FooterCopyRight } from "../atoms/FooterCopyright";


export function FooterSection() {
    return (
        <section className="bg-primary text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center justify-center gap-[170px] py-24">
                <BluAzurLogo className="max-md:w-44 max-md:h-44" />
                <BluAzurContact />
            </div>
            <FooterCopyRight />
        </section>
    )
}