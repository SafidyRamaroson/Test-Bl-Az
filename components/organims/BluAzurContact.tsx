import bluAzurContacts from "@/data/bluAzurContacts"
import { SocialIconFooter } from "../molecules/SocialIconFooter"

export function BluAzurContact() {
    return (
        <div className="flex flex-col space-y-5">
            <h3 className="text-[21.5px] font-bold mb-10">Contactez-nous</h3>
            {bluAzurContacts.map((social) => (
                <SocialIconFooter
                    key={social.label}
                    icon={social.icon}
                    href={social.href}
                    label={social.label}
                />
            ))}
        </div>
    )
}