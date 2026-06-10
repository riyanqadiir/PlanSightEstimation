import { FileCheck, Layers, PenLine } from "lucide-react";

export const DOCUMENTATION_SERVICES = [
  {
    icon: PenLine,
    title: "Shop Drawings",
    description: "Fabrication and installation drawings ready for the field and your subs.",
  },
  {
    icon: Layers,
    title: "Architecture Plans",
    description: "Plan sets from early design through construction documents.",
  },
  {
    icon: FileCheck,
    title: "Permit Sets",
    description: "Permit packages prepared for city review and approval.",
  },
] as const;
