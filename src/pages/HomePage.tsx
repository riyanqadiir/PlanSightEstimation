import { ClientCategoriesSection } from "../components/home/ClientCategoriesSection";
import { DocumentationServicesCTA } from "../components/home/DocumentationServicesCTA";
import { HeroSection } from "../components/home/HeroSection";
import { PortfolioGrid } from "../components/home/PortfolioGrid";
import { PAGE_META, usePageMeta } from "../config/seo";

export function HomePage() {
  usePageMeta(PAGE_META.home.title, PAGE_META.home.description);

  return (
    <div className="space-y-12 animate-fadeIn">
      <HeroSection />
      <ClientCategoriesSection />
      <PortfolioGrid />
      <DocumentationServicesCTA />
    </div>
  );
}
