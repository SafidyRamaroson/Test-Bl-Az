import { ApartmemtSection } from "@/components/templates/ApartmentSection";
import { BluAzurLocalisationSection } from "@/components/templates/BluAzurLocalisationSection";
import { DestinationBlockSection } from "@/components/templates/DestinationBlockSection";
import { ExploreBluAzurSection } from "@/components/templates/ExploreBluAzurSection";
import { FooterSection } from "@/components/templates/FooterSection";
import { HeroSection } from "@/components/templates/HeroSection";
import { ReserveNowSection } from "@/components/templates/ReserveNowSection";
import { SaintRaphaelSection } from "@/components/templates/SaintRaphaelSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ApartmemtSection />
      <SaintRaphaelSection />
      <BluAzurLocalisationSection />
      <DestinationBlockSection />
      <ExploreBluAzurSection />
      <ReserveNowSection />
      <FooterSection />
    </div>
  );
}
