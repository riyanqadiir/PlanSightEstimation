import { useEffect } from "react";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);
}

export const PAGE_META = {
  home: {
    title: "Plan Sight Estimating | Construction Cost Estimates & Takeoffs",
    description:
      "Plan Sight Estimating provides construction cost estimates, material takeoffs, shop drawings, architecture plans, and permit sets nationwide.",
  },
  about: {
    title: "About Plan Sight Estimating | Construction Estimating Services",
    description:
      "Learn about Plan Sight Estimating, our mission, vision, and why contractors and builders choose us for accurate bids and takeoffs.",
  },
  contact: {
    title: "Contact Plan Sight Estimating | Request an Estimate",
    description:
      "Request a construction estimate from Plan Sight Estimating. Send project details, plans, and documents for a fast quote.",
  },
} as const;
