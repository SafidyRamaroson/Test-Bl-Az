import { ExploreBluAzurSection } from "@/components/templates/ExploreBluAzurSection";
import { FooterSection } from "@/components/templates/FooterSection";
import { ReserveNowSection } from "@/components/templates/ReserveNowSection";
import { SaintRaphaelSection } from "@/components/templates/SaintRaphaelSection";

export default function Home() {
  return (
    <div>
      <SaintRaphaelSection />
      <ExploreBluAzurSection />
      <ReserveNowSection />
      <FooterSection />
    </div>
  );
}
