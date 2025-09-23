import { BluAzurContact } from "../organims/BluAzurContact";
import { BluAzurLogo } from "../atoms/BluAzurLogo";
import { FooterCopyRight } from "../atoms/FooterCopyright";


export function FooterSection() {
    return (
        <section className="bg-primary text-primary-foreground">
            <div className="flex flex-row justify-center gap-[170px] py-24">
                <BluAzurLogo />
                <BluAzurContact />
            </div>
            <FooterCopyRight />
        </section>
    )
}