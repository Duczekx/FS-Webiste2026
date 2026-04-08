import { AdvantagesSection } from "@/components/sections/home/advantages-section";
import { ApplicationsSection } from "@/components/sections/home/applications-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { LeadSection } from "@/components/sections/home/lead-section";
import { ManufacturerSection } from "@/components/sections/home/manufacturer-section";
import { ProductsSection } from "@/components/sections/home/products-section";

export default function Home() {
  return (
    <main className="page-main">
      <HeroSection />
      <AdvantagesSection />
      <ProductsSection />
      <ApplicationsSection />
      <ManufacturerSection />
      <LeadSection />
    </main>
  );
}
