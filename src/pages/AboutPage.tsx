import { MissionVisionSection } from "../components/about/MissionVisionSection";
import { WhyUsSection } from "../components/about/WhyUsSection";

export function AboutPage() {
  return (
    <div className="space-y-16 animate-fadeIn">
      <MissionVisionSection />
      <WhyUsSection />
    </div>
  );
}
