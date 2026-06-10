import {
  BadgeCheck,
  Clock,
  DollarSign,
  Headphones,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface WhyUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    title: "24-48 Hour Turnaround",
    description:
      "Most construction estimates and quantity takeoffs are delivered within 24 to 48 hours.",
    icon: Clock,
  },
  {
    title: "Affordable Pricing",
    description:
      "Competitive rates with an average project cost around $200. Final pricing depends on project scope.",
    icon: DollarSign,
  },
  {
    title: "Accurate, Detailed Estimates",
    description:
      "Zip-code-based pricing, current estimating software, and on-demand vendor quotes when you need them.",
    icon: Target,
  },
  {
    title: "92% Bid-Hit Ratio",
    description:
      "More than 92% of our clients report winning bids with estimates prepared by our team.",
    icon: Zap,
  },
  {
    title: "Certified Estimators",
    description:
      "ASPE-affiliated estimators proficient in PlanSwift, Bluebeam, Trimble, RS Means, Cost Works, Xactimate, and Quest Estimating.",
    icon: BadgeCheck,
  },
  {
    title: "Experienced Team",
    description:
      "Our staff includes construction estimators, engineers, field specialists, and project managers.",
    icon: Users,
  },
  {
    title: "24/7 Support",
    description: "Questions about your quote or project scope? Our team is available around the clock.",
    icon: Headphones,
  },
];
