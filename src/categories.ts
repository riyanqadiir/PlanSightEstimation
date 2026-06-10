export type TradeCategory =
  | "flooring"
  | "mep"
  | "metal"
  | "lumber"
  | "concrete"
  | "masonry"
  | "paint"
  | "drywall";

export type ClientCategory =
  | "general-contractors"
  | "sub-contractors"
  | "architects"
  | "engineers"
  | "owners-developers"
  | "material-suppliers";

export type ProjectCategory = TradeCategory;

export interface TradeCategoryInfo {
  id: TradeCategory;
  label: string;
  shortLabel: string;
  emoji: string;
  description: string;
}

export interface ClientCategoryInfo {
  id: ClientCategory;
  label: string;
  description: string;
}

export const TRADE_CATEGORIES: TradeCategoryInfo[] = [
  {
    id: "flooring",
    label: "Flooring Estimating",
    shortLabel: "Flooring",
    emoji: "🪵",
    description:
      "VCT, LVT, carpet, rubber tile, and wood flooring takeoffs with accurate material and labor quantities.",
  },
  {
    id: "mep",
    label: "MEP Estimating",
    shortLabel: "MEP",
    emoji: "⚡",
    description:
      "Mechanical, electrical, and plumbing estimates covering HVAC, ductwork, piping, and controls.",
  },
  {
    id: "metal",
    label: "Metal Estimating",
    shortLabel: "Metal",
    emoji: "🔩",
    description:
      "Structural and miscellaneous steel takeoffs including beams, columns, trusses, railings, and fasteners.",
  },
  {
    id: "lumber",
    label: "Lumber Estimating",
    shortLabel: "Lumber",
    emoji: "🌲",
    description:
      "Framing, millwork, and timber takeoffs for rough and finish carpentry, cabinetry, and drywall framing.",
  },
  {
    id: "concrete",
    label: "Concrete Estimating",
    shortLabel: "Concrete",
    emoji: "🧱",
    description:
      "Foundation, footing, slab, block, and basement quantity takeoffs for residential and commercial work.",
  },
  {
    id: "masonry",
    label: "Masonry Estimating",
    shortLabel: "Masonry",
    emoji: "🪨",
    description:
      "Brick, stone, block, precast, and rebar quantity surveys for structural and architectural masonry.",
  },
  {
    id: "paint",
    label: "Paint Estimating",
    shortLabel: "Paint",
    emoji: "🎨",
    description:
      "Coatings, finishes, DTM, and specialty paint takeoffs with detailed wall and partition line items.",
  },
  {
    id: "drywall",
    label: "Drywall Estimating",
    shortLabel: "Drywall",
    emoji: "📐",
    description:
      "Gypsum board, studs, tape, mud, screws, and transportation quantities for drywall contractors.",
  },
];

export const CLIENT_CATEGORIES: ClientCategoryInfo[] = [
  {
    id: "general-contractors",
    label: "General Contractors",
    description:
      "Location-specific material and labor pricing for complete residential and commercial bid packages.",
  },
  {
    id: "sub-contractors",
    label: "Sub-Contractors",
    description:
      "Trade-specific estimates for concrete, drywall, electrical, HVAC, plumbing, framing, roofing, and more.",
  },
  {
    id: "architects",
    label: "Architects",
    description:
      "Preliminary and design-phase budgets so projects stay on track before plans are finalized.",
  },
  {
    id: "engineers",
    label: "Engineers",
    description:
      "Cost support for complex structural, civil, and MEP engineering-led construction projects.",
  },
  {
    id: "owners-developers",
    label: "Owners & Developers",
    description:
      "Unbiased early budgets and realistic cost guidance for owners planning new construction or renovations.",
  },
  {
    id: "material-suppliers",
    label: "Material Suppliers",
    description:
      "Outsourced material takeoff packages with detailed spreadsheets to support quoting and procurement.",
  },
];

export function getTradeLabel(id: TradeCategory): string {
  return TRADE_CATEGORIES.find((t) => t.id === id)?.label ?? id;
}

export function getTradeShortLabel(id: TradeCategory): string {
  return TRADE_CATEGORIES.find((t) => t.id === id)?.shortLabel ?? id;
}
