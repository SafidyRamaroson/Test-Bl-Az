import { FooterSection } from "@/components/templates/FooterSection";
import { ReserveNowSection } from "@/components/templates/ReserveNowSection";
import { SaintRaphaelSection } from "@/components/templates/SaintRaphaelSection";

export default function Home() {
  return (
    <div>
      <SaintRaphaelSection />
      <ReserveNowSection />
      <FooterSection />
    </div>
  );
}
