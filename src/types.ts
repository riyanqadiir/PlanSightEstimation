import type { ProjectCategory } from "./categories";

export type { ProjectCategory, TradeCategory, ClientCategory } from "./categories";

export interface MaterialItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  category: "framing" | "flooring" | "drywall" | "paint" | "electrical" | "plumbing" | "custom";
}

export interface EstimationState {
  projectName: string;
  projectArea: number; // in sq ft
  qualityTier: "economy" | "standard" | "premium";
  category: ProjectCategory;
  difficulty: "standard" | "complex" | "custom";
  materials: MaterialItem[];
  laborHoursPerSqFt: number;
  laborRatePerHour: number;
  markupPercentage: number; // custom overhead or markup
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description: string;
  scopeSize: string;
  cost: string;
  duration: string;
  imageUrl: string;
  specifications: string[];
}

export interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  estimateSummary?: {
    projectName: string;
    projectArea: number;
    materialCost: number;
    laborCost: number;
    laborHours: number;
    equipmentCost: number;
    totalCost: number;
  };
}
