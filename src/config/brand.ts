import headerLogo from "../assets/images/logo/plansightestimating.png";
import headerLogoDark from "../assets/images/logo/plansightestimatingdark.png";
import stackedLogo from "../assets/images/logo/logo1.png";
import stackedLogoDark from "../assets/images/logo/logo1dark.png";
import stackedLogoAlt from "../assets/images/logo/logo2.png";
import stackedLogoAltDark from "../assets/images/logo/logo2dark.png";
import type { Theme } from "../theme";

export const BRAND = {
  name: "Plan Sight Estimating",
  shortName: "Plan Sight",
  domain: "plansightestimating.com",
  siteUrl: "https://plansightestimating.com",
  contactEmail: "plansightestimating@gmail.com",
  logos: {
    header: headerLogo,
    headerDark: headerLogoDark,
    stacked: stackedLogo,
    stackedDark: stackedLogoDark,
    stackedAlt: stackedLogoAlt,
    stackedAltDark: stackedLogoAltDark,
  },
} as const;

function useDarkLogos(theme: Theme) {
  return theme === "dark";
}

export function getHorizontalLogo(theme: Theme) {
  return useDarkLogos(theme) ? BRAND.logos.headerDark : BRAND.logos.header;
}

export function getStackedLogo(theme: Theme) {
  return useDarkLogos(theme) ? BRAND.logos.stackedDark : BRAND.logos.stacked;
}

export function getStackedAltLogo(theme: Theme) {
  return useDarkLogos(theme) ? BRAND.logos.stackedAltDark : BRAND.logos.stackedAlt;
}
