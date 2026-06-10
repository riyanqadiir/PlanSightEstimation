import { ClientCategoriesSection } from "../components/home/ClientCategoriesSection";
import { DocumentationServicesCTA } from "../components/home/DocumentationServicesCTA";
import { HeroSection } from "../components/home/HeroSection";
import { PortfolioGrid } from "../components/home/PortfolioGrid";

export function HomePage() {
  return (
    <div className="space-y-12 animate-fadeIn">
      <HeroSection />
      <ClientCategoriesSection />
      <PortfolioGrid />
      <DocumentationServicesCTA />
    </div>
  );
}
