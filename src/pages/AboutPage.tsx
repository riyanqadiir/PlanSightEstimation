import { MissionVisionSection } from "../components/about/MissionVisionSection";
import { WhyUsSection } from "../components/about/WhyUsSection";
import { PAGE_META, usePageMeta } from "../config/seo";

export function AboutPage() {
  usePageMeta(PAGE_META.about.title, PAGE_META.about.description);

  return (
    <div className="space-y-16 animate-fadeIn">
      <MissionVisionSection />
      <WhyUsSection />
    </div>
  );
}
