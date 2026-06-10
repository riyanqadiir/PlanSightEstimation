export type Theme = "light" | "warm" | "dark";

export interface ThemeClasses {
  bg: string;
  altBg: string;
  card: string;
  cardHeader: string;
  badge: string;
  badgeSelected: string;
  badgeUnselected: string;
  input: string;
  navbar: string;
  footer: string;
  mutedText: string;
  heading: string;
  accentButton: string;
  outlineButton: string;
  pillBg: string;
}

const THEME_MAP: Record<Theme, ThemeClasses> = {
  light: {
    bg: "bg-zinc-50 text-zinc-950",
    altBg: "bg-white",
    card: "bg-white border-zinc-200/90 text-zinc-950 shadow-sm hover:shadow-md",
    cardHeader: "bg-zinc-100/50 border-zinc-200/80",
    badge: "bg-amber-100 text-amber-900 border-amber-200",
    badgeSelected: "bg-amber-600 text-white",
    badgeUnselected: "bg-zinc-200/75 text-zinc-700 hover:bg-zinc-300/80 hover:text-zinc-900",
    input: "bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:ring-amber-500 focus:border-amber-500",
    navbar: "bg-white/95 border-zinc-200 text-zinc-900",
    footer: "bg-zinc-900 text-zinc-300 border-t border-zinc-800",
    mutedText: "text-zinc-600",
    heading: "text-zinc-900",
    accentButton: "bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold",
    outlineButton: "border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
    pillBg: "bg-amber-50",
  },
  warm: {
    bg: "bg-[#faf6f0] text-[#1c140c]",
    altBg: "bg-[#f5ebd9]",
    card: "bg-[#fdfbf7] border-[#e8dfcf] text-[#1c140c] shadow-sm hover:translate-y-[-2px] duration-200 hover:shadow-md",
    cardHeader: "bg-[#f5ecd7] border-[#e8dfcf]",
    badge: "bg-[#edd6b3] text-[#4d2f00] border-[#dec49b]",
    badgeSelected: "bg-amber-800 text-white",
    badgeUnselected: "bg-[#eddcb8]/60 text-amber-950 hover:bg-[#eddcb8] hover:text-amber-900",
    input: "bg-[#fdfbf6] border-[#d2c4ae] text-amber-950 placeholder-[#aa9b85] focus:ring-[#8c6239] focus:border-[#8c6239]",
    navbar: "bg-[#f5ebd9]/95 border-[#e2d5bd] text-amber-950",
    footer: "bg-[#2c2014] text-[#f2e7d5] border-t border-[#463421]",
    mutedText: "text-[#5c4a37]",
    heading: "text-[#2e1f10]",
    accentButton: "bg-amber-700 hover:bg-amber-800 text-white font-semibold",
    outlineButton: "border-[#caa875] text-[#785422] hover:bg-[#eddcb8]/30",
    pillBg: "bg-[#f5ebd9]",
  },
  dark: {
    bg: "bg-zinc-950 text-zinc-100",
    altBg: "bg-zinc-900/60",
    card: "bg-zinc-900 border-zinc-800/80 text-zinc-100 shadow-xl hover:shadow-amber-500/5",
    cardHeader: "bg-zinc-950/40 border-zinc-800/80",
    badge: "bg-amber-900/40 text-amber-300 border-amber-800/50",
    badgeSelected: "bg-amber-500 text-zinc-950",
    badgeUnselected: "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white",
    input: "bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600 focus:ring-amber-500 focus:border-amber-500",
    navbar: "bg-zinc-900/95 border-zinc-800 text-zinc-100",
    footer: "bg-[#0b0b0d] text-zinc-400 border-t border-zinc-900",
    mutedText: "text-zinc-400",
    heading: "text-white",
    accentButton: "bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold",
    outlineButton: "border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white",
    pillBg: "bg-zinc-900",
  },
};

export function getThemeClasses(theme: Theme): ThemeClasses {
  return THEME_MAP[theme];
}
